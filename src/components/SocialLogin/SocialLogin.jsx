import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="text-center space-y-4">
                <h2 className="font-medium">Or sign in with</h2>
                <button onClick={handleGoogleSignIn} className="btn btn-circle border-amber-600 btn-lg"><FaGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;