import React, { useState } from "react";
import Body from "./components/templates/Body";
import Cart from "./components/templates/Cart";
import Checkout from "./components/templates/Checkout";
import Footer from "./components/templates/Footer";
import Nav from "./components/templates/Nav";
const Shops = (props) => {
  const { data } = props;
  const [showData, setData] = useState(data.product);
  const [newProduct, setNewProduct] = useState();
  const [ShowCart, setShowCart] = useState(false);

  const [check, setCheck] = useState(false);

  //----------------spliting categories

  //-----------------filter----------
  const filterItems = (category) => {
    if (category === "all") {
      setData(data.product);
      return;
    }
    const newItem = data.product.filter(
      (items) => items.category[1] === category
    );
    setData(newItem);
    console.log(newItem);
  };
  //--------------------------------------

  //-----------------adding to cart-----------------
  const addCart = (id) => {
    const productss = data.product.filter((prod) => prod.id === id);
    setNewProduct(...productss);

    if (ShowCart === false) {
      setShowCart(true);
    }
  };

  //-----------------------------------

  //-------------------removing from cart--------------
  const removeCart = (id) => {
    // const productss = data.product.filter((prod) => prod.id !== id);
    // setNewProduct(...productss);

    // if (data.product.id === 1) {
    //   setShowCart(false);
    // }
    setShowCart(false);
  };

  //--------------------------------------------------

  const checkOut = () => {
    setCheck(true);
  };

  return (
    <section>
      <Nav filterItems={filterItems} />
      <div key={data.product.id}>
        {ShowCart && (
          <div className="cart-main">
            <h1>Your Cart</h1>
            <Cart
              {...data.product}
              newProduct={newProduct}
              removeCart={removeCart}
            />
            <button
              className="btn checkoutbtn"
              onClick={() => {
                checkOut();
              }}
            >
              Check-Out
            </button>
            {check && (
              <div>
                <Checkout />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mainbody" id="main-body">
        {showData.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div className="mainDiv">
                <Body {...product} addCart={addCart} />
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <Footer />
    </section>
  );
};

export default Shops;
