import {useContext} from "react";
import {AuthContext} from "../../Context/index.js";
import {Navigate} from "react-router-dom";
function ProtectedRoute({children}){
    const {user} = useContext(AuthContext);
    console.log(user);
    return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;