import React from 'react';
import logo from './logo.png';
import './Home.css';
import { Badge } from 'react-bootstrap';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;
