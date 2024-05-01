import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start flex items-center lg:items-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Fight</a>
              </li>
              <li>
                <a>Pokemon</a>
              </li>
              <li>
                <a>Leaderboard</a>
              </li>
            </ul>
          </div>
          <img
            src="./pokemon-logo-black-transparent.png"
            alt="Pokemon Logo"
            className="logo btn btn-ghost text-xl ml-auto lg:ml-0 bg-transparent"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Fight</a>
            </li>
            <li>
              <a>Pokemon</a>
            </li>
            <li>
              <a>Leaderboard</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn" onClick={darkModeHandler}>
            {dark ? <IoSunny /> : <IoMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
