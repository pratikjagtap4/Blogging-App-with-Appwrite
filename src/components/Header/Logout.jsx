import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/authService';
import { logout } from '../../store/authSlice';

function Logout() {
    const dispatch = useDispatch();

    function logoutHandler() {
        authService.logoutUser()
            .then(() =>
                dispatch(logout())
            )
    }

    return (
        <button
            className='block pr-4 pl-3 duration-200  hover:text-orange-600  mx-3'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default Logout

//inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full