import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {postAction,postUserAction} from "./actions/PostAction";
import {connect} from "react-redux";
class PostList extends Component {
    componentDidMount(){
        const {postAction} = this.props;
        postAction();
    }
    render() {
        const { posts } = this.props;
        return(
            <div style={{alignContent:'center', padding:30, paddingLeft:100}} >
                {posts.map(postIndex =>

                                <div style={{height:'30',width:400,padding:5}}>
                                    <span>
                                        <img src={postIndex.imageurl}  />
                                    </span>
                                    <span>
                                        <p style={{textAlign:'center',fontSize:17,color:'black'}}><b>Post Title :</b> {postIndex.title}</p>
                                        <p style={{textAlign:'center',fontSize:17,color:'black'}}><b>Post Year :</b> {postIndex.year}</p>


                                    </span>
                                    <a  style={{fontSize:17,color:'green'}} key={postIndex.ID} href={postIndex.url}>go on imdb</a>
                                    <hr/>

                                </div>

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
    return bindActionCreators({postAction: postAction,postUserAction:  postUserAction}, dispatch);

};

export default connect(storeToProps, dispatchToProps)(PostList);
