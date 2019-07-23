import React from "react";
import { Nav, NavDropdown, Container } from "react-bootstrap"

function Navbars() {
    return (
        
            <div className="navbar">
                <div >
                    <img
                        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                        width="300"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </div>
                <div>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link className='about' href="/home">About us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='career-depart' eventKey="link-1">Career</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Departments " id="nav-dropdown" >
                            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.5">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>
            </div>

    )
}












export default Navbars;