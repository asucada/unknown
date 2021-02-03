import React from "react"
import Button from "../../Button"
import webPage from "../Profession/WebDevelopment/webPage"
//Stylesheets
import "./baseProfession.css"

function baseProfession() {
    return(
        <div className="base">
            <div className="base__title">
                <h3 style={{fontSize: "92px"}}>Web Development</h3>
            </div>
            <div className="base__section">
                <button className="active">Courses</button>
                <button className="active">Projects</button>
                <button className="active">Jobs</button>
            </div>
            <div className="todo-list">
                <h3 style={{ color: 'blue' }}>Difficulty</h3>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>Beginner</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>Intermediate</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>Advanced</p>
                </div>
            <break/>
                <h3 style={{ color: 'white' }}>Duration</h3>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>Less than 1 hour</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>1-3 hr</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>More than 3 hr</p>
                </div>
            <break/>
                <h3 style={{ color: 'white' }}>Cost</h3>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>All</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>Free</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>Paid</p>
                </div>
            </div>
            <div>
                <webPage/>
            </div>
        </div>
    );
}

export default baseProfession