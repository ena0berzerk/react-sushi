import React from "react";
import { CiSearch } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

import classes from "./Search.module.scss";
import { iconSearch, iconRemoveInputValue } from "./iconsStyle";
import { SearchFoodContext } from "../Context/SearchFoodContext";

export default function Search() {
  const { inputValue, setInputValue } = React.useContext(SearchFoodContext);
  const inputRef = React.useRef();

  function handleCloseSearch() {
    inputRef.current.focus();
    setInputValue("");
  }

  return (
    <>
      <div className={classes.root}>
        <CiSearch style={iconSearch} />
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Найти роллы..."
        />
        {inputValue.length > 0 ? (
          <VscClose
            style={iconRemoveInputValue}
            onClick={() => handleCloseSearch()}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
