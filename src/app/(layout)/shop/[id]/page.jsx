import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
const Page = async ({ params }) => {
  console.log(params);
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await response.json();
  console.log(data);

  return (
    <div className="container mx-auto">
      {" "}
      <div className="container my-3 w-full flex items-center mt-6 mb-7">
        <Link href={"/"}>
          {" "}
          <p className="text-[16px] font-[500]">Products / </p>
        </Link>
        <p className="text-[16px] font-[500]"> Gaming Headsets & Audio / </p>
        <p className="text-[18px] font-[500]">{data?.title}</p>
      </div>
      <div className="container grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1">
        <div>
          <Image
            className="w-[450px] rounded-[20px] h-[500px] mb-4 object-contain border bg-[#fff]"
            src={data?.images[0]}
            alt=""
            width="450"
            height="500"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-[4px]">
            <p className="text-[24px] leading-[50px] font-integral sm:text-[34px] md:text-[30px] lg:text-[34px] font-[700]">
              {data?.title}
            </p>
            <p className="lg:text-[16px] md:text-[16px] text-[14px] text-[#00000094] font-[400]">
              {data?.description}
            </p>
            <p className="lg:text-[16px] md:text-[16px] text-[14px] text-[#00000094] font-[400]">
              {data?.name}
            </p>
          </div>
          <div className="flex gap-3 items-center">

            <p className="text-[15px] text-[#0007]">{data?.rating}</p>
          </div>
          <hr />
          <div className="flex gap-1 items-center">
            <p className="text-[18px] lg:text-[30px] md:text-[24px] font-[700] text-[#000000]">
              ${data?.price}/or/month
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <p className="text-[15px] text-[#000000]">Choose color</p>
          </div>
          <hr />
          <div className="flex justify-between mb-6">
            <div className="flex items-center justify-between rounded-full bg-[#F0F0F0] px-[10px] py-[4px] w-[40%] lg:w-[35%]">
              <button className="text-[22px]">-</button>
              <p className="text-[18px]"></p>
              <button className="text-[22px]">+</button>
            </div>
            <div className="w-[150px]">
              <p className="text-[14px]">
                Only <span className="text-[#0BA42D]"> 16 items</span> left!
                Don’t miss it{" "}
              </p>
            </div>
          </div>
          <button
            className="w-[80%] rounded-full bg-[#0BA42D] text-white h-[52px] 
                hover:bg-gray-800 hover:text-gray-300 
                active:bg-gray-900 active:scale-95 
                focus:outline-none focus:ring-2 focus:ring-gray-500 
                transition-all duration-300 ease-in-out flex gap-3 items-center justify-center"
          >
            <IoCartOutline className="text-[#fff]" />{" "}
            <p className="text-[15px] text-[#fff] font-[500]">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
