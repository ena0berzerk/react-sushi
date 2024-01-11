import React from "react";
import { Outlet } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
