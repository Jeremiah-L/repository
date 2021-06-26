const express = require('express');

const app = express();

const port = 3000;

app.get('/', function(req,res){
    res.send("hello boys!");
});
app.get('/home', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/home.html');
    res.sendFile(__dirname + '/pages/home.html');
});

app.post('/home', function(req,res){
    res.send("post success!");
});

app.get('/about', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/about.html');
    res.sendFile(__dirname + '/pages/about.html');
});

app.post('/about', function(req,res){
    res.send("");
});

app.get('/contact', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/contact.html');
    res.sendFile(__dirname + '/pages/contact.html');
});

app.post('/contact', function(req,res){
    res.send("");
});

app.listen(port,function(){
    console.log('listen at port: ' + port)
}); 