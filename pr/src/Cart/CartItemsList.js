import React from "react";

const CartItemsList = (props) => {

    return (
        <div>
            <h2>{props.name}</h2>

            <span >Price : ${props.price} </span>
            <span > x {props.amount}</span>

        </div>
    )
}

export default CartItemsList;