import React, { useContext } from "react";
import HeaderButton from "./HeaderButton";

import "./Header.css"
import BookContext from "../Context/BookContext";


const Header = (props) => {

    const cntxt = useContext(BookContext);
    return (
        <div className="header">
            <span>Your Cart</span>
            <span className="icon">
                <HeaderButton
                    quantity={cntxt.items.amount}
                    show={props.show}
                />
            </span>


        </div>
    );
}

export default Header;