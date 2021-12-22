import React, { useState } from "react";
import Checkout from "./Checkout";

const Cart = ({ newProduct, removeCart, id }) => {
  const [check, setCheck] = useState(false);
  const pic = `https://electronic-ecommerce.herokuapp.com/${newProduct.image}`;
  return (
    <>
      <div className="body main-cart">
        <div className="pic" id="imgg">
          <img src={pic} alt={newProduct.image} />
        </div>
        <div className="detail">
          <h4>{newProduct.name}</h4>
          <p className="price">{newProduct.price}</p>
          <p>Stock: {newProduct.stock}</p>
          <p></p>
        </div>
        <div className="btn-div">
          <button
            className="btn"
            onClick={() => {
              removeCart(newProduct.id);
            }}
          >
            Remove
          </button>
        </div>
        {check && (
          <div>
            <Checkout />
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
