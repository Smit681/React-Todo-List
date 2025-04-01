import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Tasks</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

//This makes sure that title is of type string
Header.Prototypes = {
    title: PropTypes.string
}



export default Header;