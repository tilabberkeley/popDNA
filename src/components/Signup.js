import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Lab from '../assets/lab.jpg'
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <div>
            <Navbar tab="signup"/>
            <div className="form-registration">

                <figure className="form-registration-img">
                    <div className="text-center">
                    <img className="signup-picture" src={Lab} alt="" />
                    </div>
                    
                    <figcaption className="form-registration-img-caption">Start your DNA conversion journey here.</figcaption>
                </figure>

                <form className="form-registration-group" action="">
                    <input className="form-registration-input"  type="email" placeholder="Your email"/>
                    <div className="grid-x">
                        <div className="cell small-6">
                            <input className="form-registration-input"  type="text" placeholder="First name"/>
                        </div>
                        <div className="cell small-6">
                            <input className="form-registration-input"  type="text" placeholder="Last name"/>
                        </div>
                    </div>
                    <input className="form-registration-input"  type="password" placeholder="Password"/>

                    <input className="form-registration-submit-button" type="submit" value="Continue"/>
                    <p className="or-divider"><span>or</span></p>
                    <Link className="form-registration-social-button" to="#"><i className="fa fa-facebook-official" aria-hidden="true"></i> Sign Up With Facebook</Link>
                    <Link className="form-registration-google-button" to="#"><i className="fa fa-google-official" aria-hidden="true"></i> Sign Up With Google</Link>
                    <p className="form-registration-member-signin">Already registered? <Link to="/login">Log in</Link></p>
                    <p className="form-registration-terms"><Link to="#">Terms &amp; Conditions</Link>|<Link to="#">Privacy</Link></p>
                </form>

            </div>


            <Footer />
        </div>
    )
}


export default Signup