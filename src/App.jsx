import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Brands from "./sections/Brands";
import Comments from "./sections/Comments";
import Gallery from "./sections/Gallery";
import Rule from "./sections/Rule";
import Faq from "./sections/Faq";

const App = () => {
  return (
    <div className=" h-full flex flex-col w-full items-center ">
      <Navbar/>
      <Hero />
      <Brands/>
      <Comments/>
      <Gallery/>
      <Rule/>
      <Faq/>
      <div className="h-500"></div>
    </div>
  );
};

export default App;
