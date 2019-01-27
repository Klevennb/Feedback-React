import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={FeelingFeedback} />
            <Route exact path="/customer-info" component={CustomerInfo} />
            <Route exact path="/check-out" component={CheckOut} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
