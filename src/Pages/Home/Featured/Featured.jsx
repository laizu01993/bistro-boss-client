import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item mb-10 pt-10">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"FEATURED ITEM"}
            ></SectionTitle>
            <div className="md:flex gap-8 items-center py-20 px-36">
            <img className="w-[500px] object-cover" src={featured} alt="" />
            <div className="text-white">
            <p>March 20, 2023</p>
            <h2 className="uppercase">where can i get some?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, alias ratione officiis autem, vitae quidem deleniti, nesciunt recusandae aperiam veniam fuga harum. Quis odio, rerum molestias dignissimos sit magnam repellendus.</p>
            <button className="btn btn-outline text-white">Right Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;