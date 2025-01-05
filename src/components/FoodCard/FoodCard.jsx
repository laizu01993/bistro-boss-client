import React from 'react';

const FoodCard = ({item}) => {

    const {name, recipe, image} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;