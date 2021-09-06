const mongoose = require('mongoose');

const BuildingSchema = mongoose.Schema({
    name: String,
    floors: Number,
    classrooms: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
},
    {
        timeStamps: true
    });

module.exports = mongoose.model('Building', BuildingSchema);