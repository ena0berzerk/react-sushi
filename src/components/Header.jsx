import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import Search from "../components/Search";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width={38} src="sushi-logo.png" alt="Sushi Logo" />
              <div>
                <h1>React Sushi</h1>
                <p>самые вкусные суши в Реакте</p>
              </div>
            </div>
          </Link>

          <Search />

          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span>520 ₽</span>
              <div className="button__delimiter" />
              <LuShoppingCart />
              <span>3</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
