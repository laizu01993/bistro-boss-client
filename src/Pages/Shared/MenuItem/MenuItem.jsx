

const MenuItem = ({item}) => {

    // destructuring
    const{name, recipe, image, price} = item;
    return (
        <div className="flex gap-4 my-4">
           <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] ml-2 object-cover" src={image} alt="" />
           <div>
            <h3 className="text-xl uppercase">{name}--------</h3>
            <p>{recipe}</p>
           </div>
           <div>
            <p className="text-[#D99902]">${price}</p>
            </div> 
        </div>
    );
};

export default MenuItem;