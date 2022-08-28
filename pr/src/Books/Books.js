import React from "react";
import Card from "../ui/Card";

import BooksList from "./BooksList"

const Books = () => {
    const dummy_data = [{
        id: 1,
        name: "Book 1",
        price: 200
    },
    {
        id: 2,
        name: "Book 2",
        price: 100
    },
    {
        id: 3,
        name: "Book 3",
        price: 300
    }
    ];

    const books = dummy_data.map(item => {
        return (<BooksList
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
        />)
    }
    )
    return (
        <div>
            <Card>
                {books}
            </Card>

        </div>
    );
}

export default Books;