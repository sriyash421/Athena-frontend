import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Results from './Result'
import Filter from './Filter';
import Fuse from 'fuse.js'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import InputBar from '../InputBar';

const styles = {

  well:{
    WebkitBoxShadow: "1px 3px 1px #9E9E9E",
    MozBoxShadow: "1px 3px 1px #9E9E9E",
    boxShadow: "1px 3px 1px #9E9E9E",
  }

};

class Search extends Component {
    state = {
        results: [],
        filtered_results: [],
        credits: [],
        deps: [],
        data: [
        ],
        options:{
            includeScore: true,
            keys: ['id', 'name']
        },
        all_data: [],
        dep_filters: []
    }

    filter_credits = (credit, value) => {
        value = value == "on" ? true: false;
        credit = credit.id.slice(-1)
        console.log(credit, value)
        if (value && !(credit in this.state.credits)){
            this.state.credits.push(value)
        }
        else if (!value && credit in this.state.credits){
            this.state.credits = this.state.credits.filter(i => (
                i!==credit
            ))
        }
        this.filter_results();
    }
    filter_deps = (dep, value) => {
        value = value == "on" ? true: false;
        dep = dep.id.slice(-2)
        console.log(dep, value)
        if (value && !(dep in this.state.deps)){
            this.state.deps.push(value)
        }
        else if (!value && dep in this.state.deps){
            this.state.deps = this.state.deps.filter(i => (
                i!==dep
            ))
        }
        this.filter_results();
    }
    filter_results = () => {
        if (this.state.credits.length) {
            let filtered_results = this.state.results.filter(res => (
                (res.credits in this.state.credits)
            ));
            this.setState({
                filtered_results
            });
        }
        if (this.state.deps.length) {
            let filtered_results = this.state.results.filter(res => {
                var x;
                for (x in this.state.deps){
                    if (x == res.id.slice(0,2)){
                        return true
                    }
                }
                return false
            });
            this.setState({
                filtered_results
            });
        }
    }
    componentDidMount(){
        console.log("fetch_data")
        axios.get("http://e4fbddb1.ngrok.io/search").then((res) => {
            const all_data = [];
            var i,j;
            var deps = new Set();
            for (j in res.data.data){
                const i = res.data.data[j]
                all_data.push(i["course_id"]);
                all_data.push(i["course_name"]);
                all_data.push(i["professor"]);
                all_data.push(i["department"]);
                all_data.push(i["keywords"]);
                deps.add(i["department"]);
            }
            deps = Array.from(deps)
            var length = all_data.length;
            const all_data_ = [];
            for (i= 0; i<length; i++) {
                all_data_.push({
                    "key": i.toString(),
                    "value": all_data[i]
                });
            }
            this.setState({
                data: res.data,
                options: {
                    includeScore: true,
                    keys: res.data.keys
                },
                all_data: all_data_,
                dep_filters: deps
            });
        })

        this.setState({
            fuse :new Fuse(this.state.data, this.state.options)
        })
        
    }
    
    search_fn = (content) => {
        const results = this.state.fuse.search(content.value)
        .filter(item => (
                item["score"] > 0
            )
        )
        this.setState({
            results: results.map(item => ({id:item["item"].id, name:item["item"].name, credits:item["item"].credits}))
        })
        this.setState({
            filtered_results: this.state.results
        })
        console.log(results)
    }

    render() {
        return (
            <Container fluid>
                    <hr />
                    <Row className="justify-content-md-center">
                        <Col>
                            <div styles={styles.well}>
                                <InputBar fn={this.search_fn}/>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                <Row>
                    <Col>
                    <div styles={styles.well} >
                        <Filter filters={[2,3,4,5]} name="Credits" filter_fn={this.filter_credits} />
                        <br></br>
                        <Filter filters={this.state.dep_filters} name="Department" filter_fn={this.filter_deps} />
                    </div>
                    </Col>
                    <Col xs={10}>
                    <Container variant="info" >
                        <Results results={this.state.filtered_results} />
                    </Container></Col>
                </Row>
            </Container>
        )
    }
}

export default Search;