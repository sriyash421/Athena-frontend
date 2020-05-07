import React from 'react'
import {Card, Badge} from 'react-bootstrap'



const Course = ({course}) =>{

    return (
        <div className="container">
            <Card style={{ width: '18'}} bg="light">
                <Card.Body>
                    <h2>
                    <Card.Title><Badge variant="dark">{course.id}</Badge>  <Badge variant="dark">{course.dep}</Badge></Card.Title>
                    <Card.Text>
                    <a href={"/course/"+course.id} className="result_title"><strong>{course.name}</strong></a>
                    </Card.Text></h2>
                    {/* <Badge variant="dark">{course.credits}</Badge> */}
                </Card.Body>
            </Card>
        </div>
    )
}


export default Course;