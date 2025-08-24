import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Brands from "./sections/Brands";
import Comments from "./sections/Comments";

const App = () => {
  return (
    <div className=" h-full flex flex-col w-full items-center justify-center">
      {/* <Navbar/> */}
      <Hero />
      <Brands/>
      <Comments/>
    </div>
  );
};

export default App;
