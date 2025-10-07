import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";



const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setMenu(popularItem)
            })
    }, [])
    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-6                       ">
            <button className="btn uppercase btn-outline border-0 border-b-4 mt-4 text-black hover:bg-yellow-500 hover:border-yellow-500">
                View Full Menu
            </button>
            </div>
        </section>
    );
};

export default PopularMenu;