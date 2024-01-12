export type TSortProperty = {
  name: string;
  sortProperty: "-rating" | "rating" | "-title" | "title" | "-price" | "price";
};

export interface IFilterSlice {
  categoryID: number;
  currentPage: number;
  searchValue: string;
  sort: TSortProperty;
}
