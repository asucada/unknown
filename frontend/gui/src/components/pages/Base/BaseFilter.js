import React from "react";

function BaseFilter() {
    return(
        <div className="todo-list">
                <h3 className="todo-category">Difficulty</h3>
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
                <h3 className="todo-category">Duration</h3>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>&lt; 1 hour</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>1-3 hour</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>&gt; 3 hour</p>
                </div>
            <break/>
            <h3 className="todo-category">Cost</h3>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>All</p>
                </div>
                <div className="todo-item">
                    <input type="checkbox" />
                    <p>Free</p>
                </div>
                <div className="todo-item" style={{bottomMargin: "20px"}}>
                    <input type="checkbox" />
                    <p>Paid</p>
                </div>
            <break/>
        </div>
    );
}

export default BaseFilter