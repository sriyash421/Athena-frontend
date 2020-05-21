import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import axios from 'axios';
import { Container, Form, Badge, Card, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ChatRoom extends Component {
    state = {
        socket: null,
        id: null,
        user_ip: null,
        messages: [],
        new_message: ""
    }
    onConnect = () => {
        console.log("Connected");
    }
    onReceive = (temp) => {
        console.log("on_receive", temp)
        temp = temp.split("?@?");
        var data = {
            'content': temp[0],
            'id': temp[1],
            'author': temp[2]
        }
        let messages = [...this.state.messages, data];
        this.setState({
            messages
        });
    }
    onSend = (e) => {
        e.preventDefault();
        var data = this.state.new_message + "?@?" + this.state.user_ip + "?@?" + this.state.id;
        console.log("send message", "data");
        this.state.socket.send(data);
        this.setState({
            new_message: ""
        });
    }
    updateNew = (e) => {
        e.preventDefault();
        this.setState({
            new_message: e.target.value
        });
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get("http://localhost:4000/get_chat/"+id).then(res => {
            console.log("chat data", res.data.data)
            this.setState({
                id: id,
                messages: res.data.data
            })
        });
        axios.get("https://ipapi.co/json/").then(res => {
            this.setState({
                user_ip: res.data.ip
            })
        });
        var socket = openSocket("http://localhost:4000");
        socket.on('connect', this.onConnect);
        socket.on('message', (data)=> this.onReceive(data));
        this.setState({
            socket
        });
    }
    render(){
        return (
            <Container>
                <div className="text-center page_title">
                    <hr/>
                    <Card style={{ width: '18'}} bg="light">
                        <Card.Body>    
                            <h1>
                                <Card.Text>
                                    <a href={"/course/"+this.state.id} className="result_title"><strong>{this.state.id}</strong></a>
                                </Card.Text>
                            </h1>    
                        </Card.Body>
                    </Card>
                    <hr/>
                </div>
                <Container className="chat_box">
                    {this.state.messages.map((msg, i) => {
                        if(msg.author == this.state.user_ip){
                            return(
                                <Card key={i}>
                                    <Card.Body>
                                        <h6>
                                            <Card.Text>
                                                <div className="right_chat">
                                                <strong><Badge variant="primary">{msg.content}</Badge></strong>
                                                <Badge pill variant="dark">You</Badge>
                                                </div>
                                            </Card.Text></h6>
                                    </Card.Body>
                                </Card>
                            )
                        }
                        else{
                            return(
                                <Card key={i}>
                                    <Card.Body>
                                        <h6>
                                            <Card.Text>
                                                <div className="left_chat">
                                                    <Badge pill variant="dark">{"User "+msg.id}</Badge>
                                                    <strong><Badge variant="primary">{msg.content}</Badge></strong>
                                                </div>
                                            </Card.Text></h6>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    })}
                </Container>
                <hr />
                    <Form onSubmit={this.onSend}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control value={this.state.new_message} onChange={this.updateNew} as="textarea" rows="1" />
                        <br/>
                        <Button type="submit">Send</Button>
                    </Form.Group>
                    </Form>
            </Container>
        )
    }
}
export default ChatRoom;