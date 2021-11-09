import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default  (posts = [], action) =>{
    switch(action.type){
<<<<<<< HEAD
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
=======
        case FETCH_ALL:
>>>>>>> e7d93eb481be06ad97b8effc2743be5fa2e7cef3
            return action.payload;
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
        return posts;
    }
}