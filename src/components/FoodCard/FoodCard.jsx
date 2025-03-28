import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const FoodCard = ({item}) => {
    console.log(item)

    const {name, recipe, image, price, _id} = item;
    
    const {user} = UseAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart();

    const handleAddToCart = () =>{
        if(user && user.email){
            // send cart item to the database
            
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
              if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                //   refetch cart to update the cart items count
                refetch();
              }  
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //  send the user to the login page
                navigate('/login', {state: {from: location}})
                }
              });
        }
        
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <p className='bg-slate-900 absolute right-0 mr-4 mt-4 px-4 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p className='text-center'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart}
                    className="btn btn-outline text-black border-0 border-b-4 mt-6 bg-slate-100 border-orange-400">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;