import React, { useReducer } from "react";
import BookContext from "./BookContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedTotalAmount =
            state.totalAmount + action.item.price;

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
            console.log(updatedItems);
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
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
        // let arr = [] = item;
        // let h = arr.concat();
        // console.log(item.name);
        // console.log(h);
    }

    const BookContext1 = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addHandler,
        removeItem: 0
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