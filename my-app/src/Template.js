import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {postAction} from "./actions/PostAction";
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import { Layout, Menu,AutoComplete,Button} from 'antd';
import PostList from './PostList';
import Create from './Create';
const { Header, Content, Footer } = Layout;
function onSelect(value) {
    console.log('onSelect', value);
}
class Template extends Component {
    componentDidMount(){
        const {postAction} = this.props;
        postAction();
    }
    state = {
        dataSource: [],
    }
    onSelect(value) {
        console.log('onSelect', value);
    }
    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                'ahmet',
                'kerem' , 'bilim',
                value + value + value,
            ],
        });
    }

    render()
    {

        const { posts } = this.props;
        const { dataSource } = this.state;

        return(
            <div>
                <Router>
                    <div style ={ { backgroundImage: "url('http://nonstopwebsites.co.uk/wp-content/uploads/2017/12/bg-10-full.jpg')" ,backgroundSize:'percentage',borderRadius:15} }>
                        <Switch>
                            <Route exact path="/" component={PostList}/>
                            <Route exact path={"/create"} component={Create}/>
                        </Switch>
                    </div>
                </Router>
            </div>

        );
}
}
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <div className={match ? "active" : ""}>
                {match ? "> " : ""}
                <Link to={to}>{label}</Link>
            </div>
        )}
    />
);
let storeToProps = (store) => {
    return {
        posts: store.posts.posts
    };
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({postAction: postAction}, dispatch);

};

export default connect(storeToProps, dispatchToProps)(Template);
