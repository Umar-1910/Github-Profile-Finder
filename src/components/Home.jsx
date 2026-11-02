import React from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 bg-slate-950 tracking-wide">
        <Title/>
        <SearchBar/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
