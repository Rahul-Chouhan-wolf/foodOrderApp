import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Headerbuttonicon = (props) => {

    return (
        <div>
            <div style={
                { padding: "0.5rem " }
            }><ShoppingCartIcon /> </div>
            <div>{props.quantity}</div>
        </div>
    )
}

export default Headerbuttonicon;