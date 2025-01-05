import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
import dessertBg from '../../../src/assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../src/assets/menu/pizza-bg.jpg'
import saladBg from '../../../src/assets/menu/pizza-bg.jpg'
import soupBg from '../../../src/assets/menu/pizza-bg.jpg'



const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss  | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" description="Would you like to try a dish?"></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading="Don't miss"
            heading="Today's offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert}
            title="Dessert"
            img={dessertBg}></MenuCategory>
            <MenuCategory items={pizza}
            title="Pizza"
            img={pizzaBg}></MenuCategory>
            <MenuCategory items={salad}
            title="Salads"
            img={saladBg}></MenuCategory>
            <MenuCategory items={soup}
            title="Soups"
            img={soupBg}></MenuCategory>
        </div>
    );
};

export default Menu;