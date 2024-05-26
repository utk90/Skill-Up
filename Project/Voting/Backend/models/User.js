const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    secret: { type: String, required: true },
    hasVoted: { type: Boolean, default: false }
})

module.exports = mongoose.model('User', UserSchema)