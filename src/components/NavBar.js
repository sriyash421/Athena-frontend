import React from 'react';
import {Badge, Navbar, Nav} from 'react-bootstrap';

const styles = {
    well:{
      WebkitBoxShadow: "1px 3px 1px #9E9E9E",
      MozBoxShadow: "1px 3px 1px #9E9E9E",
      boxShadow: "1px 3px 1px #9E9E9E"
    }  
};


const NavBar = () => {
    return (

        <div style={styles.well}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home"> <strong>Athena- A Course Management System</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/recommend">Recommend</Nav.Link>
                <Nav.Link href="/table">Time Table</Nav.Link>
                <Nav.Link href="/chat">Chat</Nav.Link>
                <Nav.Link href="/notice">Notice</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default NavBar;