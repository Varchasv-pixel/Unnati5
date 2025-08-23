import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-slate-400 h-full flex flex-col w-full items-center justify-center">
      {/* <Navbar/> */}
      <Hero />
    </div>
  );
};

export default App;
