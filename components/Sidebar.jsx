import Link from "next/link";
import React from "react";
import { IoMdSettings } from "react-icons/io";
import { BsFillPersonFill, BsFillXDiamondFill } from "react-icons/bs";
import { FaHome, FaPowerOff, FaShoppingBag } from "react-icons/fa";

export const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <BsFillXDiamondFill size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaHome size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsFillPersonFill size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaShoppingBag size={16} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <IoMdSettings size={20} />
            </div>
          </Link>
        </div>
        <div>
          <Link href="/power">
            <div className="text-purple-800 bg-purple-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
              <FaPowerOff size={16} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};
