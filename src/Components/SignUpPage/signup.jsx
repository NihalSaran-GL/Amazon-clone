import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            name,
            mobileNumber,
            password
        };

        try {
        //    const response = await axios.post('http://localhost:3001/users', user);
            const response = await axios.post('https://api-amazon-clone.vercel.app/users', user);
            console.log(response.data);
            navigate('/signin');
        } catch (error) {
            console.error('There was an error creating the account!', error);
        }
    };

    return (
        <div className='login'>
            <img
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                alt="Amazon Logo"
            />

            <div className='login__container'>
                <h1>Create Account</h1>

                <form onSubmit={handleSubmit}>
                    <h5>Your name</h5>
                    <input
                        type='text'
                        placeholder='First and last name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <div>
                        <h5>Mobile number</h5>
                        <div className='mobileNo'>
                            <input
                                className='input cc'
                                type='text'
                                defaultValue='+91'
                                readOnly
                            />
                            <input
                                className='input'
                                type='tel'
                                placeholder='Mobile number'
                                value={mobileNumber}
                                onChange={e => setMobileNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <h5>Password</h5>
                    <input
                        type='password'
                        placeholder='At least 6 characters'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit' className='login__signInButton'>Sign Up</button>
                </form>

                <p>
                    By creating an account or logging in, you agree to Amazon’s <span className="blueText">Conditions of Use</span> and <span className="blueText">Privacy Policy</span>.
                </p>

            </div>
            <div className="new">
                <hr className='hr1' />
                <span>Already have an account?</span>
                <hr className='hr1' />
            </div>
            <Link to='/signin'>
                <button className='login__registerButton'>Sign In</button>
            </Link>
        </div>
    );
}

export default SignUp;
