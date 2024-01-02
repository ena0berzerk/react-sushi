import React from "react";
import { CiSearch } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

import classes from "./Search.module.scss";
import { iconSearch, iconRemoveInputValue } from "./iconsStyle";
import { SearchFoodContext } from "../Context/SearchFoodContext";

export default function Search() {
  const { inputValue, setInputValue } = React.useContext(SearchFoodContext);

  return (
    <>
      <div className={classes.root}>
        <CiSearch style={iconSearch} />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Найти роллы..."
        />
        <VscClose
          style={iconRemoveInputValue}
          onClick={() => setInputValue("")}
        />
      </div>
    </>
  );
}
