export type TPizza = {
  id: number;
  price: number;
  title: string;
  imageUrl: string;
  sizes: number;
  types: string[];
  rating: number;
};

export enum STATUS {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IPizzaSlice {
  items: TPizza[];
  status: STATUS;
}
