import React from "react";
import { useDispatch } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import debounce from "lodash.debounce";

import classes from "./Search.module.scss";
import { iconSearch, iconRemoveInputValue } from "../../styles/iconsStyle";
import { setSearchValue } from "../../redux/filter/slice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState<string>("");

  function handleCloseSearch() {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  }

  const onChangeInput = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 350),
    []
  );

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChangeInput(e.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <CiSearch style={iconSearch} />
        <input
          ref={inputRef}
          value={value}
          onChange={handleSearchValue}
          type="text"
          placeholder="Найти роллы..."
        />
        {value.length > 0 ? (
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
};

export default Search;
