import React, { useContext } from "react";
import HeaderButton from "./HeaderButton";

import "./Header.css"
import BookContext from "../Context/BookContext";


const Header = (props) => {

    const cntxt = useContext(BookContext);

    return (
        <div className="header">
            <span className="headercartwords1"><h3>Books Order app</h3></span>
            <span className="headercartwords">Your Cart  </span>
            <span className="icon">

                <HeaderButton
                    quantity={cntxt.quantity}
                    show={props.show}
                />
            </span>


        </div>
    );
}



export default Header;