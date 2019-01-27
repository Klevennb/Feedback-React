import React, { Component } from 'react';
import { connect } from 'react-redux';
class UnderstandingFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understanding: ''
        };
    }
    //if a number is selected, the state will be changed
    handleChange = (event) => {
        this.setState({ understanding: event.target.value });

    }

    //will disable button if a number isn't selected
    buttonRender = () => {
        if (this.state.understanding === '') {
            return <button disabled>Next</button>
        } else {
            return <button onClick={this.nextPage}>Next</button>
        }
    }
    //sends to next page
    nextPage = () => {
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        }
        this.props.dispatch(action);
        this.props.history.push('/support-feedback');

    }
    render() {
        return (
            <div>
                <h2>How Well Are You Understanding The Content?</h2>
                <br />
                <div>
                    <h5>Understanding?</h5>
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
            </div>
        );
    }
}

export default connect() (UnderstandingFeedback);