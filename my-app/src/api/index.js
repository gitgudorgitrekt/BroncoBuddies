import axios from 'axios';

//url pointing to backend route TODO work with backend team
//const url = 'https://broncobuddies.herokuapp.com/posts';
const url = 'http:localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
<<<<<<< HEAD
=======
export const createPost = (newPost) => axios.post(url, newPost)
>>>>>>> b6050a8ccbab058f060ddf7ba4a5d03ce24f2574
