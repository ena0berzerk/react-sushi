export type ID = {
  id: number;
};

export type TItems = {
  title: string;
  types: string;
  imageUrl: string;
  price: number;
  id: number;
  sizes: number;
  count: number;
};

export interface ICartSlice {
  totalPrice: number;
  items: TItems[];
}
