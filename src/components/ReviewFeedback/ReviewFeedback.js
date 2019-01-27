import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
            return <button disabled>Submit</button>
        } else {
            return <button onClick={this.nextPage}>Submit</button>
        }
    }
    nextPage = () => {
        console.log('ji');
        
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