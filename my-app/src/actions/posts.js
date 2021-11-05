<<<<<<< HEAD
=======
import * as api from '../api';

// Action Creators
export const getPosts = () => async(dispatch) => {
    try{
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data})
    }catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    }catch(error){
        console.log(error);
    }
}
>>>>>>> b6050a8ccbab058f060ddf7ba4a5d03ce24f2574
