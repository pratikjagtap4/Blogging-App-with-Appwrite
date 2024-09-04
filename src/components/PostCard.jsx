import React from 'react'
import { Link } from 'react-router-dom'
import storageServices from '../appwrite/storageService'
import { useSelector } from 'react-redux'

function PostCard({ $id, title, featuredImage }) {
    const userData = useSelector(state => state.auth.userData)

    return (
        <Link to={`/post/${$id}`}>

            <div className='sm:w-1/3 bg-gray-100 rounded-xl p-4 mx-auto my-2'>
                <div className='w-full justify-center mb-4'>
                    <img src={storageServices.filePreview(featuredImage)} className="rounded-lg" alt="" />
                    {userData && <p className='text-sm mr-12 pr-12'> {userData.name}</p>}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard