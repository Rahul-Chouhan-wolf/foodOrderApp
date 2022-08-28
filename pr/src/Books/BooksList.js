import React, { useContext, useState } from "react";
import BookContext from "../Context/BookContext";
import "./BooksList.css"

const BooksList = (props) => {
    const [quantity, setquantity] = useState(1);
    const cntxt = useContext(BookContext);

    const addToCart = () => {
        setquantity(quantity + 1);
        // props.data.map(item => {
        //     return (
        //         <div>
        //             {cntxt.addItem({
        //                 id: item.id,
        //                 name: item.name,
        //                 price: item.price,
        //                 quantity: quantity
        //             })}
        //         </div>
        //     )
        // })


        cntxt.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: quantity
        })
    }
    return (
        <ul key={props.id}>
            <li>{props.name}</li>
            <li>{props.price}</li>
            <span><button onClick={addToCart}>+</button></span>
        </ul>
    );
}

export default BooksList;