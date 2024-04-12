import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = () => {

    const {user} =  useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
    return (
        <div>
            private
        </div>
    );
};

export default Privateroute;