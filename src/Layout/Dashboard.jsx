import { FaAd, FaBook, FaCalendarAlt, FaCalendarCheck, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome, IoMenu } from "react-icons/io5";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { TfiMenuAlt } from "react-icons/tfi";


const Dashboard = () => {

    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <div className="p-6">
                <h2 className="font-semibold text-3xl">BISTRO BOSS</h2>
                <p className="font-semibold">R E S T A U R A N T</p>
                </div>
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                        <li>
                        
                        <NavLink to="/dashboard/adminHome"><IoHome></IoHome> Admin Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils> Add Items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/manageItems"><TfiMenuAlt></TfiMenuAlt> Manage Items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/bookings"> <FaBook></FaBook> Manage Bookings</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/users"><FaUsers></FaUsers> All Users</NavLink>
                    </li>
                    
                        </>
                        :
                        <>
                        <li>
                        
                        <NavLink to="/dashboard/userHome"><IoHome></IoHome> User Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment History</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/review"><FaAd></FaAd> Add Review</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/dashboard/bookings"><FaCalendarCheck></FaCalendarCheck> My Booking</NavLink>
                    </li>
                        </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        
                        <NavLink to="/"><IoHome></IoHome> Home</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/menu"><IoMenu></IoMenu> Menu</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/order"><FaShoppingBag></FaShoppingBag> Shop</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to="/order/contact"><IoMdMail></IoMdMail> Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;