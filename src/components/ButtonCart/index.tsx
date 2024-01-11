import React from "react";
import { useSelector } from "react-redux";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

import { selectCart } from "../../redux/slices/cartSlice";

const ButtonCart: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCart);

  const totalAmountOfSushi = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  return (
    <>
      <div className="header__cart">
        <Link to="/cart" className="button button--cart">
          <span>{totalPrice} ₽</span>
          <div className="button__delimiter" />
          <LuShoppingCart />
          <span>{totalAmountOfSushi}</span>
        </Link>
      </div>
    </>
  );
};

export default ButtonCart;
