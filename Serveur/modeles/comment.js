const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    
filmId : {type: String, required: true},
commentaire: {type: String , required: true}
});

module.exports = mongoose.model('Comment',commentSchema);