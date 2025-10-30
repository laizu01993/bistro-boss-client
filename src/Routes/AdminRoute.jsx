import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const AdminRoute = ({children}) => {

    const { user , loading } = useContext(AuthContext);
    const location = useLocation();

    const [isAdmin, isAdminLoading] = useAdmin();
   
    if(loading || isAdminLoading){
      return(

      <div className="p-8">
        <Skeleton height={40} width={200} />
        <Skeleton count={5} />
      </div>
      )
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;