package main

import (
	"net/http"
	"context"
    "fmt"
    "log"
    "math/rand"
    "time"
	"github.com/gin-gonic/gin"
	"os"
	"github.com/cockroachdb/cockroach-go/v2/crdb/crdbgorm"
    "github.com/google/uuid"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

type Entry struct {
	Id  string `json:"id"`
	Txt string `json:"txt"`
	Uuid uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()"`
}


var entries = []Entry{
	{Id: "1", Txt: "Hellow"},
	{Id: "2", Txt: "fuck you"},
	{Id: "3", Txt: "bye"},
}



func data(c *gin.Context) {
	var entry Entry
  

	if c.Request.Method == "POST" {
		if err := c.BindJSON(&entry); err != nil {
			c.IndentedJSON(http.StatusCreated,gin.H{
        "error":err,
      })
		}
		entries = append(entries, entry)
		c.IndentedJSON(http.StatusCreated, entry)
	}

	if c.Request.Method == "GET" {
		c.IndentedJSON(http.StatusOK, entries)
	}
}

func collection(c *gin.Context){
	c.IndentedJSON(http.StatusOK,entries)


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
	r := gin.Default()
	r.Use(CORSMiddleware())
	r.GET("/", ping)
	r.GET("data/", data)
	r.POST("data/", data)
	r.GET("collection/",collection)
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
