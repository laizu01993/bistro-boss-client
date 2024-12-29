import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item =>item.category === 'popular')
            setMenu(popularItems)})
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem
                    item={item}
                    key={item._id}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-6 text-black text-center">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;