import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoMenu, IoWallet } from "react-icons/io5";
import {  FaUsers } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Pie, PieChart, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {

    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    // tanstack query for loading data
    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    // tanstack query for chart
    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })

    // Custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
    };

    // Custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
            return null;
        }
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const ncx = Number(cx);
        const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
        const ncy = Number(cy);
        const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
                {`${((percent ?? 1) * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    return (
        <div className="p-6">
            <h2 className="text-3xl">
                <span>Hi, Welcome Back! </span>

                
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
                        <FaUsers className="text-2xl" />
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

            {/* Charts */}
            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis width="auto" />
                        <Bar dataKey="quantity" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
                            {chartData.map((_entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                {/* Pie chart */}
                <div className="w-1/2">
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={pieChartData}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            fill="#8884d8"
                            dataKey="value"
                            isAnimationActive={true}
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;