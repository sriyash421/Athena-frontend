import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box';
import axios from 'axios';

class AddCourse extends Component {
  state = {
    data:[
      // {
      //   key: "1",
      //   value: 'CS',
      //   slots: ["01","02","11","12"]
      // },
      // {
      //   key: "2",
      //   value: 'ME',
      //   slots: ["03","02","31","22"]
      // },
      // {
      //   key: "3",
      //   value: 'ECE',
      //   slots: ["44","08","07","34"]
      // },
      // {
      //   key: "4",
      //   value: 'EE',
      //   slots: ["19","29","49"]
      // }
    ]
  }
  componentDidMount(){
    axios.get('http://localhost:4000/course_slots').then(res => {
        this.setState({
            data: res.data.data
        })
    })
  }

  render() {
    return (
      <ReactSearchBox
        placeholder="Add Courses"
        value=""
        data={this.state.data}
        onSelect={record => this.props.add_course_fn(record)}
      />
    )
  }
}

export default AddCourse;