"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className=" relative flex lg:gap-[107px] md:gap-[50px] gap-[40px] justify-between lg:px-[86px] md:px-[70px] px-[30px] py-[30px] text-white bg-[#0063a4] z-50">
      {/* logo */}
      <div className="flex items-center justify-center">
        <Link href="/"><Image
          src="/logo/logo.png"
          alt="StackJunior Logo"
          width={214}
          height={50}
        /></Link>
      </div>
      {/* navbar */}
      <div className="lg:flex gap-[60px] md:hidden hidden">
        <nav className="flex gap-[60px] text-base items-center justify-center">
          <Link className="font-bold" href="/courses">
            Courses
          </Link>
          <Link href="/about">About StackJunior</Link>
          <Link href="/tutorials">Quick Tutorials</Link>
        </nav>

        {/* account and learning button */}
        <div className="flex lg:gap-[67px] md:gap-[30px] gap-[20px]  font-bold ">
          <button className="font-bold">My Account</button>
          <button className="px-6 py-3 bg-[#ff0b80] text-[18px] font-bold rounded-[43px] shadow-sm">
            Start Learning
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="flex flex-col py-5 space-y-3 gap-[40px] w-[100%] transition duration-300 absolute top-[110px] left-0 bg-[#0063a4] bg-opacity-80 text-base justify-start items-center">
          <Link className="font-bold mt-2" href="/courses">
            Courses
          </Link>
          <Link href="/about">About StackJunior</Link>
          <Link href="/tutorials">Quick Tutorials</Link>
          <button className="font-bold">My Account</button>
          <button className="px-6 py-3 bg-[#ff0b80] text-[18px] font-bold rounded-[43px] shadow-sm">
            Start Learning
          </button>
        </div>
      )}
      {/* mobile menu */}
      {showMenu ? (
        <div className="lg:hidden items-center justify-center">
          <button onClick={handleCloseMenu} className="text-3xl">
            <IoClose />
          </button>
        </div>
      ) : (
        <div className="flex lg:hidden items-center justify-center">
          <button onClick={handleShowMenu} className="text-3xl">
            <IoMenu />
          </button>
        </div>
      )}

      {/* mobile menu */}
    </header>
  );
};

export default Header;
