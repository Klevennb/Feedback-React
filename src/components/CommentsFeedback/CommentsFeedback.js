import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class CommentsFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        };
    }

    handleChange = (event) => {
        this.setState({ comments: event.target.value });  
    }

    //will disable button if a number isn't selected
    buttonRender = () => {
        if (this.state.comments === '') {
            return <button disabled>Next</button>
        } else {
            return <button onClick={this.nextPage}>Next</button>
        }
    }
    //sends to next page, but alerts you if you went out of order
    nextPage = () => {
        const action = {
            type: 'SET_COMMENTS',
            payload: this.state.comments
        }
        this.props.dispatch(action);
        const counter = this.props.reduxStore.feedbackScores.length;
        console.log(counter);
        
        if(counter !== 3){
            alert("It looks like you strayed from the happy path. Please Start over.");
        }
        this.props.history.push('/review-feedback');

    }
    render() {
        return (
            <div>
                <h2>Any Comments You Want To Leave?</h2>
                <br />
                <div>
                    <h5>Comments?</h5>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </div>
                <div>{this.buttonRender()}</div>
                <ReviewFeedback />
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(CommentsFeedback);