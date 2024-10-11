import React from "react";
import { BsFillGridFill, BsViewList } from "react-icons/bs";
import { VscFilter } from "react-icons/vsc";

const Filtr = () => {
  return (
    <div className="bg-[#F9F1E7] py-[20px] ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {" "}
          <div className="flex gap-4 items-center ">
            <div className=" flex gap-2 items-center">
              <VscFilter />
              Filter
            </div>
            <BsFillGridFill />
            <BsViewList />
            <hr className="w-[1px] h-[30px] bg-[#000]" />
            <p className=" text-[#000] font-[400]">
              Showing 1–16 of 32 results
            </p>
          </div>
          <div className="flex gap-[29px]">
            <div className="flex gap-2 items-center">
              <p>Show</p>
              <button className="w-[55px] h-[50px]  bg-[#fff]">16</button>
            </div>
            <div className="flex  items-center gap-2">
              <p>Short by</p>
              <button className="w-[188px] h-[50px] bg-[#fff]">Default</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtr;
