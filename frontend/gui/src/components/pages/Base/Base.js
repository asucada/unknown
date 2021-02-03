import React from "react";
import BaseCover from "./BaseCover";
import BaseNavBar from "./BaseNavBar";
import BaseFilter from "./BaseFilter";
import PageWidget from "./PageWidgets";

import webPage from "../Profession/WebDevelopment/webPage"
class Base extends React.Component {
    render() {
        return(
            <div>
                <BaseCover />
                <BaseNavBar />
                <div className="test">
                    <BaseFilter />
                    <PageWidget />
                </div>
            </div>
        );
    }
}

export default Base