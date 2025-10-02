import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

import 'swiper/css';
import 'swiper/css/pagination';


const Category = () => {
    return (
        <Swiper
            slidesPerView={'4'}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-20"
        >
            <SwiperSlide>
                <img src={slide1}></img>
                <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2}></img>
                <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Pizzas</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide3}></img>
                <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Soups</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide4}></img>
                <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Desserts</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide5}></img>
                <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Salads</h3>
                </SwiperSlide>

        </Swiper>
    );
};

export default Category;