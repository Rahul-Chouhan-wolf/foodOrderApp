import React, { useReducer } from "react";
import BookContext from "./BookContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
    quantity: 0
};

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedTotalAmount =
            state.totalAmount + action.item.price;

        const updatedQuantity = state.quantity + action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: action.item.amount,
            };
            updatedItems = [...state.items];

            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            quantity: updatedQuantity
        };
    }

    if (action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

        const existingCartItem = state.items[existingCartItemIndex];


        const updateAmount = state.totalAmount - existingCartItem.price;


        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
            console.log(updatedItems);

        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };

            updatedItems = [...state.items];

            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updateAmount,
        }
    }

}

const CntxtProvider = (props) => {
    // const [Item, setItem] = useState([]);

    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    }

    const removeHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    }

    const BookContext1 = {
        items: cartState.items,

        totalAmount: cartState.totalAmount,
        addItem: addHandler,
        removeItem: removeHandler
    }

    return (
        <div>
            <BookContext.Provider value={BookContext1}>
                {props.children}
            </BookContext.Provider>

        </div>
    );

}

export default CntxtProvider;