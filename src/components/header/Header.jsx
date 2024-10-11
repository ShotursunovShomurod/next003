"use client";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { BsPersonExclamation } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import "./header.css";
import img from "@/imags/navbar.png";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="container mx-auto">
      <div className=" flex items-center  gap-[69px] justify-between mt-5 ">
        <Link href={"/"}>
          <Image
            className="w-[180px] h-[41px] object-contain "
            src={img}
            alt=""
            width={180}
            height={41}
          />
        </Link>
        <div className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}>
          <div className="flex items-center lg:gap-[75px] md:gap-[50px] sm:gap-9 gap-3 navbar navbar__collection">
            <div className="flex items-center gap-1">
              <Link
                className={
                  "text-[16px] font-[500] text-[#000000] lg:text-[#000000] "
                }
                href={"/shop"}
              >
                Shop
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Link
                className={
                  "text-[16px] font-[500] text-[#000000] lg:text-[#000000] "
                }
                href={"/about"}
              >
                About
              </Link>
            </div>
            <div className="flex items-center gap-1 navbar__collection">
              <Link
                className={
                  "text-[16px] font-[500] text-[#000000] lg:text-[#000000] "
                }
                href={"/contact"}
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-1 navbar__collection">
              <Link
                className={
                  "text-[16px] font-[500] text-[#000000] lg:text-[#000000] "
                }
                href={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-3">
          <BsPersonExclamation />
          <GoSearch />
          <FaRegHeart />
          <FiShoppingCart />
        </div>
        <div onClick={toggleMenu} className="navbar__menu">
          <RiMenu2Fill />
        </div>
      </div>
    </div>
  );
};

export default Header;
