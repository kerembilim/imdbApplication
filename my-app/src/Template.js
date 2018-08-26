import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {postAction} from "./actions/PostAction";
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import { Icon,AutoComplete,Button} from 'antd';
import PostList from './PostList';
import Update from './Update';
import Create from './Create';

function onSelect(value) {
    console.log('onSelect', value);
}
class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:[],
        };
    }
    componentWillMount(){
        const {postAction} = this.props;
        postAction();
        this.autoComplete();

    }
    state = {
        dataSource: [],
    }
    autoComplete()
    {
        const { posts } = this.props;
        if (posts.length==0)
        {
            console.log('postlar bos');
        }
        else
            posts.map(res=>this.handleSearch(res.title))

    }
    onSelect(value) {
        console.log('onSelect', value);
    }
    handleSearch (value) {
        console.log(value)
    }
    getLenght(d)
    {
        const { posts } = this.props;
       posts.map(res=>d.push(res.title));
    }

    render()
    {

        var dataSource = [];
        this.getLenght(dataSource);
        console.log(dataSource);

        return(
            <div style={{backgroundColor:'black'}}>
                    <div>
                        <div style={{backgroundColor:'#2196f3',height:50}}>
                            <Router>
                                <div>
                                    <Link to="/"><Icon style={{fontSize:30,color:'black',padding:15}} type="home" /></Link>
                                    <Link to="/create"><Icon style={{fontSize:30,color:'black',padding:15}} type="file-add" /></Link>
                                        <AutoComplete
                                            dataSource={dataSource}
                                            style={{ width: 200 }}
                                            onSelect={onSelect}
                                            onSearch={this.handleSearch}
                                            placeholder="input here"
                                        />
                                  <Switch>
                                    <Route exact path="/" component={PostList}/>
                                    <Route exact path={"/create"} component={Create}/>
                                    <Route exact path={"/update/:postId"} component={Update}/>
                                 </Switch>
                                </div>
                            </Router>
                            {/*autocomplete eklenecek*/}
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