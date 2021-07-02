const express = require('express');
const app = express();
const MongoClient = require('mongodb');
let db;
const port = 3000;
var ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://JeremiahL:r34@cluster0.ba4x3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json());
MongoClient.connect(uri, {useUnifiedTopology:true}, function(err,client){
    console.log("Connected to MongoDB Successfully!");
    db = client.db("mongodb-lecture");
})
app.listen(port,function(req,res){
    console.log("Listening at port" + port);
})
app.get('/addBlog', function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post('/addBlog', function(req,res){
    db.collection('blogs').insertOne(
        {
        title: "titleValue",
        content: "ContentValue"
        },
    function(error,result){ 
        if(error) throw error;
        res.send("blog added succesfully");
    })
})  
app.get('/getBlogs', function(req,res){
    db.collection('blogs').find({}).toArray(function(error,document){
        if(error) throw error;
        for(let counter = 0; counter < documents.length;counter++){
            res.write("Title: " + documents[counter].title + "Content:" + documents[counter].content + '\n');
        }  
        res.end();
    })
})  
app.post('/customBlog', function(req,res){
    db.collection('blogs').insertOne({
        title: req.body.title,
        content: req.body.content
    }, function(err,result){
        if(err) throw err;
        res.send('Blog added successfully');
    })
})
app.post('/findBlogWithID', function(req,res){
    db.collection('blogs').findOne({
        _id: req.body._id
    })
    db.collection('blogs').find({"_id" : ObjectId(req.body._id)}).toArray( function(error, documents){
        if(error) throw error;
        console.log(documents)
        res.send(documents)
    })
})

