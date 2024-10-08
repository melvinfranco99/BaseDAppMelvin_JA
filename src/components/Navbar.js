import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Navigation = ({ account }) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    &nbsp; DApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar navbar-dark bg-primary" />
                <Navbar.Collapse id="navbar navbar-dark bg-primary">
                    <Nav >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link as={Link} to="/">Documentation</Nav.Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link as={Link} to="/">Who Am I</Nav.Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link as={Link} to="/">Contact</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Profile</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            href={`https://etherscan.io/address/${account}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button nav-button btn-sm mx-4">
                            <Button variant="outline-light">
                                {account.slice(0, 10) + '...' + account.slice(32, 42)} {/*esto es para que se vea solamente los 10 primeros digitos y los 10 ultimos de mi cuenta de Metamask*/}
                            </Button>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )

}

export default Navigation;