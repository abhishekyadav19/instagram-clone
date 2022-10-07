import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { usercontext } from '../../main/context/context';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(usercontext)

    console.log("Check user in Private: ", user);
    if (!user || !user.email) {
        return <Navigate to="/" />;
    }
    return children;
}

export default ProtectedRoute