import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            
                            <p className="px-12 items-center">{review.details}</p>
                            <p className="uppercase text-[#CD9003] text-2xl">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;