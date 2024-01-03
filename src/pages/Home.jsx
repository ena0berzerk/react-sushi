import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// redux
import {
  setCategoryID,
  setSort,
  setCurrentPage,
} from "../redux/slices/filterSlice";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import Skeleton from "../components/SushiBlock/Skeleton";
import SushiBlock from "../components/SushiBlock/SushiBlock";
import { SearchFoodContext } from "../components/Context/SearchFoodContext";

export default function Home() {
  const { categoryID, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const [sushiList, setSushiList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [pageList, setPageList] = React.useState("");

  const { inputValue } = React.useContext(SearchFoodContext);

  React.useEffect(() => {
    setIsLoading(true);

    const filterReq = `${categoryID > 0 ? `&category=${categoryID}` : ""}`;
    const sortByReq = `${
      sort.sortProperty ? `&sortBy=${sort.sortProperty}` : ""
    }`;
    const searchReq = `${inputValue.length > 0 ? `&title=*${inputValue}` : ""}`;

    (async function fetchSushi() {
      try {
        const response = await axios.get(
          `https://6ecb02a0c4ef18fe.mokky.dev/sushi?${filterReq}${sortByReq}${searchReq}&page=${currentPage}&limit=8`
        );
        setSushiList(response.data.items);
        setPageList(response.data.meta.total_pages);
        setIsLoading(false);
      } catch (error) {
        console.log("Ошибка", error.response.data);
      }
    })();
    window.scrollTo(0, 0);
  }, [categoryID, sort, inputValue, currentPage]);

  const skeleton = [...Array(4)].map((_, id) => <Skeleton key={id} />);
  const sushi = sushiList.map((sushi) => (
    <SushiBlock key={sushi.id} {...sushi} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryID}
          onClickCategory={(id) => dispatch(setCategoryID(id))}
        />
        <Sort value={sort} onClickSort={(id) => dispatch(setSort(id))} />
      </div>
      <h2 className="content__title">Все роллы</h2>
      <div className="content__items">{isLoading ? skeleton : sushi}</div>
      <Pagination
        pageList={pageList}
        value={currentPage}
        onChangePage={(page) => dispatch(setCurrentPage(page))}
      />
    </>
  );
}
