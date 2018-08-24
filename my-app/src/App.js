import React, { Component } from 'react';
import './App.css';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {postReducer} from "./reducers/PostReducer";
import Template from './Template';


const reducers = combineReducers({
    posts: postReducer,

});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                    <Template/>
            </Provider>
        );
    }
}

export default App;