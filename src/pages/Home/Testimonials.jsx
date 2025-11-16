import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-5us7.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'testimonials'}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className=" items-center flex flex-col my-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-14">{review.details}</p>
                            <h3 className="text-2xl text-yellow-600">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;