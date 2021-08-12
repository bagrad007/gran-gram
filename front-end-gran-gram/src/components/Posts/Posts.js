import React from 'react'
import { useSelector } from 'react-redux'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    return (
        <div className="container">
            <h1>Feed</h1>
        </div>
    )
}

export default Posts
