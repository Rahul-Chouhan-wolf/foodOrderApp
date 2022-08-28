import React from "react";
import Button from "../ui/Button";
import Headerbuttonicon from "./HeaderButtonIcon";

const HeaderButton = (props) => {

    return (
        <div>
            <Button>
                <button onClick={props.show}>
                    <Headerbuttonicon

                        quantity={props.quantity} />
                </button>
            </Button>
        </div>)
}

export default HeaderButton;