import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut().catch(error => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300 text-xl" : "text-white text-xl")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-yellow-300 text-xl" : "text-white text-xl")}>
          Contact Us
        </NavLink>
      </li>

      {/* Conditional Dashboard */}
      {user && isAdmin ? (
        <li>
          <NavLink to="/dashboard/adminHome" className={({ isActive }) => (isActive ? "text-yellow-300 text-xl" : "text-white text-xl")}>
            Dashboard
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/dashboard/userHome" className={({ isActive }) => (isActive ? "text-yellow-300 text-xl" : "text-white text-xl")}>
            Dashboard
          </NavLink>
        </li>
      )}

      <li>
        <NavLink to="/menu" className={({ isActive }) => (isActive ? "text-yellow-300 text-xl" : "text-white text-xl")}>
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad" className={({ isActive }) => (isActive ? "text-yellow-300 text-xl" : "text-white text-xl")}>
          Order Food
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="text-2xl" />
            <div className="badge badge-sm badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (

    <div className="navbar fixed z-10 bg-black/30 text-white max-w-screen-xl rounded-md">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-700 rounded-box mt-3 w-52 p-2 shadow">
            {navItems}
            {/* User section in dropdown (for mobile) */}
            {user ? (
              <div className="flex flex-col items-center gap-2 mt-3">
                <img src={user?.photoURL} alt="User" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
                <button onClick={handleLogOut} className="btn bg-[#D1A054] text-white font-semibold hover:bg-[#b8873b] w-full">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-3">
                <NavLink to="/login" className="btn btn-outline text-white border-yellow-400 hover:bg-yellow-400 hover:text-black">
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn bg-yellow-400 text-black font-semibold">
                  Sign Up
                </NavLink>
              </div>
            )}
          </ul>
        </div>

        {/* Logo */}
        <div className="text-white">
          <a className="text-3xl font-bold">BISTRO BOSS</a>
          <p className="text-lg font-semibold">R E S T A U R A N T</p>
        </div>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* Right (Desktop User Section) */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        {user ? (
          <>
            <img src={user?.photoURL} alt="User" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
            <button onClick={handleLogOut} className="btn bg-[#D1A054] text-white font-semibold hover:bg-[#b8873b]">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-outline text-white border-yellow-400 hover:bg-yellow-400 hover:text-black">
              Login
            </NavLink>
            <NavLink to="/signup" className="btn bg-yellow-400 text-black font-semibold">
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;





