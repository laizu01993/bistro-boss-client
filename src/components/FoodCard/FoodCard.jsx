
const FoodCard = ({item}) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="relative">
                <img
                    src={image} />
            </figure>
            <p className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-md text-sm font-semibold">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn uppercase btn-outline border-0 border-b-4 mt-4 text-yellow-500
                    bg-gray-100 hover:bg-black">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;