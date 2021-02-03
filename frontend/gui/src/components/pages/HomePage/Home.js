import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne,homeObjTwo,homeObjThree} from './Data';
import Landing from './Landing';
//images
import bg from "./jpg-6.jpg";

function Home() {
    return(
    <div>
        <Landing />
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjThree} />
    </div>
    )
}

export default Home