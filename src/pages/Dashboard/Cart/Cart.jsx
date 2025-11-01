import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = useCart();

    // Calculation of total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) 
                        {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex items-center justify-evenly mb-10">
                <h2 className="text-4xl">Total Orders: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                {cart.length ? <Link to="/dashboard/payment">
                <button className="btn bg-amber-500 btn-md hover:bg-amber-400 text-white">Pay</button>
                </Link> : <button disabled className="btn bg-amber-500 btn-md hover:bg-amber-400 text-white">Pay</button>}
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <h2 className="font-bold">{item.name}</h2>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <h2 className="font-bold">${item.price}</h2>
                                    </div>
                                </td>

                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-sm bg-red-500 text-white text-lg hover:bg-red-400"><RiDeleteBin6Line /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;