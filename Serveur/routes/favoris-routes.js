const express=require("express");
const router=express.Router();
const favorisControllers=require('../controllers/favorisController');

router.get('/',favorisControllers.getAll)
router.post('/', favorisControllers.postFavoris);

// router.get('/',commentsControllers.getCommentaire)
module.exports=router;