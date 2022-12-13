import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { TfiGame } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { useGame } from "../hooks/useGame";


export const FormLoginGame = () => {

    const { player1, setPlayer1, player2, setPlayer2, playGame, requestCardsInitial } = useGame();



    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            console.log(form);
        } else {
            await playGame();
            navigate('/startGame', { replace: true })
        }

        setValidated(true);
    };

    const handleInputChangePlayer1 = (e) => {
        setPlayer1({ ...player1, name: e.target.value })
    }

    const handleInputChangePlayer2 = (e) => {
        setPlayer2({ ...player2, name: e.target.value })
    }

    return (
        <Form noValidate validated={validated} style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
            <Container>
                <Row className="mb-3 mt-3" >
                    <Col style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Form.Group className='justify-content-md-center' as={Col} md="6" controlId="validationCustomPlayer1">
                            <Form.Label>Jugador 1</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><TfiGame /></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Jugador 1"
                                    aria-describedby="inputGroupPrepend"
                                    value={player1.name}
                                    onChange={handleInputChangePlayer1}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>

                    <Col style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Form.Group as={Col} md="6" controlId="validationCustomPlayer2" >
                            <Form.Label>Jugador 2</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><TfiGame /></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Jugador 2"
                                    aria-describedby="inputGroupPrepend"
                                    value={player2.name}
                                    onChange={handleInputChangePlayer2}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>

                </Row>
                <Button className='justify-content-md-center my-3' type="submit" style={{ alignItems: 'center', width: '76%' }}>Jugar</Button>
            </Container>
        </Form>
    )
}
