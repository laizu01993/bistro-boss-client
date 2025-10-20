import signUpImage from "../../assets/others/authentication1.png"
import bgImage from "../../assets/others/authentication.png"

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }

    return (
        <div className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="card shadow-lg min-h-[600px] hero-content flex-col md:flex-row-reverse ">

                <div className="w-full max-w-sm shrink-0 ">
                    <form onSubmit={handleSignUp} className="card-body">
                        <fieldset className="fieldset">
                            <h2 className="font-bold text-3xl text-center mb-4">Sign Up</h2>

                            <label className="label">Name</label>
                            <input type="text"
                                name="name" className="input" placeholder="Name" />
                            <label className="label">Name</label>
                            <input type="text"
                                name="name" className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email"
                                name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password"
                                name="password" className="input" placeholder="Password" />

                            
                            <input  className="btn btn-neutral mt-4 bg-[#D1A054]" type="submit" value="Sign Up"></input>
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