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
    //sends to next page
    nextPage = () => {
        const action = {
            type: 'SET_COMMENTS',
            payload: this.state.comments
        }
        this.props.dispatch(action);
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

export default connect()(CommentsFeedback);