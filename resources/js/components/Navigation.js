import React from "react";
import ReactDOM from "react-dom";
// import logo from "/img/logo-pizza.svg.png";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
    console.log();
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            // sticky="top"
            fixed="top"
            className="pizza-navigation"
        >
            <Navbar.Brand href="/">
                {/* <img src={logo} alt="My logo" width="50" /> */}
                <img src="/img/logo-pizza.svg.png" alt="My logo" width="50" />
                <h6 className="ml-1 navbar-brand__title">THE YUMMY PIZZA</h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/basket">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;

if (document.getElementById("navigation")) {
    ReactDOM.render(<Navigation />, document.getElementById("navigation"));
}
