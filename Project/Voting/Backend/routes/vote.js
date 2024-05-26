const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Vote = require('../models/Vote');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

router.post('/vote', authenticateToken, async (req, res) => {
    console.log('>>>>>VOTE_CAST')
    const { candidate } = req.body;
    const user = await User.findById(req.user.id);
    if (user.hasVoted) {
        return res.status(400).json({ message: 'User has already voted' });
    }

    const iv = crypto.randomBytes(16); // Generate a random IV
    const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, 'base64'); // Convert base64 string to buffer
    const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
    let encrypted = cipher.update(candidate, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const vote = new Vote({ userId: user._id, candidate: encrypted, iv });
    await vote.save();
    user.hasVoted = true;
    await user.save();
    res.status(201).json({ message: 'Vote casted' })
})


router.get('/results', authenticateToken, async (req, res) => {
    try {
        const votes = await Vote.find({});
        console.log('>>>>results', votes);

        const results = votes.reduce((acc, vote) => {
            try {
                if (!vote.candidate) {
                    console.warn('Candidate data is missing for vote:', vote._id);
                    return acc; // Skip processing if candidate data is missing
                }
                console.log('Candidate data:', vote.candidate);

                // Split IV and encrypted data
                const encrypted = vote.candidate;
                const iv = vote.iv;

                // Perform decryption
                const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(process.env.ENCRYPTION_KEY, 'base64'), iv);
                let decrypted = decipher.update(encrypted, 'hex', 'utf8');
                decrypted += decipher.final('utf8');

                // Increment vote count
                if (!acc[decrypted]) {
                    acc[decrypted] = 0;
                }
                acc[decrypted]++;
            } catch (error) {
                console.error('Error decrypting vote:', error);
                throw new Error('Failed to decrypt vote'); // Rethrow error for detailed logging
            }
            return acc;
        }, {});

        console.log('results', results);

        // Find winning candidate
        const winningCandidate = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
        console.log('winningCandidate', winningCandidate);

        // Send results to client
        res.json({ results, winningCandidate });
    } catch (error) {
        console.error('Error calculating results:', error);
        res.status(500).json({ message: 'Error calculating results', error: error.message });
    }
});



module.exports = router;