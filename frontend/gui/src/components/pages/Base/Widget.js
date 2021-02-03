import React from "react";

import './Widget.css';
import ananya from "./ananya.png"

const group = (posts, n) => posts.reduce((acc, x, i) => {
  const idx = Math.floor(i / n);
  acc[idx] = [...(acc[idx] || []), x];
  return acc;
}, []);

const Widget = ({posts, loading, postsPerPage}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
    <div className="xob">{group(posts, 3).map(children =>
        <table>
            <tr>
                {children.map((post,id) =>
                 <td key={id}>
                     <div>
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
                 </td>
                 )}
            </tr>
        </table>
    )}
    </div>
    );
}

export default Widget;




