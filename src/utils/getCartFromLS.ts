import React from "react";
import { caclTotalPrice } from "./calcTotalPrice";
import { TItems } from "../redux/cart/types";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items: TItems[] = data ? JSON.parse(data) : [null];
  const totalPrice = caclTotalPrice(items);

  if (items.length) {
    return {
      items,
      totalPrice,
    };
  }
};
