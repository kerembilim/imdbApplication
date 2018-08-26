import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {postAction} from "./actions/PostAction";
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import {connect} from "react-redux";
import {Card,Icon,Button} from 'antd';
import 'antd/dist/antd.css';
import axios from "axios/index";
const { Meta } = Card;
class PostList extends Component {
    componentDidMount(){
        const {postAction} = this.props;
        postAction();
    }

    onclick(id)
    {
        axios.post('http://localhost:3000/delete', {
            id: id,
        })
            .then(function (response) {
                console.log(response);
                window.location.reload();

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const { posts } = this.props;
        return(
            <div style={{ padding:30, paddingLeft:100}} >
                {posts.map((postIndex,index) =>

                                <span key={index} style={{height:'30',width:40,padding:5}}>

                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt={postIndex.title+'image'}  src={postIndex.imageurl} />}>
                                        <Meta
                                            title={postIndex.title}
                                            description={postIndex.year}
                                        />
                                        <div style={{paddingTop:10}}>
                                            <span>
                                                <Button ><Link to={`/update/${postIndex.ID}`}><Icon style={{fontSize:30}} type="edit" /></Link></Button>
                                            </span>
                                            <span style={{paddingLeft:2}}>
                                                <Button onClick={() => this.onclick(postIndex.ID)}><Icon style={{fontSize:30}} type="delete" /></Button>
                                            </span>
                                            <span style={{paddingLeft:2}}>
                                                <Button > <a key={postIndex.ID} href={postIndex.url}><Icon style={{fontSize:30}}type="arrow-right" /></a></Button>
                                            </span>

                                        </div>

                                    </Card>

                                </span>
                )}
            </div>
        )
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

export default connect(storeToProps, dispatchToProps)(PostList);
