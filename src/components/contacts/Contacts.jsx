import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
const Contacts = () => {
  return (
    <div className="container mx-auto mt-[40px] mb-[30px]">
      <div className="flex flex-col gap-4 mb-[30px] ">
        <p className="text-[36px] text-[#000000] font-[600] text-center">
          Get In Touch With Us
        </p>
        <p className="text-[16px] text-[#9F9F9F] w-[633px] text-center m-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="w-[1058px]  py-[50px] px-[40px] flex gap-4 m-auto">
        <div className="w-[50%] flex flex-col gap-[40px]">
          <div className="flex gap-2">
            <IoLocationOutline className="text-[20px] text-[#000]" />
            <div>
              <p className="text-[24px] text-[#000] font-[600]">Address</p>
              <p className="w-[212px]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <BsTelephone className="text-[20px] text-[#000]" />
            <div>
              <p className="text-[24px] text-[#000] font-[600]">Phone</p>
              <p className="w-[212px]">Mobile: +(84) 546-6789</p>
              <p className="w-[212px]">Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MdAccessTimeFilled className="text-[20px] text-[#000]" />
            <div>
              <p className="text-[24px] text-[#000] font-[600]">Working Time</p>
              <p className="w-[212px]">Monday-Friday: 9:00 - 22:00</p>
              <p className="w-[212px]">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[36px] w-[50%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Your name</label>
            <input
              className="w-full py-2 border rounded-[10px] outline-none pl-3"
              placeholder="Abc"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email address</label>
            <input
              className="w-full py-2 border rounded-[10px] outline-none pl-3"
              placeholder="Abc@def.com"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Subject</label>
            <input
              className="w-full py-2 border rounded-[10px] outline-none pl-3"
              placeholder="This is an optional."
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Message</label>
            <textarea
              className="w-full py-2 border rounded-[10px] outline-none pl-3"
              name=""
              id=""
              placeholder="Hi! i’d like to ask about"
            ></textarea>
          </div>
          <button className="w-[40%] py-2 bg-[#B88E2F] text-[#fff] rounded-[2px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
