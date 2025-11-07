import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoMenu, IoWallet } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const AdminHome = () => {

    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    // tanstack query for loading data
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    return (
        <div className="p-6">
            <h2 className="text-3xl">
                <span>Hi, Welcome Back!</span>

                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            {/* Stats */}
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <IoWallet className="text-2xl" />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUser className="text-2xl" />
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <IoMenu className="text-2xl" />
                    </div>
                    <div className="stat-title">Menu Item</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                   
                </div>
            </div>
        </div>
    );
};

export default AdminHome;