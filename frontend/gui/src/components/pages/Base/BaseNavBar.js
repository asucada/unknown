import React, { Component,useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

function BaseNavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
    <div className="base-nav">
        <nav className="base-nav-extend">
            <ul>
            <div className="base-item" onClick={handleClick}>
                {click ? <li>Course</li> : <li style={{color:"red"}}>Course</li> }
            </div>
                <li className="base-item">
                        Project
                </li>
                <li className="base-item">
                    Job
                </li>
            </ul>
       </nav>
    </div>
    );
}

export default BaseNavBar
