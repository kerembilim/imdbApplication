import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {postAction} from "./actions/PostAction";
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import {Icon} from 'antd';
import PostList from './PostList';
import Update from './Update';
import Create from './Create';
class Template extends Component {
    componentWillMount(){
        const {postAction} = this.props;
        postAction();

    }
    render()
    {
        return(
            <div style={{backgroundColor:'black'}}>
                    <div>
                        <div style={{backgroundColor:'#2196f3',height:50}}>
                            <Router>
                                <div>
                                    <Link to="/"><Icon style={{fontSize:30,color:'black',padding:15}} type="home" /></Link>
                                    <Link to="/create"><Icon style={{fontSize:30,color:'black',padding:15}} type="file-add" /></Link>
                                  <Switch>
                                    <Route exact path="/" component={PostList}/>
                                    <Route exact path={"/create"} component={Create}/>
                                    <Route exact path={"/update/:postId"} component={Update}/>
                                 </Switch>
                                </div>
                            </Router>
                        </div>

                    </div>
            </div>
        );
}
}
let storeToProps = (store) => {
    return {
        posts: store.posts.posts
    };
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({postAction: postAction}, dispatch);
};
export default connect(storeToProps, dispatchToProps)(Template);