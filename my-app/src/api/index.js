import axios from 'axios';

//url pointing to backend route TODO work with backend team
const url = 'https://broncobuddies.herokuapp.com/posts';
//const url = 'http:localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost)
