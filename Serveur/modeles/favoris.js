const mongoose = require('mongoose');

const favorisSchema = new mongoose.Schema({
    
filmId : {type: String, required: true}
});

module.exports = mongoose.model('Favoris',favorisSchema);