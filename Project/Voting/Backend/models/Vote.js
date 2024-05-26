const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    candidate: { type: String, required: true },
    timeStamp: { type: Date, default: Date.now },
    iv: {
        type: Buffer, // Store IV as a buffer
        required: true,
    },
})

module.exports = mongoose.model('Vote', VoteSchema)