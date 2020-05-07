import React, { Component } from 'react';
import Course from './Course'
import axios from 'axios';
import { Jumbotron, Badge, Row, Col, Container, Card } from 'react-bootstrap';
import { Table } from 'semantic-ui-react';

const colors = ["primary","secondary","success","danger","warning","light"];

const Keywords  = ({keys}) => {
    const keys_list = keys.map(word => {
        return (<a><Badge key={Math.random()} variant={colors[Math.floor(Math.random()*6)]}>{word}</Badge> </a>)
    })
    return (
        <div className="text-center">
        <h5>
            {keys_list}
        </h5>
        </div>
    )
}

class CoursePage extends Component {
    state = {
        id: null,
        name: null,
        dep: null,
        prof: null,
        credits: null,
        keys: [],
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id, "ID")
        axios.get("http://localhost:4000/course/"+id).then(res => {
            console.log(res.data, "CREDITS")
            this.setState({
                id: res.data.data.id,
                name: res.data.data.name,
                prof:res.data.data.prof,
                keys:res.data.data.keys,
                dep:res.data.data.dep,
                credits:res.data.data.num_credits,
            })
        })
    }

    render(){
        return (
            <div className="course_page container">
            <Container fluid>
                <Row className="justify-content-md-center">
                        <Col>
                        <div className="text-center page_title">
                            <Card style={{ width: '18'}} bg="light">
                                <Card.Body>
                                
                                    <h1 >
                                        <Card.Title><Badge variant="dark">{this.state.id}</Badge></Card.Title>
                                        <Card.Text>
                                            <a href={"/course/"+this.state.id} className="result_title"><strong>{this.state.name}</strong></a>
                                        </Card.Text>
                                    </h1>
                                
                                </Card.Body>
                            </Card>
                            </div>
                        </Col>
                    </Row>
                <br /><br /><br /><br />
                <Row>
                    <Col xs={5}>
                        <Table>
                            {/* <Table.Header><h4 className="text-center"><Badge variant="dark">Course Details</Badge></h4></Table.Header> */}
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell><h4 className="text-center"><Badge >Department</Badge></h4></Table.Cell>
                                    <Table.Cell><h4 className="text-center"><Badge >{this.state.dep}</Badge></h4></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><h4 className="text-center"><Badge >Credits</Badge></h4></Table.Cell>
                                    <Table.Cell><h4 className="text-center"><Badge >{this.state.credits}</Badge></h4></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><h4 className="text-center"><Badge >Professor</Badge></h4></Table.Cell>
                                    <Table.Cell><h4 className="text-center"><Badge >{this.state.prof}</Badge></h4></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Col>
                    <Col xs={5}>
                        <Keywords keys={this.state.keys} />
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
export default CoursePage;