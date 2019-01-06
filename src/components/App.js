import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Viewport from "./Viewport";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Viewport />
      <Footer />
    </div>
  );
};

export default App;
