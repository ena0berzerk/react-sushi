import React from "react";
import { useSelector } from "react-redux";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

import { selectCart } from "../../redux/cart/selectors";

const ButtonCart: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const isMounted = React.useRef<boolean>(false);

  const totalAmountOfSushi = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }

    isMounted.current = true;
  }, [items]);

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
