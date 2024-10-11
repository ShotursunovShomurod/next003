import React from "react";
import img from "@/imags/hero.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="container mx-auto relative mt-5 mb-5">
      <div>
        <Image
          className="w-full lg:h-[600px] "
          src={img}
          alt=""
          width={1440}
          height={41}
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[40px] border p-[39px] bg-[#FFF3E3] rounded-[10px] hero">
        <div className="flex flex-col gap-4">
          <p className="text-[14px] lg:text-[16px] font-[600] text-[#333333]">
            New Arrival
          </p>
          <p className="text-[#B88E2F] leading-[65px] text-[24px] lg:w-[429px] w-full sm:text-[30px] md:text-[38px] lg:text-[48px] lg:font-[700] font-[600]">
            Discover Our  New Collection
          </p>
          <p className="text-[14px] lg:w-[469px] w-full  lg:text-[16px] font-[600] text-[#333333]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            provident alias autem vel!
          </p>
          <button className="w-[200px] h-[60px] border bg-[#B88E2F] text-[#fff] border-none">
            BUY Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
