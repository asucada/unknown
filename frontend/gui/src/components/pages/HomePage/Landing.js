import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Button from '../../Button';
import "./Landing.css";


function Landing() {
    return (
        <div className='landing-container'>
            <h1>Be Whoever You Want To Be.</h1>
            <p> What are you waiting for? Get JobEd!</p>
        </div>
    )
}

export default Landing
