import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className='login'>
            <img
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                alt="Amazon Logo"
            />

            <div className='login__container'>
                <h1>Create Account</h1>

                <form>
                    <h5>Your name</h5>
                    <input type='text' placeholder='First and last name' />

                    <div>
                        <h5>Mobile number</h5>
                        <div className='mobileNo'>
                            <input className='input cc' type='text' defaultValue='+91' />
                            <input className='input' type='tel' placeholder='Mobile number' />
                        </div>
                    </div>

                    <h5>Password</h5>
                    <input type='password' placeholder='At least 6 characters' />

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
    )
}

export default SignUp;
