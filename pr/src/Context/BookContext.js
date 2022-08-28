import React from "react";

const BookContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

export default BookContext;