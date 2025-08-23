import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Brands from "./sections/Brands";

const App = () => {
  return (
    <div className=" h-full flex flex-col w-full items-center justify-center">
      {/* <Navbar/> */}
      <Hero />
      <Brands/>
      <div className="bg-black w-full h-screen"></div>
    </div>
  );
};

export default App;
