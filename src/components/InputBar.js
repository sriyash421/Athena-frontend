import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
 
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
 
class InputBar extends Component {
  state = {
    tags: []
  }
  handleChange = (tags) => {
    this.setState({
        tags:tags
    })
    this.props.fn(tags)
  }
 
  render() {
    return <TagsInput value={this.state.tags} onChange={this.handleChange} />
  }
}

export default InputBar;