const express=require('express');
// const comm=require('../modeles/comment');
var router=express.Router();
//const mongo=require('./bd.js');

const mongoose = require("mongoose");
// const HttpError = require("../Models/http-error");
const Comment = require('../modeles/comment');

 var uri = "mongodb://zakaria:ok@clusterzakaria-shard-00-00.dmmf8.mongodb.net:27017,clusterzakaria-shard-00-01.dmmf8.mongodb.net:27017,clusterzakaria-shard-00-02.dmmf8.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-w7q5sl-shard-0&authSource=admin&retryWrites=true&w=majority";




mongoose.connect(uri).then(() => {
    console.log('connected successfuly');
}).catch((err) => {
    console.log("connection failed");
});

const getAll = async (req,resp) => {
     let result = await Comment.find().exec();
   resp.send(result);
    
}

const getComment = async (req, res) => {
    filmId = req.params.id; 
    console.log(filmId);
    let result = await Comment.find().exec();
    const comm = result.filter((c => {
        return c.filmId == filmId;
    }))
    console.log(comm);

    if (!comm || comm.length === 0) {
        return res.json({ comment: "pas de commentaire" });
    }
    res.json({ comm });
}

// const getComment=async (req,resp,next)=>{
//     let result = await Comment.find().exec();
//     resp.send(result);
    
// };
const postComment=async (req,resp,next)=>{
    const {filmId,comment} =req.body;
    console.log(comment);
    console.log(filmId);
    const createdComment=new Comment({
       filmId,
       commentaire:comment
    }
)
    
const result=await createdComment.save()
console.log("ok");
resp.send({result});
   
  
    
};

exports.getComment=getComment;
exports.postComment=postComment;
exports.getAll=getAll;
// exports.getCommentaire=getCommentaire;
