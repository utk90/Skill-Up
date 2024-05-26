import React, { useState } from 'react'
import axios from 'axios';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setTokenInput] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password, token });
            setToken(response.data.token);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <input type="text" value={token} onChange={(e) => setTokenInput(e.target.value)} placeholder='2FA Token' />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login