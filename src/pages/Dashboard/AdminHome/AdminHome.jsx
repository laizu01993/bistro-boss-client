import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AdminHome = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="p-6">
            <h2 className="text-3xl">
                <span>Admin Home</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
                </h2>
        </div>
    );
};

export default AdminHome;