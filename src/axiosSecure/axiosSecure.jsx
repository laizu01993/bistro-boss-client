import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-5us7.onrender.com'
});

export default axiosSecure;
