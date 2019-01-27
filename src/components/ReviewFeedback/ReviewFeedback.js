import React, { Component } from 'react';
import {connect} from 'react-redux';

class ReviewFeedback extends Component {
    constructor(props) {
        super(props)
        this.state ={
            feeling: this.props.reduxStore.feedbackScores[0],
            understanding: this.props.reduxStore.feedbackScores[1],
            support: this.props.reduxStore.feedbackScores[2],
            comments: this.props.reduxStore.feedbackScores[3]
        }
    }
    
    render() {

        return (
            <div>
                <h3>Review:</h3>
                <h4>Feeling: {this.state.feeling}</h4>
                <h4>Understanding: {this.state.understanding}</h4>
                <h4>Support: {this.state.support}</h4>
                <h4>Comments: {this.state.comments}</h4>
                <button disabled>Submit</button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(ReviewFeedback);