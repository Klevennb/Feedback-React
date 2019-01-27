import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, } from 'react-router-dom';
import UnderstandingFeedback from '../UnderStandingFeedback/UnderstandingFeedback';
import CommentsFeedback from '../CommentsFeedback/CommentsFeedback';
import SupportFeedback from '../SupportFeedback/SupportFeedback';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

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
            <Route exact path="/understanding-feedback" component={UnderstandingFeedback} />
            <Route exact path="/comments-feedback" component={CommentsFeedback} />
            <Route exact path="/support-feedback" component={SupportFeedback} />
            <Route exact path="/review-feedback" component={ReviewFeedback} />

          </div>
        </Router>
        <br/>
        {/* <ReviewFeedback /> */}
      </div>
    );
  }
}

export default App;
