package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)
func get(){
	fmt.Println("Bruh")
}
func hellow(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "pong",
    })
}
func main() {
  r := gin.Default()
  r.GET("/ping",hellow)
  get()
  r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}