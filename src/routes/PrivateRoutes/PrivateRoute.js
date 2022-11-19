import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/auth.context';
import Lottie from "lottie-react";
import loader from '../../assets/Animation/loading.json';
const PrivateRoute = ({children}) => {

    const { user , loading } = useContext(AuthContext); 
    const location = useLocation();

    if(loading){
        return   <div className='d-flex align-items-center justify-content-center'><Lottie animationData={loader}></Lottie></div>
    }


    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    return  children ;
};

export default PrivateRoute;