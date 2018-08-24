import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";
import {postAction} from "./actions/PostAction";
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';
import { Layout, Menu } from 'antd';
import PostList from './PostList';
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
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"

                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>

                            <AutoComplete
                                dataSource={dataSource}
                                style={{ width: 200 }}
                                onSelect={onSelect}
                                onSearch={this.handleSearch}
                                placeholder="input here"
                            />

                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Router>
            <Switch>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                            <Route exact path="/" component={PostList}/>
                           {/* <Route exact path={"/"} component={PostDetail}/>*/}
                        </div>
            </Switch>
        </Router>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        imdb aplication
                    </Footer>
                </Layout>

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
