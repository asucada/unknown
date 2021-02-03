import React, { Component, useState } from 'react';
import MLCourse from './MLCourse';
//import {mlCourse} from './data';


const MLCourseList = () => {
    const [courses, setCourses] = useState([
       {
            name:'Bob Zirrol',
            length:'360min',
            id:1
        },
        {
            name:'Dev Ed',
            length:'72min',
            id:2
        },
        {
            name:'Simple Tut',
            length:'64min',
            id:3
        }
    ]);
    return (

    <section>
        {courses.map(course => (
            <MLCourse name={course.name} length={course.length} key={course.id} />
        ))}
    </section>
    );
  }


export default MLCourseList;