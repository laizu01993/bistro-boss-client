import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = 
    <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order'>Order Food</Link></li>
    </>
    return (

        
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">BISTRO BOSS</h2>
                    <p className="text-lg font-medium">R E S T A U R A N T</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;