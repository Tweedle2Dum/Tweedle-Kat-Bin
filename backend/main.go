package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"net/http"
	"os"
	"fmt"
)

type Entry struct {
	Id  uint64 `gorm:"primary_key;auto_increment;not_null"`
	Txt string `json:"txt"`
}

func data(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		if c.Request.Method == "POST" {
			var entry Entry
			if err := c.BindJSON(&entry); err != nil {
				c.IndentedJSON(http.StatusCreated, gin.H{
					"error": err,
				})
			}
			err := db.Create(&entry).Error
			if err != nil {
				c.IndentedJSON(http.StatusCreated, gin.H{
					"error": err,
				})
			}
			c.IndentedJSON(http.StatusCreated, gin.H{
				"entry": entry,
			})
		}

		if c.Request.Method == "GET" {
			var entries []Entry
			db.Find(&entries)
			c.IndentedJSON(http.StatusOK, gin.H{
				"result": entries,
			})
		}
	}

}

func GetEntry(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		id := c.Params.ByName("id")
 		var entry Entry
 		if err := db.Where("id = ?", id).First(&entry).Error; err != nil {
    	c.AbortWithStatus(404)
    	fmt.Println(err)
 } else {
    c.IndentedJSON(200, gin.H{
		"result": entry,
	})
 }

	
}
}

func ping(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "POST,HEAD,PATCH, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	godotenv.Load()
	dburi := os.Getenv("DB_URL")
	db, err := gorm.Open(postgres.Open(dburi), &gorm.Config{})
	if err != nil {
		log.Fatal("failed to connect database", err)
	}
	db.AutoMigrate(&Entry{})

	r := gin.Default()
	r.Use(CORSMiddleware())
	r.GET("/", ping)
	r.GET("data/", data(db))
	r.POST("data/", data(db))
	r.GET("data/:id",GetEntry(db))
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
