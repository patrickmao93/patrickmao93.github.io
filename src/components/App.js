import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Viewport from "./Viewport";
import Sidebar from "./Sidebar";
import CaseProvider from "./providers/CaseProvider";
import SocialMediaProvider from "./providers/SocialMediaProvider";

const App = () => {
  return (
    <CaseProvider>
      <SocialMediaProvider>
        <div className="app">
          <Header />
          <Sidebar />
          <Viewport />
          <Footer />
        </div>
      </SocialMediaProvider>
    </CaseProvider>
  );
};

export default App;
