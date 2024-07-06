import axios from "axios";
import { useEffect, useState } from "react";


const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    const fetchAxios = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setPosts(response.data)
        })
        .catch(error => console.log(error))
    }

    const addPost = () => {
        let body = {
            title: "New Post",
            body: "This is a new post",
            userId: 999
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", body)
        .then(response => setPost(response.data))
        .catch(error => console.log(error))
    }

    const updatePost = () => {
        let body = {
            "userId": "999",
            "title": "Devara",
            "body":"Jr. NTR latest movie"
        }
        axios.put("https://jsonplaceholder.typicode.com/posts/67", body)
        .then(response => setPost(response.data))
        .catch(error => console.log(error))
    }

    const deletePost = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/67")
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    const patchPost = () => {
        let body = {
            "body":"Jr. NTR latest movie"
        }
        axios.patch("https://jsonplaceholder.typicode.com/posts/67", body)
        .then(response => setPost(response.data))
        .catch(error => console.log(error))
    }

    const fetchDataFetch = () => {
        fetch("https://jsonplaceholder.typicode.com/postscjgvcjhvhvik")
        .then(response => {
            if(response.status !== 200){
                return []
            } else {
                return response.json()
            }
        })
        .then(response => {
            setPosts(response)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="posts">
            <h2>Usage of AXIOS</h2>
            <button onClick={fetchAxios}>Fetch Data using Axios</button><br/>
            <button onClick={fetchDataFetch}>Fetch Data using Fetch</button><br/>
            <button onClick={addPost}>Add Post</button><br/>
            <button onClick={updatePost}>Update Post</button><br/>
            <button onClick={deletePost}>Delete Post</button><br/>
            <button onClick={patchPost}>Partial Update Post</button>


            <div>
                <h2>Post</h2>
                <p>Post Id: {post.id}</p>
                <p>User Id: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>
            <div>
                <h2>Posts</h2>
                {
                posts.map((post, index) => <div key={index}>
                                        <h4>{post.title}</h4>
                                        <p>{post.body}</p>
                                 </div>)
            }
            </div>
            
        </div>
    )
}

export default Posts;