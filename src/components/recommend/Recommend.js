import React, { Component } from 'react';
import InputBar from '../InputBar';
import Chart from './Chart';
import axios from 'axios';

class Recommend extends Component {
    state = {
        data : []
    }
    recommend_fn = (tags) => {
        axios.post("http://localhost:4000/recommend",{
            tags: tags
        }).then(res=>{
            this.setState({
                data:res.data.data
            })
        })
    }
    render(){
        return (
            <div className="input-bar">
                <hr />
                <InputBar fn={this.recommend_fn} />
                <hr />
                <Chart data={this.state.data} />
            </div>
        )
    }
}

export default Recommend;