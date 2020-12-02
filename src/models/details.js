const mongoose = require('mongoose')

const detailsSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    dueamount: {
        type: Number,
        required: true,
        trim: true
    },
    monthspaid: {
        type: Number,
        required: true,
        trim: true,
        minlength: 2
    },
    status: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    }
})

const details = mongoose.model('details', detailsSchema)

module.exports = details