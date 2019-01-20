import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Viewport from "./Viewport";
import Sidebar from "./Sidebar";
import CaseProvider from "./providers/CaseProvider";

const App = () => {
  document.ontouchmove = function(event) {
    event.preventDefault();
  };
  return (
    <CaseProvider>
      <div className="app">
        <Header />
        <Sidebar />
        <Viewport />
        <Footer />
      </div>
    </CaseProvider>
  );
};

export default App;
