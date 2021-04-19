import React from "react";
import Flower from "../flowers.js";
import "./Home.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container>
            <Row>
                {Flower.map((obj, index) => (
                    <>
                        <Col className="image-col">
                            <Link to={"/quiz/" + index}>
                                <Image
                                    src={obj.picture}
                                    alt={obj.name}
                                    className="img-flower "
                                ></Image>
                            </Link>
                            <br />
                            {obj.name}
                        </Col>
                    </>
                ))}
            </Row>
        </Container>
    );
}

export default Home;
