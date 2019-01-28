import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class ReviewFeedback extends Component {
    constructor(props) {
        super(props)
        this.state ={
            feeling: this.props.reduxStore.feedbackScores[0],
            understanding: this.props.reduxStore.feedbackScores[1],
            support: this.props.reduxStore.feedbackScores[2],
            comments: this.props.reduxStore.feedbackScores[3],
        }
    }

    renderButton = () => {
        if(this.props.reduxStore.feedbackScores.length < 4){
            return <Button variant="outlined" size="small" disabled>Incomplete</Button>
        } else {
            return <Button variant="outlined" color="primary" onClick={this.nextPage}>Submit</Button>
        }
    }
    nextPage = () => {
       console.log(this.state);
       const info = this.state;
        axios({
            method: 'POST',
            url: '/database',
            data: info
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            alert('Error in POST: ', error)
        });
       
        this.props.history.push('/feedback-successful');
    }
    
    render() {

        return (
            <div>
                <Card>
                    
                    <CardHeader
                        title="Review:" />
                    <CardContent>
                        <h4>Feeling: {this.state.feeling}</h4>
                        <h4>Understanding: {this.state.understanding}</h4>
                        <h4>Support: {this.state.support}</h4>
                        <h4>Comments: {this.state.comments}</h4>
                        
                        {this.renderButton()}
                        
                       
                    </CardContent>
                   
                </Card>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(ReviewFeedback);