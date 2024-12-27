export default function NavBar() {
  return (
    <>
      <nav className="navbar bg-black rounded-full m-auto mt-6 w-12/13 place-content-center h-16 ">
        <div className="flex-1 navbar-start">
          <a className="px-2" href="">
            <img
              className="w-16 h-16"
              src="src/public/MyJersey_logo.png"
              alt=""
            />
          </a>
          <a className="px-2 text-m" href="">
            Home
          </a>
          <a className="px-2 text-m" href="">
            Collections
          </a>
          <a className="px-2 text-m" href="">
            About us
          </a>
          <a className="px-2 text-m" href="">
            Contact
          </a>
        </div>
        <div className="navbar-end">
          <div className="px-2 ">
            <label className="input input-bordered flex items-center gap-2">
              <img
                className="h-3 w-3 opacity-70"
                src="src/public/search.png"
                alt=""
              />
              <input type="text" placeholder="Search..." />
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
