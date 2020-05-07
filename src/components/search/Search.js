import React, { Component } from 'react';
import Results from './Result'
import Filter from './Filter';
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
        credits_filter: [],
        deps_filter: []
    }

    componentDidMount(){
        axios.get("http://localhost:4000/search_filters").then(res=>{
            let credits_filter = {};
            var i,key;
            for (i in res.data.credits){
                key = res.data.credits[i];
                credits_filter[key]=0;
            }
            let deps_filter = {};
            for (i in res.data.deps){
                key = res.data.deps[i];
                deps_filter[key]=0;
            }
            this.setState({
                credits_filter: credits_filter,
                deps_filter: deps_filter
            })
        });
    }

    filter_fn = () => {
        var credits, flag=1;
        let filtered_results = this.state.results.filter(res=>{
            for (credits in this.state.credits_filter){
                if(this.state.credits_filter[credits]){
                    flag=0;
                }
                if (this.state.credits_filter[credits] && res.credits==credits){
                    return true;
                }
            }
            if (flag){
                return true;
            }
            return false;
        });
        var dep, flag=1;
        filtered_results = filtered_results.filter(res=>{
            for (dep in this.state.deps_filter){
                if (this.state.deps_filter[dep]){
                    flag=0;
                }
                if (this.state.deps_filter[dep] && res.dep==dep){
                    return true;
                }
            }
            if (flag){
                return true;
            }
            return false;
        })
        this.setState({
            filtered_results
        })
    }

    filter_credits = (key) => {
        let credits_filter = this.state.credits_filter;
        credits_filter[key] = 1-credits_filter[key];
        this.setState({
            credits_filter
        });
        this.filter_fn();
    }

    filter_deps = (key) => {
        let deps_filter = this.state.deps_filter;
        deps_filter[key] = 1-deps_filter[key];
        this.setState({
            deps_filter
        });
        this.filter_fn();
    }
    
    search_fn = (tags) => {
        axios.post("http://localhost:4000/search",{
            tags: tags
        }).then(res=>{
            this.setState({
                results:res.data.results,
                filtered_results:res.data.results
            })
        })
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
                    <Col xs={3}>
                        <div styles={styles.well} >
                            <Filter filters={Object.keys(this.state.credits_filter)} name="Credits" filter_fn={this.filter_credits} />
                            <br/>
                            <Filter filters={Object.keys(this.state.deps_filter)} name="Department" filter_fn={this.filter_deps} />
                        </div>
                    </Col>
                    <Col xs={9}>
                    <Container variant="info" >
                        <Results results={this.state.filtered_results} />
                    </Container></Col>
                </Row>
            </Container>
        )
    }
}

export default Search;