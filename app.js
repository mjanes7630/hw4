const express = require("express");
const app = express();
var faker = require('faker');
var randomName = faker.name.findName();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html", {"fakerField":randomName});
});

app.get("/volume", function(req, res){
    res.render("Volume_atk.html", {"fakerField":randomName});
});

app.get("/protocol", function(req, res){
    res.render("Protocol_atk.html", {"fakerField":randomName});
});

app.get("/appLayer", function(req, res){
    res.render("App_atk.html", {"fakerField":randomName});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});