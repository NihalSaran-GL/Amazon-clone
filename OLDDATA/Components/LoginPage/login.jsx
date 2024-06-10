import React, { useState, useEffect } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in when the component mounts
        const loggedIn = sessionStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            mobileNumber: emailOrPhone,
            password
        };

        try {
          //  const response = await axios.get('http://localhost:3001/users', {
           const response = await axios.get('https://api-amazon-clone.vercel.app/users', {
                params: user
            });

            if (response.data.length > 0) {
                console.log('Login successful');
                setIsLoggedIn(true);
                sessionStorage.setItem('isLoggedIn', 'true'); // Store login state in sessionStorage
                navigate('/Amazon-clone');
            } else {
                console.log('Invalid mobile number or password');
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Clear login state
        sessionStorage.removeItem('isLoggedIn'); // Remove login state from sessionStorage
        console.log('Logged out!');
    };

    if (isLoggedIn) {
        return (
            <div className="login__logoutContainer">
                <p>You are logged in!</p>
                <button onClick={handleLogout} className="login__logoutButton">Logout</button>
            </div>
        );
    } else {
        return (
            <div className='login'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="Amazon Logo"
                />

                <div className='login__container'>
                    <h1>Sign-in</h1>

                    <form onSubmit={handleSubmit}>
                        <h5>Mobile number</h5>
                        <input
                            type='text'
                            value={emailOrPhone}
                            onChange={e => setEmailOrPhone(e.target.value)}
                        />

                        <h5>Password</h5>
                        <input
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button type='submit' className='login__signInButton'>Sign In</button>
                    </form>

                    <p>
                        By creating an account or logging in, you agree to Amazon’s <span className="blueText">Conditions of Use</span> and <span className="blueText">Privacy Policy</span>.
                    </p>

                </div>
                <div className="new">
                    <hr className='hr' />
                    <span>New to Amazon?</span>
                    <hr className='hr' />
                </div>
                <Link to='/signup'>
                    <button className='login__registerButton'>Create your Amazon Account</button>
                </Link>
            </div>
        );
    }
}

export default Login;
