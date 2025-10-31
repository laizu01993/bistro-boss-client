import { FiEdit } from "react-icons/fi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {

    const [menu, loading, refetch] = useMenu();

    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`)
                    .then( res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                title: `${item.name} has been deleted!`,
                                showConfirmButton: false,
                                timer: 1500,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="p-6">
            <SectionTitle subHeading={"Hurry Up!"}
                heading={"Manage All Items"}></SectionTitle>
            <div>
                <h2 className="text-3xl">Total Items</h2>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL no.</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn bg-amber-500 hover:bg-amber-400 text-white"><FiEdit /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-sm bg-red-500 text-white text-lg hover:bg-red-400"><RiDeleteBin6Line /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;