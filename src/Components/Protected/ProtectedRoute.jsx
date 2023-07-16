import React from 'react'
import { Navigate , useLocation} from 'react-router-dom';

const ProtectedRoute = ({component}) => {
    // const Navigate=useNavigate();
    let location = useLocation();
    let loginKey="srgerh45yyhuu23t2334";
    if(!loginKey) {
        return <Navigate to="/login" />
    }
 return component
}

export default ProtectedRoute