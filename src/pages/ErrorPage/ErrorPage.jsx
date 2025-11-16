
import { Link } from "react-router-dom";
import errorImg from "../../assets/404.gif"

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center">
            <img
                src={errorImg}
                alt="Error"
                className="max-w-md w-full mb-8"
            />
            <Link
                to="/"
                className="bg-[#D1A054] hover:bg-[#b8843f] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
