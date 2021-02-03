import React, { useState } from 'react';
import {
    Link
} from 'react-router-dom';
//components
import { Button } from '../Button';
//images
import logo from './logo.png';

function Header() {

      const [click, setClick] = useState(false);
      const{button, setButton} = useState(true);

      const handleClick = () => setClick(!click);
      const closeMobileMenu =() => setClick(false)

      const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }   else {
            setButton(true);
            }
      };

    window.addEventListener('resize', showButton);

    return (
    <header>
       <div className="logo">
        <Link to='/' className="navbar-logo">
           <img src ={logo} height={50} mode='fit' alt="My logo" />
        </Link>
       </div>

       <div className='menu-icon' onClick={handleClick}>
       {click ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
       </div>

       <nav className="navbar-expand-sm">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to="/webd">
                Web Development
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/ml">
                Machine Learning
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/data">
              Data Science
              </Link>
            </li>

            <li className="nav-btn">
            {button ? (
                <Link to='/log-in' className="btn-link">
                    <Button buttonStyle='btn--outline'>
                        LOG IN
                    </Button>
                </Link>
            ) : (
                <Link to='/sign-in' className="btn-link">
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' >
                        SIGN IN
                    </Button>
                </Link>
            )}
            </li>

        </ul>
       </nav>
    </header>
    );
}

export default Header;
