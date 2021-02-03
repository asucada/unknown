import React, { Component } from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
//components


function homePage ({
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
}) {
 return (
    <div className="home__hero-section">
        <div className="container">
            <div className="row home__hero-row"
            style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                <div className="col">
                    <div className="home__hero-text-wrapper">
                        <div className="top-line"> {topLine} </div>
                        <h1>{headline}</h1>
                        <p>{description}</p>
                        <Link to="/sign-up">
                            <Button button='btn--wide' buttonColor='blue'>
                                {buttonLabel}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="home__hero-img-wrapper">
                        <img src={img} alt={alt} className="home__hero-img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default homePage;
