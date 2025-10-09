import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';



const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offer = menu.filter(item => item.category === "offered")
    return (
        <div className='mb-8'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg}
                title="Our Menu"
                details="would you like to try a dish?"></Cover>

            {/* Today's Offer */}
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's offer"}></SectionTitle>

            <MenuCategory
            items={offer}></MenuCategory>

            {/* Dessert Menu Item */}
            <MenuCategory
            items={dessert}
            title="Dessert"
            img={dessertImg}
            ></MenuCategory>
            {/* Pizza Menu Item */}
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            ></MenuCategory>
            {/* Salad Menu Item */}
            <MenuCategory
            items={salad}
            title="salad"
            img={saladImg}
            ></MenuCategory>
            {/* Soup Menu Item */}
            <MenuCategory
            items={soup}
            title="soup"
            img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;