import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post"

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    } ,[])
    return(
        <div>
            <h2>Posts : {posts.length} </h2>
            {
                posts.map(post => <Post post = {post}></Post>)
            }
        </div>
    )
}

/**
 1.create a state to store the data
 2.creat useEffect with no dependencies
 3.use fetch to use data
 4.
 */