import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
      <div className="p-8">
        <Skeleton height={40} width={200} />
        <Skeleton count={5} />
      </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;