import React, { useContext } from "react";
import BookContext from "../Context/BookContext";
import CartItemsList from "./CartItemsList";

import "./CartItem.css";
import Button from "../ui/Button";


const CartItems = (props) => {

    const cntxt = useContext(BookContext);
    //console.log(cntxt.items)
    const cartList = cntxt.items.map(item => {
        return (
            <CartItemsList
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
            />
        )
    }
    )

    return (

        <>{cartList}

            <div className="cartItems">
                <h4 className="totalPrice">Total Price : {cntxt.totalAmount}</h4>

                <div>
                    <Button>
                        <button
                            className="btn"
                            onClick={props.cancel}>Close</button>
                    </Button>
                </div>
            </div>

        </>
    )
}
export default CartItems;