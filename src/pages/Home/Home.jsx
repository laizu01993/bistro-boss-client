import Banner from "./Banner";
import Category from "./Category";
import ChefServices from "./ChefServices";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefServices></ChefServices>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;