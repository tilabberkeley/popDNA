import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Main.css'

const Login = () => {
    return (
        <div>
            <Navbar tab="login"/>
            <div className="login-container">
                <form>
                    <div className="sign-in-form">
                        <h4 className="text-center">Sign In</h4>
                        <label htmlFor="sign-in-form-username">Username</label>
                        <input type="text" className="sign-in-form-username" id="sign-in-form-username"/>
                        <label htmlFor="sign-in-form-password">Password</label>
                        <input type="text" className="sign-in-form-password" id="sign-in-form-password"/>
                        <button type="submit" className="sign-in-form-button">Sign In</button>
                    </div>
                </form>
            </div>

            <Footer />       
        </div>
    )
}

export default Login