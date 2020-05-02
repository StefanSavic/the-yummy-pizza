import React, { useContext, useReducer } from "react";
import CartContextProvider, { CartContext } from "./CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PizzaList = () => {
    const { pizzasInCart } = useContext(CartContext);
    const { dispatch } = useContext(CartContext);
    const { pizzas } = useContext(CartContext);
    const handleOrder = (NewPizzaName, NewPizzaText, NewPizzaPrice) => {
        console.log(dispatch);
        dispatch({
            type: "ADD_PIZZA",
            pizza: {
                name: NewPizzaName,
                text: NewPizzaText,
                price: NewPizzaPrice
            }
        });
    };
    // const listPizzas = pizzas.map((pizza, i) => (
    //
    // ));

    return pizzas.map(pizza => {
        return (
            <div className="col-md-3" key={pizza.id}>
                <Card className="mt-4">
                    <Card.Img variant="top" src="/img/pizza-menu.jpg" />
                    <Card.Body className="d-flex text-center flex-column justify-content-center">
                        <Card.Title> {pizza.name} </Card.Title>
                        <Card.Text> {pizza.text} </Card.Text>
                        <div>
                            <Card.Text> Price: {pizza.price} </Card.Text>
                            <Button
                                variant="primary"
                                onClick={handleOrder.bind(
                                    this,
                                    pizza.name,
                                    pizza.text,
                                    pizza.price
                                )}
                            >
                                ORDER NOW
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    });
};

export default PizzaList;
