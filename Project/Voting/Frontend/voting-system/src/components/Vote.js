import React, { useState } from 'react'
import axios from 'axios';

const Vote = ({ token }) => {
    const [candidate, setCandidate] = useState('');

    const handleVote = async () => {
        try {
            await axios.post('http://localhost:5000/api/vote/vote', { candidate }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            alert('Voted casted successfully!')
        } catch (error) {
            console.error('Error casting vote:', error);
        }
    }
    return (
        <div>
            <h2>Vote</h2>
            <input type="text" value={candidate} onChange={(e) => setCandidate(e.target.value)} placeholder='Candidate Name' />
            <button onClick={handleVote}>Vote</button>
        </div>
    )
}

export default Vote