import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//components
import { Button } from '../Button';
//import
import logo from './logo.png';


function Footer() {
    return (
      <div className='footer-container'>
        <div className = 'footer-links'>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Company</h2>
                    <Link to='/'>About</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Press</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Affiliates</Link>
                    <Link to='/'>Partnerships</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Community</h2>
                    <Link to='/'>Go Premium</Link>
                    <Link to='/'>Team Plans</Link>
                    <Link to='/'>Refer a Friend</Link>
                    <Link to='/'>Limited Memberships</Link>
                    <Link to='/'>Scholarships</Link>
                    <Link to='/'>Free Classes</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Teaching</h2>
                    <Link to='/'>Become a Teacher</Link>
                    <Link to='/'>Teaching Academy</Link>
                    <Link to='/'>Teacher Handbook</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Mobile</h2>
                    <Link to='/sign-up'><i className="fab fa-apple" >Apple Store</i></Link>
                    <Link to='/'><i className="fab fa-google-play"></i>Google Play </Link>
                </div>
            </div>
          </div>
          <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                      <img src ={logo} height={50} mode='fit' alt="My logo" />
                    </Link>
                </div>
                <small className="website-rights">JobEd <i className="fas fa-copyright"> 2020</i> </small>
                <div className="social-icons">
                    <Link className="social-icons-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="Facebook"
                    >
                        <i className="fab fa-facebook"></i>
                    </Link>

                   <Link className="social-icons-link instagram"
                    to="/"
                    target="_blank"
                    aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icons-link youtube"
                    to="/"
                    target="_blank"
                    aria-label="Youtube">
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link className="social-icons-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="social-icons-link linkedin"
                    to="/"
                    target="_blank"
                    aria-label="Linkedin">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
          </section>
        </div>
    );
  }


export default Footer;
