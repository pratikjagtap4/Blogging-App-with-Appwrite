import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Loading } from './index'

function AuthLayout({ children, authentication = true }) {
    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false);
    }, [authentication, navigate, authStatus])

    return loader ? <Loading /> : <>{children}</>
}


export default AuthLayout