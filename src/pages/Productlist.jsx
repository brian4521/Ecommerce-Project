import React from "react";
import Searchbar from "../components/Searchbar";
import Category from "../components/Category";
const Productlist = () => {
  return (
    <>
      <div className="mx-auto container px-4 md:px-8 pt-8 ">
        <Searchbar />
        <Category />
      </div>
    </>
  );
};

export default Productlist;
