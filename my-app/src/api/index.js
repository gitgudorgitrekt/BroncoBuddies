import axios from 'axios';

<<<<<<< HEAD
//const url = 'https://broncobuddies.herokuapp.com/posts';
const url = 'http:localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
=======
//url pointing to backend route TODO work with backend team
const url = 'https://broncobuddies.herokuapp.com/posts';
//const url = 'http:localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
>>>>>>> e7d93eb481be06ad97b8effc2743be5fa2e7cef3
