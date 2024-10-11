import Image from "next/image";
import React from "react";
import img from "@/imags/shops.png";
import { IoIosArrowForward } from "react-icons/io";
const Shops = ({ title, home }) => {
  return (
    <div className="mt-[20px] relative">
      <Image className="w-full  " src={img} alt="" width={1440} height={316} />
      <div className="flex flex-col gap-4 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 items-center">
        <p className="lg:text-[48px] md:text-[30px] sm:text-[26px] text-[22px] font-[500] text-[#000]">
          {title}
        </p>
        <p className="flex items-center font-[600]">
          Home <IoIosArrowForward /> {home}
        </p>
      </div>
    </div>
  );
};

export default Shops;
