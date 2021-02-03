import React from 'react';
import Button from '../../../Button';
//css
import './webPage.css'
//pictures
import ananya from "./ananya.png";


function webPage() {
    return(
    <div className="box">
        <div className="card">
            <div className="sneaker">
                <div className="circle"></div>
                <img src={ananya} alt="adidas" />

            </div>
            <div className="info">
                <h1 className="title">Learn React </h1>
                <h3>THIS COURSE IS MEANT FOR ABSOLUTE BEGINNERS WHO HAVE NEVER PROGRAMMED</h3>
                 <div className="sizes">
                     <button>39</button>
                     <button>40</button>
                     <button className="active">42</button>
                     <button>44</button>
                 </div>
                 <div className="purchase">
                    <button>Purchase</button>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default webPage