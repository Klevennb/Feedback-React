import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class FeelingFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: ''
        };
    }
    //if a number is selected, the state will be changed
    handleChange = (event) => {
        this.setState({ feeling: event.target.value });
        
    }

    //will disable button if a number isn't selected
    buttonRender = () => {
        if (this.state.feeling === '') {
            return <button disabled>Next</button>
        } else {
            return <button onClick={this.nextPage}>Next</button>
        }
    }
    //sends to next page
    nextPage = () => {
        const action = {
            type: 'SET_FEELING',
            payload: this.state.feeling
        }
        this.props.dispatch(action);  //sends to reducer
        this.props.history.push('/understanding-feedback');

    }
    render() {
        

        return (
            <div>
                <h2>How are you feeling today?</h2>
                <br />
                <div>
                    <h5>Feeling?</h5>
                    <select value={this.state.value}
                    onChange={this.handleChange}>
                        <option></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                <div>{this.buttonRender()}</div>
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(FeelingFeedback);