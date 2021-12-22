import React from "react";

import "./dellxps13.jpg";
const Body = ({
  id,
  name,
  image,
  price,
  stock,
  createDate,
  category,
  addCart,
  newProduct,
}) => {
  const pic = `https://electronic-ecommerce.herokuapp.com/${image}`;
  return (
    <>
      <div className="body">
        <div className="pic" id="imgg">
          <img src={pic} alt={image} />
        </div>
        <div className="detail">
          <h4>{name}</h4>
          <p className="price">{price}</p>
          <p>Stock: {stock}</p>
          <p></p>
        </div>
        <div className="btn-div">
          <button
            className="btn"
            onClick={() => {
              addCart(id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
