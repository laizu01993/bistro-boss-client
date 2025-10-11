import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img}
                title={title}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-6                       ">
                <Link to={`/order/${title}`}>
                    <button className="btn uppercase btn-outline border-0 border-b-4 mt-4 text-black hover:bg-yellow-500 hover:border-yellow-500">
                        order your favourite food
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;