import { useState } from "react";
import "./NavBar.css";
export default function NavBar() {
  const [currentPosition, setCurrentPosition] = useState("home");

  return (
    <>
      <nav className="navbar bg-black rounded-full left-1/2  transform -translate-x-1/2   mt-6 w-12/13 place-content-center h-16 fixed ">
        <div className="flex-1 navbar-start">
          <p
            onClick={() => {
              setCurrentPosition("home");
            }}
            className="px-2 cursor-pointer"
            href=" "
          >
            <img
              className="w-16 h-16"
              src="src/public/MyJersey_logo.png"
              alt=""
            />
          </p>
          <p
            onClick={() => {
              setCurrentPosition("home");
            }}
            className={
              currentPosition === "home"
                ? "active px-2 text-m cursor-pointer"
                : " px-2 text-m cursor-pointer"
            }
            href=""
          >
            Home
          </p>
          <p
            onClick={() => {
              setCurrentPosition("collections");
            }}
            className={
              currentPosition === "collections"
                ? "active px-2 text-m cursor-pointer"
                : " px-2 text-m cursor-pointer"
            }
            href=""
          >
            Collections
          </p>
          <p
            onClick={() => {
              setCurrentPosition("aboutus");
            }}
            className={
              currentPosition === "aboutus"
                ? "active px-2 text-m cursor-pointer"
                : " px-2 text-m cursor-pointer"
            }
            href=""
          >
            About us
          </p>
          <p
            onClick={() => {
              setCurrentPosition("contact");
            }}
            className={
              currentPosition === "contact"
                ? "active px-2 text-m cursor-pointer"
                : " px-2 text-m cursor-pointer"
            }
            href=""
          >
            Contact
          </p>
        </div>
        <div className="navbar-end">
          <div className="px-2 ">
            <label className="input input-bordered flex items-center gap-2">
              <img
                className="h-3 w-3 opacity-70"
                src="src/public/search.png"
                alt=""
              />
              <input type="text" placeholder="Search..." readOnly="true" />
            </label>
          </div>

          <a className="px-1" href="">
            <img
              className="w-9 h-9"
              src="src/public/shopping-cart.png"
              alt=""
            />
          </a>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
