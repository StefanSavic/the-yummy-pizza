import React, { createContext, useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid/dist/v1";
import { pizzaReducer } from "../reducers/CartReducer";

export const CartContext = createContext();

const CartContextProvider = props => {
    const [pizzas, setPizzas] = useState([
        {
            name: "Pepperoni Pizza",
            text: `Some quick example text to build on the card title andmake up the bulk of the card's content.`,
            price: "20eur",
            id: 1
        },
        {
            name: "Margarita",
            text: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
            price: "20eur",
            id: 2
        },
        {
            name: "Capricciosa",
            text: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
            price: "20eur",
            id: 3
        },
        {
            name: "Magic Pizza",
            text: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
            price: "20eur",
            id: 4
        },
        {
            name: "Pineapple Pizza",
            text: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
            price: "20eur",
            id: 5
        },
        {
            name: "Seafood Pizza",
            text: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
            price: "20eur",
            id: 6
        },
        {
            name: "Vegi Pizza",
            text: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
            price: "20eur",
            id: 7
        },
        {
            name: "Extra Cheese",
            text: `Some quick example text to build on the card title and
            make up the bulk of the card's content.`,
            price: "20eur",
            id: 8
        }
    ]);
    const initialState = [];
    const [pizzasInCart, dispatch] = useReducer(pizzaReducer, [], () => {
        const localData = localStorage.getItem("pizzasInCart");
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem("pizzasInCart", JSON.stringify(pizzasInCart), [
            pizzasInCart
        ]);
    });

    return (
        <CartContext.Provider
            value={{
                pizzas,
                pizzasInCart,
                dispatch
            }}
        >
            {props.children}{" "}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

// if (document.getElementById("CartContextProvider")) {
//     ReactDOM.render(
//         <CartContextProvider />,
//         document.getElementById("CartContextProvider")
//     );
// }
