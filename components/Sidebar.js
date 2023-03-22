import React from "react";
import {Nav} from "react-bootstrap";
import '../App.css';

const Sidebar  =( props ) => {
    return (
        <Nav className="flex-column">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
        </Nav>
    );
  };

  export default Sidebar;