import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackScores = (state = [], action) => {
    if (action.type === 'SET_FEELING') {
        state = []
        return [...state, action.payload];
    }else if (action.type === 'SET_UNDERSTANDING'){
        return [...state, action.payload]
    }else if (action.type === 'SET_SUPPORT'){
        return [...state, action.payload]
    }else if (action.type === 'SET_COMMENTS'){
        return [...state, action.payload]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackScores,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
