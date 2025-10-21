import signUpImage from "../../assets/others/authentication1.png"
import bgImage from "../../assets/others/authentication.png"
import { useForm } from "react-hook-form";


const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

     const onSubmit = (data) => {
        console.log(data);
     };

   
    return (
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

                            <label className="label">Name</label>
                            <input type="text"
                            {...register("name", { required: true })}
                                className="input" placeholder="Name" />
                                {errors. name && <span className="text-red-600">This field is required</span>}

                            <label className="label">Email</label>
                            <input type="email"
                            {...register("email", { required: true })}
                                className="input" placeholder="Email" />
                                {errors. email && <span className="text-red-600">This field is required</span>}

                            <label className="label">Password</label>
                            <input type="password"
                            {...register("password", { required: true, minLength: 6,  maxLength:20 })}
                                className="input" placeholder="Password" />
                                {errors. password?.type === 'required' && <span className="text-red-600">Password is required</span>}


                            <input className="btn btn-neutral mt-4 bg-[#D1A054]" type="submit" value="Sign Up"></input>
                        </fieldset>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className="max-h-[500px] w-auto object-contain" src={signUpImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;