
import React, { useContext } from "react";
import Button from "../ui/Button";
import Card from '../ui/Card';
import BookContext from "../Context/BookContext";

const CartItemsList = (props) => {

    const cntxt = useContext(BookContext);

    const remove = (id) => {
        cntxt.removeItem(id);
    }

    return (
        <Card>
            <h2>{props.name}</h2>

            <span >Price : ${props.price} </span>

            <span > x {props.amount}</span>

            <Button><button onClick={remove.bind(null, props.id)}>Remove</button></Button>

        </Card>
    )
}

export default CartItemsList;