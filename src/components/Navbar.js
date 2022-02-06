import React from 'react'
import Logo from '../assets/dna.png'
import { Link } from "react-router-dom"
const Navbar = ({ tab }) => {
    return (
        <div>
            <nav className="top-bar">
                <ul className="menu title-area">
                    <li className="name"><Link to="/"><span>pop</span><img className="logo" src={Logo}/></Link></li>
                </ul>
                <section className="top-bar-section">
                    <ul className="menu right">
                        <li className={tab == "docs" ? "active" : ""}><Link to="/docs">Docs</Link></li>
                        <li className={tab == "login" ? "active" : ""}><Link to="/login">Login</Link></li>
                        <li className={tab == "signup" ? "active" : ""}><Link to="/signup">Signup</Link></li>
                    </ul>

                </section>
            </nav>
        </div>
    )
}

export default Navbar
