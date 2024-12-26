export default function NavBar() {
  return (
    <>
        <nav className="navbar bg-black rounded-full m-auto mt-6 w-12/13 place-content-center">
            <div className="flex-1 navbar-start">
                <a className="px-2" href=""><img className="w-24 h-24" src="src/public/MyJersey_logo.png" alt="" /></a>
                <a className="px-2 text-2xl" href="">Home</a>
                <a className="px-2 text-2xl" href="">Collections</a>
                <a className="px-2 text-2xl" href="">About us</a>
                <a className="px-2 text-2xl" href="">Contact</a>
            </div>
            <div className="navbar-end">
                <div className="px-2 ">
                    <label className="input input-bordered flex items-center gap-2">
                        <img className="h-4 w-4 opacity-70" src="src/public/search.png" alt="" />
                        <input type="text" placeholder="Search..."/>
                        
                    </label>
                </div>
                <a className="px-1" href=""><img className="w-11 h-11" src="src/public/shopping-cart.png" alt="" /></a>
                <a className="px-1" href=""><img className="w-11 h-11" src="src/public/account.png" alt="" /></a>
            </div>
        </nav>
    </>
  )
}
