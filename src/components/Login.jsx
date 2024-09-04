import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import authService from '../appwrite/authService'
import { login as authLogin, logout } from "../store/authSlice"
import { Input, Loading, Logo } from "./"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function login(data) {
        setLoading(true)
        setError("")
        try {
            const session = await authService.loginUser(data);

            if (session) {
                const userData = await authService.getUser();

                if (userData) {
                    dispatch(authLogin(userData))
                    navigate("/")
                }
                else {

                    dispatch(logout())
                }
            }
            setLoading(false)
        } catch (err) {

            dispatch(logout())
            setError(err.message)

        }
        reset();
        setLoading(false)
    }

    return !loading ? (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-2 sm:p-10 border border-black/10'>
                <div className='mb-2 flex justify-start'>
                    <span className='inline-block-w-full max-w-[50px] mr-10'>
                        <Logo width="100%" />
                    </span>
                    <h2 className='text-center text-2xl font-bold leading-tight'> Sign in to Your Account</h2>
                </div>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have an account? &nbsp;
                    <Link
                        to="/Signup"
                        className='"font-medium text-bold text-black text-primary transition-all duration-200 hover:underline'
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-4 text-center'>{error}</p>}

                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email:"
                            type="email"
                            placeholder="Enter your Email"
                            className="ml-10"
                            {...register("email", {                 //It links the input field(<Input />) to the form state, handling validation, value tracking, and submission.
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        ></Input>

                        <Input
                            label="Password:"
                            type="password"
                            placeholder="Enter your password"
                            className="ml-3"
                            {...register("password", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
                                }

                            })}
                        ></Input>
                        {error.password && <span>{error.password.message}</span>}
                        <button
                            type="submit"
                            className='px-4 py-2 rounded-full bg-blue-600 text-white'
                        >
                            SignIn
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
        :
        (
            <div className='min-h-screen flex flex-wrap content-between  m-0 p-0'>
                <div className='w-full block'>
                    <Loading></Loading>
                </div>
            </div>)
}

export default Login



// React.forwardRef allows you to pass a ref from a parent to a child component. Even if you don't explicitly pass a ref, react-hook-form does so internally when you spread ...register onto the input.
//ref and register are interrelated when using react-hook-form. The register function internally uses ref to connect the input field to the form's state and validation logic. Even if you don't manually pass a ref, react-hook-form manages it for you, enabling direct access to the input's value and allowing the form to handle things like validation and data retrieval.