import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {postAction} from "./actions/PostAction";
import {BrowserRouter as Link} from "react-router-dom";
import {connect} from "react-redux";
import {Card,Icon,Button,Input} from 'antd';
import 'antd/dist/antd.css';
import axios from "axios/index";
const { Meta } = Card;
class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:''
        };
    }
    componentDidMount(){
        const {postAction} = this.props;
        postAction();
    }
    navigate(Location,id)
    {
        this.props.history.push(Location+id);
    }
    updateSearch(event)
    {
        this.setState({search:event.target.value.substr(0,20)})
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
        let filteredposts=posts.filter((post) =>{
            return post.title.toLowerCase().indexOf(this.state.search) !==-1;
        } );
        return(
            <div style={{ padding:30, paddingLeft:100}} >
                <Input  value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Movie Title" />
                {filteredposts.map((res) =>
                    <div key={res.ID} style={{height:'30',width:40,padding:5}}>

                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt={res.title+'image'}  src={res.imageurl} />}>
                                        <Meta
                                            title={res.title}
                                            description={res.year}
                                        />
                                        <div style={{paddingTop:10}}>
                                            <span>
                                                <Button onClick={()=>{this.navigate('Update/',res.ID)}}><Icon style={{fontSize:30}} type="edit" /></Button>
                                            </span>
                                            <span style={{paddingLeft:2}}>
                                                <Button onClick={() => this.onclick(res.ID)}><Icon style={{fontSize:30}} type="delete" /></Button>
                                            </span>
                                            <span style={{paddingLeft:2}}>
                                                <Button > <a key={res.ID} href={res.url}><Icon style={{fontSize:30}}type="arrow-right" /></a></Button>
                                            </span>

                                        </div>

                                    </Card>

                                </div>)}

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
