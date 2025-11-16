// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// const PaymentHistory = () => {

//     const { user } = useContext(AuthContext);
//     const axiosSecure = useAxiosSecure();

//     const { data: payments = [] } = useQuery({
//         queryKey: ['payments', user.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/payments/${user.email}`)
//             return res.data;
//         }
//     })
//     return (
//         <div className="p-6">
//             <SectionTitle subHeading={"At a Glance!"}
//             heading={"Payment History"}>

//             </SectionTitle>
//             <h2 className="text-3xl mb-4">Total Payments: {payments.length}</h2>
//             {/* Table */}
//             <div className="overflow-x-auto">
//                 <table className="table table-zebra">
//                     {/* head */}
//                     <thead className="bg-amber-500">
//                         <tr>
//                             <th>Serial No.</th>
//                             <th>Email</th>
//                             <th>Payment Date</th>
//                             <th>Total Price</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             payments.map((payment, index) => <tr key={payment._id}>
//                                 <th>{index + 1}</th>
//                                 <td>{user.email}</td>
//                                 <td>{payment.date}</td>
//                                 <td>{payment.price}</td>
//                                 <td>{payment.status}</td>
//                             </tr>)
//                         }

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default PaymentHistory;

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ["payments", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        },
    });

    return (
        <div className="px-3 sm:px-4 md:px-6 py-6">
            <SectionTitle subHeading={"At a Glance!"} heading={"Payment History"} />

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center">
                Total Payments: {payments.length}
            </h2>

            {/* Desktop/Tablet View */}
            <div className="hidden sm:block overflow-x-auto rounded-lg shadow">
                <table className="table w-full text-sm md:text-base">
                    <thead className="bg-amber-600 text-white uppercase">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id} className="hover:bg-amber-50">
                                <td>{index + 1}</td>
                                <td className="break-words">{user?.email}</td>
                                <td>{payment.date}</td>
                                <td>${payment.price}</td>
                                <td
                                    className={`font-semibold ${payment.status === "paid"
                                            ? "text-green-600"
                                            : "text-red-500"
                                        }`}
                                >
                                    {payment.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*  Mobile View */}
            <div className="sm:hidden space-y-4">
                {payments.map((payment, index) => (
                    <div
                        key={payment._id}
                        className="border border-amber-300 rounded-xl p-4 shadow-sm bg-white"
                    >
                        <div className="flex justify-between mb-2">
                            <p className="font-bold text-amber-600">#{index + 1}</p>
                            <p
                                className={`font-semibold ${payment.status === "paid"
                                        ? "text-green-600"
                                        : "text-red-500"
                                    }`}
                            >
                                {payment.status}
                            </p>
                        </div>
                        <p className="text-gray-700 text-sm">
                            <span className="font-semibold">Email: </span>{user?.email}
                        </p>
                        <p className="text-gray-700 text-sm">
                            <span className="font-semibold">Date: </span>{payment.date}
                        </p>
                        <p className="text-gray-700 text-sm">
                            <span className="font-semibold">Total: </span>${payment.price}
                        </p>
                    </div>
                ))}
            </div>

            {/*  Empty State */}
            {payments.length === 0 && (
                <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
                    No payments found.
                </p>
            )}
        </div>
    );
};

export default PaymentHistory;
