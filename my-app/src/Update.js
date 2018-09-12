import React, { Component } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios/index';

class Update extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: '',
      title: '',
      year: '',
      url: '',
      imageUrl: ''
    };
  }

  componentWillMount() {
    this.setState({ id: this.props.match.params.postId });
  }
    onChangeTitle = (e) => {
      this.setState({ title: e.target.value });
    }

    onChangeYear = (e) => {
      this.setState({ year: e.target.value });
    }

    onChangeUrl = (e) => {
      this.setState({ url: e.target.value });
    }
    onChangeImageUrl = (e) => {
      this.setState({ imageUrl: e.target.value });
    }
    handleClick() {
      axios.post('http://localhost:3000/update', {
        id: this.state.id,
        title: this.state.title,
        year: this.state.year,
        url: this.state.url,
        imageurl: this.state.imageUrl
      })
        .then(function(response) {
          console.log(response);
          window.alert('basarili');
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    render() {
      return (
        <div style={{ padding: 30, paddingLeft: 100 }}>
          <div style={{ paddingBottom: 5, width: 400 }}>
            <Input
              placeholder="Enter Title"
              onChange={this.onChangeTitle}
            />
          </div>
          <div style={{ paddingBottom: 5, width: 400 }}>
            <Input
              placeholder="Enter Year"
              onChange={this.onChangeYear}
            />
          </div>
          <div style={{ paddingBottom: 5, width: 400 }}>
            <Input
              placeholder="Enter Url"
              onChange={this.onChangeUrl}
            />
          </div>
          <div style={{ paddingBottom: 5, width: 400 }}>
            <Input
              placeholder="Enter image Url"
              onChange={this.onChangeImageUrl}
            />

          </div>
          <div style={{ paddingBottom: 5 }}>
            <Button
              onClick={this.handleClick}
              type="primary"
            >Submit
            </Button>

          </div>

        </div>
      );
    }
}
export default Update;
