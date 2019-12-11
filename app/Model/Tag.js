const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
       tag:String,
},{
    timestamps: true
});

TagSchema.index({tag: 1},{unique: true});

module.exports = mongoose.model('Tag',TagSchema);