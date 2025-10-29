
import { FaBook, FaCalendarAlt, FaListAlt, FaShoppingBag, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { IoHomeSharp, IoMenu, IoWallet } from "react-icons/io5";
import { MdEmail, MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-amber-500">
                <ul className="menu p-4 space-y-3">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"
                                    } to="/dashboard/adminHome"> <IoHomeSharp className="text-xl" />Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/addItems"> <FaUtensils className="text-xl" />Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/manageItems"> <IoMenu className="text-xl" />Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/manageBookings"> <FaBook className="text-xl" />Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/allUsers"> <FaUser className="text-xl" />All Users</NavLink>
                                </li>

                            </> :
                            <>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"
                                    } to="/dashboard/userHome"> <IoHomeSharp className="text-xl" />User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/reservation"> <FaCalendarAlt className="text-xl" />Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/payment"> <IoWallet className="text-xl" />Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/cart"> <FaShoppingCart className="text-xl" />My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/review"> <MdRateReview className="text-xl" />Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive
                                            ? "text-white text-xl"
                                            : "text-black hover:text-white hover:bg-amber-400 text-xl"} to="/dashboard/bookings"> <FaListAlt className="text-xl" />My Booking</NavLink>
                                </li>

                            </>
                    }
                    {/* Shared navlinks */}
                    <div className="divider "></div>

                    <li>
                        <NavLink className="text-black hover:text-white hover:bg-amber-400 text-xl" to="/"> <IoHomeSharp className="text-xl" />Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black hover:text-white hover:bg-amber-400 text-xl" to="/menu"> <IoMenu className="text-xl" />Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black hover:text-white hover:bg-amber-400 text-xl" to="/order/salad"> <FaShoppingBag className="text-xl" />Shop</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black hover:text-white hover:bg-amber-400 text-xl" to="/contact"> <MdEmail className="text-xl" />Contact</NavLink>
                    </li>
                </ul>

            </div>
            {/* Dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;