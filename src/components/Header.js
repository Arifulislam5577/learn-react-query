import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="dark:bg-white dark:text-gray-700 py-3">
      <div className="container flex justify-between mx-auto">
        <Link to="/" className="flex items-center p-2 font-bold">
          REACT QUERY
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/products"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Products
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/blogs"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Blogs
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
