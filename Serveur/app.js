const express=require("express");
const bodyparser=require('body-parser');

const placesRoutes=require('./routes/comments-routes');
const favorisRoutes=require('./routes/favoris-routes');

const cors = require('cors');
const commentController=require('./controllers/commentController')

const path = require('path');
 const PORT = process.env.PORT || 80; 
 var app = express()
 app.use(cors()) 
 app.use('/', express.static(path.join(__dirname, "Angular")));
  app.use(express.json())

//const {MongoClient}=require('./db.js');

// const app=express();
// app.use(cors())
// app.use(express.json());
app.use('/api/comment',placesRoutes);
app.use('/api/favoris',favorisRoutes);

app.listen(7000,()=>
{
    console.log("running is done");
});











