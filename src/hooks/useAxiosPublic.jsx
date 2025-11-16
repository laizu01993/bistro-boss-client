import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-5us7.onrender.com'
})

const useAxiosPublic = () =>{
return axiosPublic;
};

export default useAxiosPublic;