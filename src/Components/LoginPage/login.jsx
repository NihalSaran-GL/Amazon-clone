import React from 'react';
import './login.css';

function Login() {
    return (
        <div className='login'>
            <img
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                alt="Amazon Logo"
            />

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail or mobile phone number</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

            </div>
            <div className="new">
                <hr className='hr' />
                <span>New to Amazon?</span>
                <hr className='hr' />
            </div>
            <button className='login__registerButton'>Create your Amazon Account</button>
        </div>
    )
}

export default Login;
