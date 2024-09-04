import React from 'react'
import { PostCard, Container } from '../components'
import { useSelector } from 'react-redux'
function AllPost() {
    const allPosts = useSelector(state => state.posts.allPosts)
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        allPosts.map((post) => (
                            <div key={post.$id}>
                                <PostCard {...post} className="p-2 sm:w-1/4 w-1/2" />
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