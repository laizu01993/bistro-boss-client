import { useState } from 'react';
import orderImg from '../../../src/assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../components/FoodCard/FoodCard';



const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const[menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Cover img={orderImg}
                title="Order Food"
                description="WOULD YOU LIKE TO TRY OUR DISH?"
            ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="uppercase my-10">
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    {
                        salad.map(item => <FoodCard
                        key={item._id}
                        item={item}></FoodCard>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        pizza.map(item => <FoodCard
                        item={item}></FoodCard>)
                    }
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;