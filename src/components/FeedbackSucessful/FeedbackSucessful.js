import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class FeedbackSuccessful extends Component {


    alertSuccess = () => {
        alert("Thank You For Your Submission");
    }
 
    //sends to next page
    nextPage = () => {
        const action = {
            type: 'CLEAR_REDUCER',
            payload: null
        }
        this.props.dispatch(action)
        this.props.history.push('/');

    }
    render() {
        return (
            <div>
                {/* {this.alertSuccess()} */}
                <h1>Have A Good Night!!!</h1>
                <Button onClick={this.nextPage} variant="contained" size="large" color="primary">Leave More Feedback</Button>
            </div>
        );
    }
}

export default connect ()(FeedbackSuccessful);