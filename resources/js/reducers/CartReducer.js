import uuid from "uuid/dist/v1";
export const pizzaReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            return [...state, {
                name: action.pizza.name,
                text: action.pizza.text,
                price: action.pizza.price,
                id: uuid()
            }]
        default:
            return state
    }
}
