import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { FormPlayGame } from "../components/FormPlayGame"
import { ListCards } from "../components/ListCards"
import { ToastGame } from "../components/ToastGame"

const GamePage = () => {
    return (
        <Container className="my-4">
            <Row className="justify-content-md-center">
                <Col xs={16} md={16}>
                    <FormPlayGame />
                </Col>
                <Col>
                    <ListCards />
                </Col>

            </Row >
            <Row>
                <Col>
                    <ToastGame />
                </Col>
            </Row>
        </Container>
    )
}

export default GamePage