import React, { useState } from "react";
import { BsBell, BsFillBellFill, BsMoon } from "react-icons/bs";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

export const Header = ({ heading }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu((prevState) => !prevState);
  };
  return (
    <div className="flex justify-between items-center px-4 pt-4 w-full">
      <h1 // className="px-2"
        className="flex items-center text-xl font-extrabold dark:text-white"
      >
        {heading}
        <span className="bg-purple-100 text-purple-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
          PRO
        </span>
      </h1>
      {/* <h2>Welcome Back, Clint</h2> */}
      <div className="flex items-center gap-10">
        <FaMoon size={20} />
        <BsFillBellFill size={20} />

        <div
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600"
        >
          <span className="font-medium text-gray-600 dark:text-gray-300">
            PC
          </span>
        </div>
        {/* <img
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-10 h-10 rounded-full cursor-pointer"
          src="/docs/images/people/profile-picture-5.jpg"
          alt="User dropdown"
        ></img> */}
        <div
          id="userDropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
