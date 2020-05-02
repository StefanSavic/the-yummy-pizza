import React, { useState, useEffect, useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import Navigation from "./Navigation";
import { CartContext } from "./CartContext";
import CartContextProvider from "./CartContext";
import PizzaList from "./PizzaList";
import { pizzaReducer } from "../reducers/CartReducer";

const Navigation = () => {
    const { pizzasInCart } = useContext(CartContext);
    return (
        <CartContextProvider>
            <div className="container-fluid">
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
                        <img
                            src="/img/logo-pizza.svg.png"
                            alt="My logo"
                            width="50"
                        />
                        <h6 className="ml-1 navbar-brand__title">
                            THE YUMMY PIZZA
                        </h6>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link
                                className="d-flex align-items-center"
                                href="#menu"
                            >
                                Menu
                            </Nav.Link>
                            <Nav.Link href="/basket">
                                <img src="img/basket.svg" alt="" />

                                <span className="basket-items-num primary">
                                    {pizzasInCart.length}
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </CartContextProvider>
    );
};

export default Navigation;

if (document.getElementById("navigation")) {
    ReactDOM.render(<Navigation />, document.getElementById("navigation"));
}
