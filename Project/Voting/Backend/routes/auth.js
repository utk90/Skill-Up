const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log('user>>>>>>>>>>>>>>>>')
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const secret = speakeasy.generateSecret();
    const user = new User({ username, password: hashedPassword, secret: secret.base32 });
    console.log('user', user)
    await user.save();
    qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
        res.status(201).json({ message: 'User registered', qrcode: data_url })
    })
})

router.post('/login', async (req, res) => {
    const { username, password, token } = req.body;
    console.log('>>>>>LOGIN')
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    // const verified = speakeasy.totp.verify({
    //     secret: user.secret,
    //     encoding: 'base32',
    //     token
    // })

    // if (!verified) {
    //     return res.status(401).json({ message: 'Invalid 2FA token' });
    // }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token: jwtToken })
})

module.exports = router;