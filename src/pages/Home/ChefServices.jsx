import chefServiceImg from '../../assets/home/chef-service.jpg'

const ChefServices = () => {
    return (
        <div className="relative mb-8">
            {/* Background Image */}
            <img
                src={chefServiceImg}
                alt=""
                className="w-full h-[400px] object-cover rounded-lg"
            />

            {/* Text Card Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/60 p-8 md:p-12 max-w-3xl  text-center shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold uppercase mb-4">Bistro Boss</h2>
                    <p className="text-gray-700 font-medium">
                        At Bistro Boss, we believe every meal should be an experience. Our skilled chefs combine passion, creativity, and the freshest ingredients to craft dishes that celebrate both tradition and innovation. From signature entrées to seasonal specialties, we deliver exceptional taste and personalized service that make every dining moment unforgettable.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ChefServices;