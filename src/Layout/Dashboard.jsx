
import { FaCalendarAlt, FaListAlt, FaShoppingCart } from "react-icons/fa";
import { IoHomeSharp, IoWallet } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-amber-500">
                <ul className="menu p-4 ">
                    <li>
                        <NavLink className="text-xl " to="/dashboard/userHome"> <IoHomeSharp className="text-xl" />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-xl" to="/dashboard/reservation"> <FaCalendarAlt className="text-xl" />Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-xl " to="/dashboard/cart"> <IoWallet className="text-xl" />Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-xl " to="/dashboard/cart"> <FaShoppingCart className="text-xl" />My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-xl " to="/dashboard/review"> <MdRateReview className="text-xl" />Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-xl " to="/dashboard/bookings"> <FaListAlt className="text-xl" />My Booking</NavLink>
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