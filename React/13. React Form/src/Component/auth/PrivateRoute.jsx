import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// here Outlet access the other Route when user can successfully LogIn... through the PrivateRoute() function.
// either Nagigate / redirect home / root => '/'.

const useAuthenticate = () =>{
    return true; //if return false : can't access other route //here use token .... if user login failed return false.
}

function PrivateRoute(){
    const isAuthenthicate = useAuthenticate();

    return isAuthenthicate ? <Outlet/> : <Navigate to='/'/>
}

export default PrivateRoute;