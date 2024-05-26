import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [qrCode, setQrCode] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
            setQrCode(response.data.qrCode);
        } catch (error) {
            console.error('Error registering user:', error)
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button onClick={handleRegister}>Register</button>
            {qrCode && <img src={qrCode} alt="QR code for 2FA" />}
        </div>
    )
}

export default Register