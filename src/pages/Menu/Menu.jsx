import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu';


const Menu = () =>{
    return (
        <div className='mb-8'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg}
            title="Our Menu"
            details="would you like to try a dish?"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;