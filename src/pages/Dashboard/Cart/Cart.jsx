import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../hooks/useCart";

const Cart = () => {

    const [cart] = useCart();

    // Calculation of total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    return (
        <div>
            <div className="flex items-center justify-evenly">
                <h2 className="text-4xl">Total Orders: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                <button className="btn bg-amber-500 btn-md hover:bg-amber-400 text-white">Pay</button>
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
                            cart.map(item => <tr key={item._id}>
                            <th>
                                
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
                                        <h2 className="font-bold">{item.price}</h2>
                                    </div>
                            </td>
                           
                            <th>
                                <button className="btn btn-sm bg-red-500 text-white text-lg hover:bg-red-400"><RiDeleteBin6Line /></button>
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