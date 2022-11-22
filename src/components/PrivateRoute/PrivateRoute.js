import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useAuth();
    
    return user.displayName? children : <Navigate to='/login' replace state={{from: location}}/>

    
    // if(user.email){
    //     return children
    // }
    // else{
    //  return   <Navigate to='/login' replace state={{from: location}}/>  
    // }

}

export default PrivateRoute;