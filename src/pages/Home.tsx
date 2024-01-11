import React from "react";
import { useDispatch, useSelector } from "react-redux";

// redux
import {
  setCategoryID,
  setSort,
  setCurrentPage,
  selectorFilter,
} from "../redux/slices/filterSlice";
import { fetchSushi, selectorSushi } from "../redux/slices/sushiSlice";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import Skeleton from "../components/SushiBlock/Skeleton";
import SushiBlock from "../components/SushiBlock/SushiBlock";
import ErrorSushiBlock from "../components/SushiBlock/ErrorSushiBlock";

const Home: React.FC = () => {
  const { categoryID, sort, currentPage, searchValue } =
    useSelector(selectorFilter);

  const { items, status } = useSelector(selectorSushi);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const filterReq = `${categoryID > 0 ? `&category=${categoryID}` : ""}`;
    const sortByReq = `${
      sort.sortProperty ? `&sortBy=${sort.sortProperty}` : ""
    }`;
    const searchReq = `${
      searchValue.length > 0 ? `&title=*${searchValue}` : ""
    }`;

    dispatch(
      fetchSushi({
        filterReq,
        sortByReq,
        searchReq,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  }, [categoryID, sort, searchValue, currentPage]);

  const skeleton = [...Array(4)].map((_: string, id: number) => (
    <Skeleton key={id} />
  ));
  const sushi = items.map((sushi: any) => (
    <SushiBlock key={sushi.id} {...sushi} />
  ));

  // status redux
  const errorStatus: boolean = status === "error";
  const loadingStatus: boolean = status === "loading";

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryID}
          onClickCategory={(id: number) => dispatch(setCategoryID(id))}
        />
        <Sort
          value={sort}
          onClickSort={(id: number) => dispatch(setSort(id))}
        />
      </div>
      <h2 className="content__title">Все роллы</h2>

      {errorStatus ? (
        <ErrorSushiBlock />
      ) : (
        <div className="content__items">{loadingStatus ? skeleton : sushi}</div>
      )}

      {!errorStatus && (
        <Pagination
          value={currentPage}
          onChangePage={(page: number) => dispatch(setCurrentPage(page))}
        />
      )}
    </>
  );
};

export default Home;