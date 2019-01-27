import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class SupportFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            support: ''
        };
    }
    //if a number is selected, the state will be changed
    handleChange = (event) => {
        this.setState({ support: event.target.value });

    }

    //will disable button if a number isn't selected
    buttonRender = () => {
        if (this.state.support === '') {
            return <button disabled>Next</button>
        } else {
            return <button onClick={this.nextPage}>Next</button>
        }
    }
    //sends to next page
    nextPage = () => {
        const action = {
            type: 'SET_SUPPORT',
            payload: this.state.support
        }
        this.props.dispatch(action);
        this.props.history.push('/comments-feedback');

    }
    render() {
        return (
            <div>
                <h2>How Well Are You Being Supported?</h2>
                <br />
                <div>
                    <h5>Support?</h5>
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

export default connect()(SupportFeedback);