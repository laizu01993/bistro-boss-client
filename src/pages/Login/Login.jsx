import loginImage from "../../assets/others/authentication1.png"
import bgImage from "../../assets/others/authentication.png"

const Login = () => {
    return (
        <div className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="card shadow-lg h-[600px] hero-content flex-col md:flex-row-reverse ">

                <div className="w-full max-w-sm shrink-0 ">
                    <form className="card-body">
                        <fieldset className="fieldset">
                            <h2 className="font-bold text-3xl text-center mb-4">Login</h2>
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>

                            <input className="btn btn-neutral mt-4 bg-[#D1A054]" type="submit" value="Login"></input>
                        </fieldset>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className="h-[500px]" src={loginImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;