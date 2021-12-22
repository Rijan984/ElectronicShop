import React from "react";

function Nav({ filterItems }) {
  return (
    <>
      <div className="main_head">
        <div className="main">
          <div className="first">
            <h1>LOGO</h1>
          </div>
          <div className="second">
            <p>
              Email
              <br />
              something@email.com
            </p>
          </div>
          <div className="third">
            <p>
              Call
              <br />
              +977-1234567890
            </p>
          </div>

          <div className="search">
            <input type="text" placeholder="search here" />
            <a href="s">
              <i className="fas fa-search"></i>
            </a>
          </div>

          <div className="signin">
            <a href="s">
              <p>Signin</p>
            </a>
          </div>
        </div>
      </div>

      <div className="head">
        <ul>
          <li
            onClick={() => {
              filterItems("all");
            }}
          >
            All
          </li>
          <li
            className="cart"
            onClick={() => {
              filterItems("laptop");
            }}
          >
            Laptop
          </li>
          <li
            onClick={() => {
              filterItems("mobile");
            }}
          >
            Mobile
          </li>
          <li
            onClick={() => {
              filterItems("watch");
            }}
          >
            Watch
          </li>
          <li
            onClick={() => {
              filterItems("keyboard");
            }}
          >
            Keyboard
          </li>
          <li
            onClick={() => {
              filterItems("headseat");
            }}
          >
            Headseat
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
