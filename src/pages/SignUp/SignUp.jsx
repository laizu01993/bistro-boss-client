import signUpImage from "../../assets/others/authentication1.png"
import bgImage from "../../assets/others/authentication.png"
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })

    };


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
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">
                                <h2 className="font-bold text-3xl text-center mb-4">Sign Up</h2>
                                {/* Name field */}
                                <label className="label">Name</label>
                                <input type="text"
                                    {...register("name", { required: true })}
                                    className="input" placeholder="Name" />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                                {/* Image field */}
                                <label className="label">Photo URL</label>
                                <input type="text"
                                    {...register("photoURL", { required: true })}
                                    className="input" placeholder="Photo URL" />
                                {errors.photoURL && <span className="text-red-600">This field is required</span>}
                                {/* Email field */}
                                <label className="label">Email</label>
                                <input type="email"
                                    {...register("email", { required: true })}
                                    className="input" placeholder="Email" />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                                {/* Password field */}
                                <label className="label">Password</label>
                                <input type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                    })}

                                    className="input" placeholder="Password" />

                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one upper case, one lower case, one number and one special character and less than 20 characters</span>}


                                <input className="btn btn-neutral mt-4 bg-[#D1A054]" type="submit" value="Sign Up"></input>
                            </fieldset>
                        </form>
                        <p className="text-center"><small>Already have an account? <Link to="/login">Please Login</Link></small></p>
                    </div>
                    <div className="text-center lg:text-left">
                        <img className="max-h-[500px] w-auto object-contain" src={signUpImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;