package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func postData(c *gin.Context){

}

func getData(c *gin.Context){
  c.JSON(http.StatusOK,gin.H{
    "data":"meow",
  })
}

func ping(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "pong",
    })
}
func main() {
  r := gin.Default()
  r.GET("/",ping)
  r.POST("new/",postData)
  r.POST("get/",getData)
  r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}