import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <Container className="footer-container">
            &copy; Copyright {new Date().getFullYear()}, All right
        </Container>
    );
}

export default Footer;
