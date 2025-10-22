import loginImage from "../../assets/others/authentication1.png"
import bgImage from "../../assets/others/authentication.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
         else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="card shadow-lg min-h-[600px] hero-content flex-col md:flex-row-reverse ">

                    <div className="w-full max-w-sm shrink-0 ">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <h2 className="font-bold text-3xl text-center mb-4">Login</h2>
                                <label className="label">Email</label>
                                <input type="email"
                                    name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password"
                                    name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>

                                {/* Recaptcha */}
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text"
                                    name="captcha" className="input" placeholder="type the captcha above" />

                                <input disabled={disabled} className="btn btn-neutral mt-4 bg-[#D1A054]" type="submit" value="Login"></input>
                            </fieldset>
                        </form>
                        <p className="justify-center flex text-red-500">New Here? <Link to="/signup">Create an account</Link></p>
                    </div>
                    <div className="text-center lg:text-left">
                        <img className="max-h-[500px] w-auto object-contain" src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;