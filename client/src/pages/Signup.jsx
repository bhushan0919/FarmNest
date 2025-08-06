import React, { useState } from 'react';
import './Auth.css';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!name || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        setError('');
        console.log('Signup successful', { name, email, password });

        // Call your signup API here
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Sign Up for FarmNest</h2>
                {error && <p className="auth-error">{error}</p>}
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>User Type:</label>
                <div className="user-type">
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="farmer"
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                        Farmer
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="hotel"
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                        Hotel / Buyer
                    </label>
                </div>
                <button type="submit" className="auth-btn">Sign Up</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    );
};

export default Signup;
