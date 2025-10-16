import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import contactCover from "../../../assets/contact/banner.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>

            <Cover
                img={contactCover}
                title="Contact Us"
            ></Cover>

            <SectionTitle
                subHeading={"Visit Us"}
                heading={"Our Location"}>
            </SectionTitle>

            <div className="bg-base-200 py-12 mb-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* PHONE CARD */}
                    <div className="bg-base-100 shadow-md text-center flex flex-col h-60">
                        {/* Top Icon Section */}
                        <div className="bg-[#D1A054] text-white flex justify-center items-center h-12">
                            <FaPhoneAlt className="text-xl" />
                        </div>
                        {/* Bottom Content */}
                        <div className="flex flex-col justify-center flex-grow p-6">
                            <h3 className="text-xl font-semibold mb-2">PHONE</h3>
                            <p className="text-gray-600">+38 (012) 34 56 789</p>
                        </div>
                    </div>

                    {/* ADDRESS CARD */}
                    <div className="bg-base-100 shadow-md text-center flex flex-col h-60">
                        <div className="bg-[#D1A054] text-white flex justify-center items-center h-12">
                            <FaMapMarkerAlt className="text-xl" />
                        </div>
                        <div className="flex flex-col justify-center flex-grow p-6">
                            <h3 className="text-xl font-semibold mb-2">ADDRESS</h3>
                            <p className="text-gray-600">+30 (012) 34 56 789</p>
                        </div>
                    </div>

                    {/* WORKING HOURS CARD */}
                    <div className="bg-base-100 shadow-md text-center flex flex-col h-60">
                        <div className="bg-[#D1A054] text-white flex justify-center items-center h-12">
                            <FaClock className="text-xl" />
                        </div>
                        <div className="flex flex-col justify-center flex-grow p-6">
                            <h3 className="text-xl font-semibold mb-2">WORKING HOURS</h3>
                            <p className="text-gray-600">
                                Mon - Fri: 08:00 - 22:00<br />
                                Sat - Sun: 10:00 - 23:00
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Contact form */}
             <SectionTitle
                subHeading={"Send Us a Message"}
                heading={"Contact Form"}>
            </SectionTitle>

            <div className="max-w-screen-md mx-auto my-10 bg-gray-50 p-10 rounded-lg shadow-md">
                <form className="space-y-6">
                    {/* Name & Email side by side on large screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-semibold">Name*</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Email*</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-2 font-semibold">Phone*</label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-2 font-semibold">Message*</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    {/* Submit button */}
                    <div className="text-center ">
                        <div className="">
                        <button className="btn bg-[#D1A054] text-white border-none hover:bg-[#b8873e] px-8">
                            Send Message <IoIosSend className="mt-1 text-xl" /> 
                        </button>
                       
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;