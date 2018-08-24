import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {postAction} from "./actions/PostAction";
import {connect} from "react-redux";
import {Card} from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;
class PostList extends Component {
    componentDidMount(){
        const {postAction} = this.props;
        postAction();
    }
    render() {
        const { posts } = this.props;
        return(
            <div style={{ padding:30, paddingLeft:100}} >
                {posts.map((postIndex,index) =>
                                <span key={index} style={{height:'30',width:400,padding:5}}>
                                    <a  style={{fontSize:17,color:'green'}} key={postIndex.ID} href={postIndex.url}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt={postIndex.title+'image'}  src={postIndex.imageurl} />}>
                                        <Meta
                                            title={postIndex.title}
                                            description={postIndex.year}
                                        />
                                    </Card>
                                    </a>
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
