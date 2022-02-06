import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
      <footer className="responsive-blog-footer">
      <div className="row">
        <div className="medium-8 columns small-order-2 medium-order-1 about-container">
          <div className="row">
            <div className="hide-for-small-only medium-4 columns about-section">
              <img src="https://placehold.it/250x250"/>
            </div>
            <div className="medium-8 columns about-section">
              <h4> About Me</h4>
              <p>paragraph about how amazing and awesome i am paragraph about how amazing and awesome i am paragraph about how amazing and awesome i am</p>
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
        <div className="small-12 medium-4 columns small-order-1 medium-order-2 mailing-container">
          <h4 className="mailing-list">Join my mailing list</h4>
          <input type="text" placeholder="Email Address"/>
          <Link className="button expanded subscribe-button" to="#">Subscribe Now</Link>
        </div>
      </div>
      <div className="row tag-search">
        <div className="columns">
          <h4>Search by Tag</h4>
          <ul className="menu simple tag-section">
            <li><Link to="">word</Link></li>
          </ul>
        </div>
      </div>
      <div className="row columns flex-container align-justify">
        <p> all rights reserved</p>
        <div className="up-arrow">
          <Link to="#top"><i className="fa fa-chevron-circle-up" aria-hidden="true"></i></Link>
        </div>
      </div>

    </footer>


    </div>
  )
}

export default Footer

