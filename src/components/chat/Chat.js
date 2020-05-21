import React, { Component } from 'react';
import axios from 'axios';
import {Card, Container} from 'react-bootstrap';

class Chat extends Component {
    state = {
        courses: []
    }

    componentDidMount = () => {
        axios.get("http://localhost:4000/notice").then(res => {
            this.setState({
                courses:res.data.data
            });
        })
    }

    render() {
        const noticeList = this.state.courses.map(course => {
            return(
                <div>
                <Card style={{ width: '18'}} bg="light" key={course}>
                    <Card.Body>
                        <h3>
                        <Card.Text>
                        <a href={"/chat/"+course} className="result_title"><strong>{course}</strong></a>
                        </Card.Text></h3>
                    </Card.Body>
                </Card>
                <br/>
                </div>
            )
        })
        return (
            <div className="notice_box">
            <Container fluid>
                <hr/>
                <h1 className="text-center" >
                <Card style={{ width: '18'}} bg="light">
                    <Card.Text>
                    <a href={"/chat"} className="result_title"><strong>Chat Rooms</strong></a>
                    </Card.Text>
                    </Card>
                </h1>
                <hr/>
                {noticeList}
                </Container>
            </div>
        )
    }
}

export default Chat;