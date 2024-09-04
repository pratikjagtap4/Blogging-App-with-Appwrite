import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { Container, Input, Logo, Logout } from "../"  // since default import is index.js ... we can skip writing index.js

function Header() {
    const authStatus = useSelector(state => state.auth.status);

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "SignUp",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/allpost",
            active: authStatus
        },
        {
            name: "Add Posts",
            slug: "/addpost",
            active: authStatus
        }

    ]
    return (
        <header className='py-3 shadow bg-white-50'>
            <Container>
                <nav className='flex justify-between'>
                    <div className='sm:ml-20'>
                        <Link>
                            <Logo width='50px' />
                        </Link>
                    </div>
                    <ul className='flex pt-2'>
                        {
                            navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <NavLink
                                            to={`${item.slug}`}
                                            className={({ isActive }) =>
                                                `block sm:pr-4 sm:pl-3 duration-200 ${isActive ? "text-black-900  border-b-2 border-black/60" : "text-gray-700"}   hover:text-orange-600  hover:border-b-2 mx-3`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>

                                    </li>
                                ) : (null)
                            )
                        }
                    </ul>
                    <div className='pt-2 mr-12' >

                        {authStatus && <Logout />}
                    </div>

                </nav>
            </Container>
        </header>
    )
}

export default Header