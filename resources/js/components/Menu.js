import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Navigation from "./Navigation";

import CartContextProvider from "./CartContext";
import { CartContext } from "./CartContext";
import PizzaList from "./PizzaList";

const PizzaMenu = () => {
    // const { pizzasInCart } = useContext(CartContext);
    useEffect(() => {
        // console.log(pizzasInCart);
    });
    return (
        <CartContextProvider>
            <Navigation></Navigation>
            <div className="content full-height flex-center">
                <div className="title m-b-md">The Yummy Pizza</div>
            </div>
            <div id="menu" className="container-fluid pizza-menu">
                <h1 className="text-center text-menu"> Menu </h1>
                <div className="container">
                    <div className="row">
                        <PizzaList> </PizzaList>
                    </div>
                </div>
            </div>
        </CartContextProvider>
    );
};

export default PizzaMenu;

if (document.getElementById("PizzaMenu")) {
    ReactDOM.render(<PizzaMenu />, document.getElementById("PizzaMenu"));
}
