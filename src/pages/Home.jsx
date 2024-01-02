import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SushiBlock from "../components/SushiBlock/SushiBlock";
import Skeleton from "../components/SushiBlock/Skeleton";
import { SearchFoodContext } from "../components/Context/SearchFoodContext";
import Pagination from "../components/Pagination";

export default function Home() {
  const [sushiList, setSushiList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryID, setCategoryID] = React.useState(0);
  const [sort, setSort] = React.useState({
    name: "самые популярные",
    sortProperty: "-rating",
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pagesList, setPageList] = React.useState("");

  const { inputValue } = React.useContext(SearchFoodContext);

  React.useEffect(() => {
    setIsLoading(true);

    const filter = `${categoryID > 0 ? `&category=${categoryID}` : ""}`;
    const sortBy = `${sort.sortProperty ? `&sortBy=${sort.sortProperty}` : ""}`;
    const search = `${inputValue.length > 0 ? `&title=*${inputValue}` : ""}`;

    (async function fetchSushi() {
      try {
        const response = await axios.get(
          `https://6ecb02a0c4ef18fe.mokky.dev/sushi?${filter}${sortBy}${search}&page=${currentPage}&limit=8`
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
          onClickCategory={(i) => setCategoryID(i)}
        />
        <Sort value={sort} onClickSort={(id) => setSort(id)} />
      </div>
      <h2 className="content__title">Все роллы</h2>
      <div className="content__items">{isLoading ? skeleton : sushi}</div>
      <Pagination
        pagesList={pagesList}
        value={currentPage}
        onChangePage={(page) => setCurrentPage(page)}
      />
    </>
  );
}
