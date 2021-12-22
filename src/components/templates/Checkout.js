import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="form">
        <form action="submit">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Mobile number" />
        </form>
      </div>
    </>
  );
};
export default Checkout;
