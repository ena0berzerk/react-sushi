import React from "react";
import { Outlet } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/Header";
import { SearchFoodContext } from "./components/Context/SearchFoodContext";

export default function App() {
  const [inputValue, setInputValue] = React.useState("");
  const inputType = { inputValue, setInputValue };

  return (
    <>
      <div className="wrapper">
        <SearchFoodContext.Provider value={inputType}>
          <Header />
          <div className="content">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </SearchFoodContext.Provider>
      </div>
    </>
  );
}
