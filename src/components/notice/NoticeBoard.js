import React, { Component } from 'react';
import axios from 'axios';
import {Card, Container, Button, Badge, Form} from 'react-bootstrap';

const Delete = ({author, user, delete_fn, notice_id}) => {
    if(author == user) {
        return(
            <Button size="sm" onClick={()=>delete_fn(notice_id)}>Delete</Button>
        )
    }
    else{
        return(
            <></>
        )
    }
    
}
class NoticeBoard extends Component {
    state = {
        notices: [],
        text: "",
        id: "",
        newNotice: "",
        user_ip: ""
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get("http://localhost:4000/get_notice/"+id).then(res => {
            this.setState({
                id: id,
                notices: res.data.data
            })
        })
        axios.get("https://ipapi.co/json/").then(res => {
            this.setState({
                user_ip: res.data.ip
            })
        })
    }

    handleDownvote = (author) => {
        axios.post("http://localhost:4000/downvote/"+author).then(res => {
            if (res.data.status){
                window.alert("Author has been downvoted");
            }

        })
    }

    handleDelete = (notice_id) => {
        axios.post("http://localhost:4000/delete_notice/"+notice_id).then(res=>{
            window.alert("Post deleted");
        });
        window.location.reload(); 
    }
    updateNew = (e) => {
        e.preventDefault()
        this.setState({
            newNotice: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var user_ip = "";
        const new_notice = {
            "content": this.state.newNotice,
            "author": this.state.user_ip,
            "course": this.state.id
        };
        axios.post("http://localhost:4000/add_notice", new_notice ).then(res => {
            if (res.data.status){
                window.alert("Notice Added");
            }
        })
        window.location.reload(); 
    }
    render(){
        const noticeList = this.state.notices.map(notice => {
            return (
                <Card style={{ width: '18'}} bg="dark" key={notice.id}>
                <Card.Body>
                    <Card.Title><Badge variant="dark">{"Date Posted: "+ notice.date}</Badge>
                    <div className="notice_buttons">
                    <Delete author={notice.author} user={this.state.user_ip} delete_fn={this.handleDelete} notice_id={notice.id} /> &nbsp;
                    <Button variant="danger" size="sm" onClick={()=>this.handleDownvote(notice.author)}>Downvote</Button>
                    </div>
                    </Card.Title>
                    <h3>
                    <Card.Text>
                    <strong>{notice.content}</strong>
                    </Card.Text></h3>
                </Card.Body>
            </Card>
            )
        })
        return(
            <div className="course_page container">
                <Container fluid className="justify-content-md-center">
                    <div className="text-center page_title">
                        <hr/>
                        <Card style={{ width: '18'}} bg="light">
                            <Card.Body>    
                                <h1 >
                                    {/* <Card.Title><Badge variant="dark">{this.state.id}</Badge></Card.Title> */}
                                    <Card.Text>
                                        <a href={"/course/"+this.state.id} className="result_title"><strong>{this.state.id}</strong></a>
                                    </Card.Text>
                                </h1>    
                            </Card.Body>
                        </Card>
                        <hr/>
                    </div>
                    {noticeList}
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Add a new notice</Form.Label>
                        <Form.Control value={this.state.newNotice} onChange={this.updateNew} as="textarea" rows="5" />
                        <br/>
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}
export default NoticeBoard;