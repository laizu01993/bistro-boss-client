import { Helmet } from "react-helmet-async";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {

    const [menu] = useMenu();

    const {category} = useParams();

    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>

            <Cover
                img={orderCover}
                title="Order food"
            ></Cover>

            {/* Tabs */}
            <Tabs className="my-8 font-semibold text-center" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="uppercase">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                
                
            </Tabs>
        </div>
    );
};

export default Order;