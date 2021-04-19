import { React, useEffect, useState } from "react";
import quizzes from "../data.js";
import "./Quiz.css";

import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

function Quiz(props) {
    // const [quiz, setQuiz] = useState([]);
    const [quiz, setQuiz] = useState([]);
    var score = 0;

    useEffect(() => {
        let id = props.match.params.id;
        console.log(id);
        let selectQuiz = quizzes[id];
        console.log(selectQuiz);
        setQuiz(selectQuiz);
    });

    const handleAnswerClick = () => {};

    return (
        <Container>
            <Row>
                {quiz.map((obj, questionIndex) => (
                    <>
                        <Col className="image-col">
                            <br />
                            <Image
                                src={obj.picture}
                                className="quiz-img"
                            ></Image>
                            <Form>
                                {obj.choices.map((choise, choiseIndex) => (
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id={questionIndex + "-" + choiseIndex}
                                        label={choise}
                                    />
                                ))}
                            </Form>
                        </Col>
                    </>
                ))}
            </Row>
            <Row>
                <Button
                    variant="warning"
                    type="submit"
                    className="quiz-btn"
                    // onClick={() => handleAnswerClick()}
                >
                    Submite
                </Button>
            </Row>
        </Container>
    );
}

export default Quiz;
