// import axios from "axios";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";


// const axiosSecure = axios.create({
//     baseURL: 'https://bistro-boss-server-5us7.onrender.com'
// })
// const useAxiosSecure = () => {

//     const navigate = useNavigate();

//     const {logOut} = useContext(AuthContext);

//     // request interceptors to add authorization header for every secure call to the api

//     axiosSecure.interceptors.request.use(function (config) {
//         const token = localStorage.getItem('access-token')

//         config.headers.authorization = `Bearer ${token}`

//         return config;
//     }, function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//     });

//     // interceptors 401 and 403 status
//     axiosSecure.interceptors.response.use(function(response) {
//         return response;
//     }, async (error) =>{
//         const status = error.response.status;

//         // for 401 or 403 logout the user take him to the login page

//         if(status === 401 || status === 403){
//             await logOut();
//             navigate('/login')
//         }
//         return Promise.reject(error)
//     })

//     return axiosSecure;
// };

// export default useAxiosSecure;
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-5us7.onrender.com'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    useEffect(() => {
        // Request interceptor
        const reqInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                config.headers.authorization = `Bearer ${token}`;
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor
        const resInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error?.response?.status;

                if (status === 401 || status === 403) {
                    await logOut();
                    navigate('/login');
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        };
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
