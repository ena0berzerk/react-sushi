import { TItems } from "../redux/cart/types";

export const caclTotalPrice = (items: TItems[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
