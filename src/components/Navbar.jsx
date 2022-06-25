import React from 'react'
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar({darkTheme, setDarkTheme}) {
  const ToggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between space-x-5 items-center w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 py-1 px-2 text-white rounded dark:bg-gray-200 dark:text-gray-900">
            <span className="font-bold">🔍</span>aleb
          </p>
        </Link>
        <Search />
        <button type="button" onClick={ToggleTheme} className="duration-500 text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full py-1 px-2 hover:shadow-lg">
          {darkTheme ? "🌚" : "🌞" }
        </button>
      </div>
    </div>
  )
}

export default Navbar;