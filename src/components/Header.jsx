import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoGameControllerOutline } from "react-icons/io5";

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <div className='d-inline-block align-top'>
                        <IoGameControllerOutline />
                    </div>{' '}
                    &nbsp;
                    Deck Of Card Game
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
