import React from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";
import Content from "./Content";

const Viewport = () => {
  return (
    <BrowserRouter>
      <div className="viewport">
        <Nav />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default Viewport;
