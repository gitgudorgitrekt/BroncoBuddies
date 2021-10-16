import axios from 'axios';

//url pointing to backend route TODO work with backend team
const url = 'http://localhost:3000/posts';

const fetchPosts = () => axios.get(url);