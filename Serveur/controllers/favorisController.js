const express=require('express');
// const comm=require('../modeles/comment');
var router=express.Router();
//const mongo=require('./bd.js');

const mongoose = require("mongoose");
// const HttpError = require("../Models/http-error");
const Favoris = require('../modeles/favoris');

 var uri = "mongodb://zakaria:ok@clusterzakaria-shard-00-00.dmmf8.mongodb.net:27017,clusterzakaria-shard-00-01.dmmf8.mongodb.net:27017,clusterzakaria-shard-00-02.dmmf8.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-w7q5sl-shard-0&authSource=admin&retryWrites=true&w=majority";




mongoose.connect(uri).then(() => {
    console.log('connected successfuly');
}).catch((err) => {
    console.log("connection failed");
});

const getAll = async (req,resp) => {
     let result = await Favoris.find().exec();
   resp.send(result);
    
}

const postFavoris=async (req,resp,next)=>{
    const {filmId} =req.body;
    
    console.log(filmId);
    const createdComment=new Favoris({
       filmId
    }
)

const result=await createdComment.save()
console.log("ok");
resp.send({result});
};

exports.postFavoris=postFavoris;
exports.getAll=getAll;
// exports.getCommentaire=getCommentaire;
