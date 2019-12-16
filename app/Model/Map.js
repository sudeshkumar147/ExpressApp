const mongoose = require('mongoose');
const mapSchema = mongoose.Schema({
    map: String,
},{
   timestamps: true,
});
module.exports = mongoose.model('Map',mapSchema);