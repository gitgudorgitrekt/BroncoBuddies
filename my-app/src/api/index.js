import axios from 'axios';

const localAPI = axios.create({ baseURL: 'http://localhost:5000' });
// const API = axios.create({ baseURL: 'https://broncobuddies.herokuapp.com' })

export const fetchPosts = (caller, page) => localAPI.get(`${caller}?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => localAPI.get(`/buddyfilter/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags || 'none'}`);
export const createPost = (newPost) => localAPI.post('/posts', newPost);
export const updatePost = (id, updatedPost) => localAPI.patch(`/posts/${id}`, updatedPost);
export const likePost = (id) => localAPI.patch(`/posts/${id}/likePost`);
export const deletePost = (id) => localAPI.delete(`/posts/${id}`);
