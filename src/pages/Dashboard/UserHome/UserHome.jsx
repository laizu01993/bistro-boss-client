import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserHome = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className="p-6">
            <h2 className="text-3xl">
                <span>User Home </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;