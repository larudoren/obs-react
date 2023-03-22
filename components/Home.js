import React from 'react';
import '../App.css';
import {Container, Row, Col, Card } from "react-bootstrap";
import Header from './Header';
import Sidebar from './Sidebar';

const Home =  (props) => {
  const handleLogout = () => {
    props.onLogout();
  }

  return (
    <>
        <Header onLogout={handleLogout} />
        <Container style={{ verticalAlign: 'top', textAlign: 'left'}} fluid>
            <Row>
            <Col sm={3}>
                <Sidebar />
            </Col>
            <Col sm={9}>
                <h1>Welcome, {props.name}!</h1>
            </Col>
            </Row>
        </Container>
   </>
  );
}

export default Home;