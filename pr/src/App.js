import React, { useState } from "react";
import Books from "./Books/Books"
import Header from "./Header/Header";
import CntxtProvider from "./Context/CntxtProvider";
import CartItems from "./Cart/CartItems";
function App() {
  const [show, setShow] = useState(false);

  const onShowHandler = () => {
    setShow(true);
  }
  const onCancelHandler = () => {
    setShow(false);
  }
  return (
    <CntxtProvider>
      {show && <CartItems cancel={onCancelHandler} />}
      <Header show={onShowHandler} />
      <Books />
    </CntxtProvider>
  );
}

export default App;
