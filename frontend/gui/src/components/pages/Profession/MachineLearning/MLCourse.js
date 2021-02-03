import React from 'react';

const MLCourse = ({ name,length }) => {

    return(
        <div>
            <h3>{name}</h3>
            <p>{length}</p>
        </div>
    );
};

export default MLCourse;