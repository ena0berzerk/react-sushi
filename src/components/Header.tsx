import React from "react";

import { Link, useLocation } from "react-router-dom";

import Search from "./Search";
import ButtonCart from "./ButtonCart";
import sushiLogo from "../../public/sushi-logo.png";

const Header: React.FC = () => {
  const location = useLocation();
  const isCartLocation = location.pathname === "/cart";

  return (
    <>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width={38} src={sushiLogo} alt="Sushi Logo" />
              <div>
                <h1>React Sushi</h1>
                <p>самые вкусные суши в Реакте</p>
              </div>
            </div>
          </Link>
          {isCartLocation ? null : <Search />}
          {isCartLocation ? null : <ButtonCart />}
        </div>
      </div>
    </>
  );
};

export default Header;
