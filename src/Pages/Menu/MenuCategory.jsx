
import { Link } from 'react-router-dom';
import Cover from '../Shared/Cover/Cover';
import MenuItem from '../Shared/MenuItem/MenuItem';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title} description="Would you like to try a dish?"></Cover>}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                {
                    items.map(item => <MenuItem
                    item={item}
                    key={item._id}
                    ></MenuItem>)
                }
            </div> 
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline text-black border-0 border-b-4 mt-6">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;