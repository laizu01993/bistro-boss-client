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
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  // nav items for dropdown
  const navItems = <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-300" : "text-white"
        }
      >
        HOME
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-300" : "text-white"
        }
      >
        CONTACT US
      </NavLink>
    </li>
    <li>
      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? "text-yellow-300" : "text-white"
        }
      >
        DASHBOARD
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? "text-yellow-300" : "text-white"
        }
      >
        OUR MENU
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/order/salad"
        className={({ isActive }) =>
          isActive ? "text-yellow-300" : "text-white"
        }
      >
        ORDER FOOD
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/secret"
        className={({ isActive }) =>
          isActive ? "text-yellow-300" : "text-white"
        }
      >
        SECRET
      </NavLink>
    </li>

    <li>
      <NavLink to="/dashboard/cart">
        <button className="btn">
          <FaShoppingCart className="text-2xl" /> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
        </button>
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          isActive ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 transition duration-200" : "text-white font-semibold hover:text-yellow-400 transition duration-200"
        }
      >
        SIGN UP
      </NavLink>
    </li>
    {/* Conditional for user */}
    {
      user ?
        <>
          {/* <span className="text-white">{user?.displayName}</span> */}
          <button onClick={handleLogOut} className="btn bg-[#D1A054] border-none text-white font-semibold hover:bg-[#b8873b] transition duration-300">Logout</button>
        </> :
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 transition duration-200" : "text-white font-semibold hover:text-yellow-400 transition duration-200"
              }
            >
              LOGIN
            </NavLink>
          </li>
        </>
    }
  </>
  return (
    <div className="navbar sticky top-0 z-50 bg-black/70 max-w-7xl mx-auto rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-500 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>

        <div className="items-center text-white">
          <a className=" text-4xl font-bold
                 ">BISTRO BOSS</a>
          <p className="text-2xl font-semibold items-center">R E S T A U R A N T</p>
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


