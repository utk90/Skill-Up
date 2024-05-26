import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Results = ({ token }) => {
    const [results, setResults] = useState({});
    const [winningCandidate, setWinningCandidate] = useState('');

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/vote/results', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setResults(response.data.results);
                setWinningCandidate(response.data.winningCandidate);
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        }

        fetchResults();
    }, [token])

    return (
        <div>
            <h2>Results</h2>
            {Object.keys(results).length === 0 ? (<p>No votes casted yet.</p>) : (
                <div>
                    <h3>Winning Candidate: {winningCandidate}</h3>
                    <ul>
                        {Object.keys(results).map(candidate => (
                            <li key={candidate}>{candidate}: {results[candidate]} votes</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Results