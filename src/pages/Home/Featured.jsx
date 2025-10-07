import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white mb-8 pt-6">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured item"}></SectionTitle>
            <div className="md:flex justify-center items-center bg-black/30 backdrop-blur-sm  pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-1 mt-2 md:ml-10">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Enjoy the chef’s special — a fusion of international flavors crafted to perfection.
                        Our signature dish features tender bites of seared salmon topped with creamy garlic
                        sauce, roasted vegetables, and a drizzle of lemon butter. Perfect for those who love
                        fresh, hearty, and flavorful meals made with locally sourced ingredients.</p>
                    <button className="btn uppercase btn-outline border-0 border-b-4 mt-4 text-white hover:bg-yellow-500 hover:border-yellow-500">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;