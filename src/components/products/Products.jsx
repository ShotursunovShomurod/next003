"use client"; // Client-side rendering

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Products = ({ data, our }) => {
  return (
    <>
      <div className="text-center">
        <p className="lg:text-[48px] md:text-[30px] sm:text-[26px] text-[22px] font-[500] text-[#000] mb-[32px]">
          {our}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((item) => (
          <div
            key={item.id}
            className="relative group bg-[#F4F5F7] rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={item.images[0]}
                alt={item.title}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {item.discountPercentage && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  -{item.discountPercentage}%
                </div>
              )}
              {item.isNew && (
                <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  New
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex  flex-col justify-center items-center gap-3">
              <Link href={`/shop/${item.id}`}>
              <div className="w-full">
                <button className="bg-[#fff] text-[#B88E2F] px-4 py-2 rounded-full w-[202px] h-[48px] hover:text-[#000] hover:bg-[#b18c44]">
                  Show
                </button>
              </div>
              </Link>
              <div className="w-full flex gap-10 justify-center">
              <button className="bg-white text-black px-4 py-2 rounded-full">
                Compare
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full">
                Share
              </button>
              </div>
            </div>
            <div className="product--info p-4">
              <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
              <p className="text-[#666] text-sm">{item.category}</p>
              <p className="text-xl font-bold text-black mt-1">
                Rp {item.price.toLocaleString()}
              </p>
              {item.originalPrice && (
                <span className="text-sm text-[#666] line-through">
                  Rp {item.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white duration-300 text-sm text-[#B88E2F] py-3 px-11 font-semibold mx-auto w-fit flex items-center mt-[30px] mb-[30px] ">
        Show More
      </button>
    </>
  );
};

export default Products;
