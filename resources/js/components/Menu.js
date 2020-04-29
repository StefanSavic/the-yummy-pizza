import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PizzaMenu() {
    const pizzas = [
        {
            name: "Pepperoni Pizza",
            text: `Some quick example text to build on the card title and
        make up the bulk of the card's content.`,
            price: "20eur"
        },
        {
            name: "Margarita",
            text: `Some quick example text to build on the card title and
        make up the bulk of the card's content.`,
            price: "20eur"
        },
        {
            name: "Capriciosa",
            text: `Some quick example text to build on the card title and
        make up the bulk of the card's content.`,
            price: "20eur"
        },
        {
            name: "Magic Pizza",
            text: `Some quick example text to build on the card title and
        make up the bulk of the card's content.`,
            price: "20eur"
        },
        {
            name: "Pineapple Pizza",
            text: `Some quick example text to build on the card title and
        make up the bulk of the card's content.`,
            price: "20eur"
        },
        {
            name: "Seafood Pizza",
            text: `Some quick example text to build on the card title and
        make up the bulk of the card's content.`,
            price: "20eur"
        },
        {
            name: "Vegi Pizza",
            text: `Some quick example text to build on the card title and
        make up the bulk of the card's content.`,
            price: "20eur"
        },
        {
            name: "Extra Cheese",
            text: `Some quick example text to build on the card title and
        make up the bulk of the card's content.`,
            price: "20eur"
        }
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const listPizzas = pizzas.map((pizza, i) => (
        <div className="col-md-3" key={i}>
            <Card className="mt-4">
                <Card.Img variant="top" src="/img/pizza-menu.jpg" />
                <Card.Body className="d-flex text-center flex-column justify-content-center">
                    <Card.Title> {pizza.name} </Card.Title>
                    <Card.Text> {pizza.text} </Card.Text>
                    <div>
                        <Card.Text> Price: {pizza.price} </Card.Text>
                        <Button variant="primary" onClick={handleShow}>
                            order
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    ));
    return (
        <div id="menu" className="container-fluid pizza-menu">
            <h1 className="text-center text-menu"> Menu </h1>
            <div className="container">
                <div className="row"> {listPizzas} </div>
            </div>
        </div>
    );
}

export default PizzaMenu;

if (document.getElementById("PizzaMenu")) {
    ReactDOM.render(<PizzaMenu />, document.getElementById("PizzaMenu"));
}
