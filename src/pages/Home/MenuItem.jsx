

const MenuItem = ({ item }) => {

    const { name, recipe, image, price } = item;
    return (
            <div className="flex space-x-4 my-6">
                <img className="rounded-full rounded-tl-none w-30" src={image} alt="" />
                <div>
                    <h3 className="text-2xl font-normal uppercase">{name}----------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
                </div>
    );
};

export default MenuItem;