import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/authService';
import { login } from '../store/authSlice';
import { Button, Input, Loading, Logo, PostForm } from './index'

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm();

    async function signUp(data) {
        setLoading(true)
        setError("")

        try {
            const userAcount = await authService.createAccount(data);
            if (userAcount) {
                const userData = await authService.getUser();

                if (userData) dispatch(login(userData))
                navigate("/")
            }
            setLoading(false)
        }
        catch (err) {
            setError(err.message)
        }
        reset();
        setLoading(false)
    }
    return !loading ? (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className='mb-2 flex justify-start'>
                    <span className='inline-block-w-full max-w-[50px] mr-10'>
                        <Logo width="100%" />
                    </span>
                    <h2 className='text-center text-2xl font-bold leading-tight'> Create New  Account</h2>
                </div>
                <p className='mt-2 text-center text-base text-black/60'>
                    Alreday have an Account? &nbsp;
                    <Link
                        to="/Login"
                        className='"font-medium text-bold text-black text-primary transition-all duration-200 hover:underline'
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-4 text-center'>{error}</p>}

                <form onSubmit={handleSubmit(signUp)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Name: "
                            type="text"
                            placeholder="Enter your full name"
                            className="ml-9"
                            {...register("name", {
                                required: true,
                            })}
                        >
                        </Input>
                        <Input
                            label="Number: "
                            type="number"
                            placeholder="Enter your number"
                            className="ml-5"
                            {...register("number", {
                                required: true,
                            })}
                        >
                        </Input>

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
                        <Button
                            type="submit"
                            className='px-4 py-2 rounded-full bg-blue-600 text-white'
                        >
                            SignUp
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    ) :
        (
            <div className='min-h-screen flex flex-wrap content-between  m-0 p-0'>
                <div className='w-full block'>
                    <Loading></Loading>
                </div>
            </div>)
}

export default Signup