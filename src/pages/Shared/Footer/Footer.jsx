import { SiInstagram } from "react-icons/si";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className=" text-white">
            <div className="flex flex-col md:flex-row">
                {/* Left side */}
                <div className="flex-1 bg-gray-600 p-6 text-center">
                    <h3 className="text-lg font-bold mb-2">CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

                {/* Right side */}
                <div className="flex-1 bg-neutral-900 p-6 text-center">
                    <h3 className="text-lg font-bold mb-2">Follow US</h3>
                    <p className="mb-3">Join us on social media</p>
                    <div className="flex justify-center gap-4 text-2xl">
                        <a href="#"><SlSocialFacebook /></a>
                        <a href="#"><SlSocialTwitter /></a>
                        <a href="#"><SiInstagram /></a>
                    </div>
                </div>
            </div>

            {/* copyright */}
            <div className=" text-center bg-neutral text-white p-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>

        </footer>
    );
};

export default Footer;