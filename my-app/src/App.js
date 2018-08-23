import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostList from "./PostList";
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {postReducer} from "./reducers/PostReducer";

const reducers = combineReducers({
    posts: postReducer,

});
const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div style ={ {backgroundColor:'#fafafa'} }>
                        <Switch>
                            <Route exact path="/" component={PostList}/>

                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;