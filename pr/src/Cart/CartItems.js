import React, { useContext } from "react";
import BookContext from "../Context/BookContext";
import CartItemsList from "./CartItemsList";

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

    // const remove = () => {
    //     cntxt.removeItem(cntxt.items.id);
    // }

    return (

        <>{cartList}
            <div>Total Price : {cntxt.totalAmount}</div>
            <div>
                <button onClick={props.cancel}>Close</button>
            </div>

        </>
    )
}
export default CartItems;