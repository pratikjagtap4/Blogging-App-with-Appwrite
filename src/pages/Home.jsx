import React from 'react'
import { PostCard, Container } from '../components'
import { useSelector } from 'react-redux'
function AllPost() {
    const allPosts = useSelector(state => state.posts.allPosts)
    const authStatus = useSelector(state => state.auth.status)


    if (allPosts.length === 0 || authStatus === false) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        allPosts.map((post) => (
                            <div key={post.$id}>
                                <PostCard {...post} className="p-2 w-1/4" />
                            </div>
                        )
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPost