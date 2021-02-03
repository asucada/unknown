import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Home from './components/pages/HomePage/Home';

import WebPage from './components/pages/Profession/WebDevelopment/webPage';
import MLCourseList from './components/pages/Profession/MachineLearning/MLCourseList';
import DataScience from './components/pages/Profession/DataScience/dataScience';

import baseProfession from './components/pages/Base/baseProfession';
import Base from './components/pages/Base/Base';
import pageWidgets from './components/pages/Test/PageWidgets';

//includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">

      <Header />
        <Switch>
                <Route exact path='/' component={Home} />
        </Switch>

        <Route exact path='/ml' component={pageWidgets} />
        <Route exact path='/webd' component={Base} />
        <Route exact path='/data' component={DataScience} />

        <Route exact path='/sign-in' component={WebPage} />

      <Footer />

      </div>
     </Router>
    );
  }
}

export default App;
