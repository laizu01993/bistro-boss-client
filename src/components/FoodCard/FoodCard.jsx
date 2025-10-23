import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {

    const { name, recipe, image, price } = item;

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleAddToCart = food => {
        if (user && user.email) {
            // send 
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                //    send the user to the login page
                navigate('/login')
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="relative">
                <img
                    src={image} />
            </figure>
            <p className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-md text-sm font-semibold">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn uppercase btn-outline border-0 border-b-4 mt-4 text-yellow-500
                    bg-gray-100 hover:bg-black">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;