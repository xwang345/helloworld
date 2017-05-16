/**********************************************************************************  
 * WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ___Xiaochen Wang_____ Student ID: __015297153_____ Date: _____15 May 2017___
*
*  Online (Heroku) URL: https://secret-gorge-83399.herokuapp.com/
*
********************************************************************************/ 
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Xiaochen Wang - 015297153");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);