// import FoodCard from "../../../components/FoodCard/FoodCard";

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';


// const OrderTab = ({ items }) => {

//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     };
//     return (
//         <div>
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {
//                             items.map(item => <FoodCard
//                                 key={item._id}
//                                 item={item}></FoodCard>)
//                         }
//                     </div>

//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;

import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {

    // Function to split items into chunks of size 6
    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const slides = chunkArray(items, 6);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
                spaceBetween={20}
            >
                {slides.map((chunk, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="grid
                        grid-cols-1 sm:grid-cols-1 md:grid-cols-2
                        lg:grid-cols-3 gap-10">
                            {chunk.map(item => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderTab;


