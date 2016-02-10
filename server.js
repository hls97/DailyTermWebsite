var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 8080;
var questionBuilder = require('./public/controllers/getQuiz');

//use public files
app.use(express.static('public'));

//initial index.html request @domain/
app.get('/', function(request, response){
	response.sendFile(path.join(__dirname+"/public/index.html"));
});

//server side API get request
app.get('/getQuizlet', questionBuilder);


app.listen(port,function(){
    console.log(port);   
});



