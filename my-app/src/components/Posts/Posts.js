import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

<<<<<<< HEAD
const Posts = ({ setCurrentId }) => {
=======
const Posts = ({setCurrentId}) => {
>>>>>>> e7d93eb481be06ad97b8effc2743be5fa2e7cef3
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    return(
        !posts.length ? <CircularProgress/> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) =>(
                      <Grid key={post.id} item xs={12} sm={6}>
<<<<<<< HEAD
                            <Post post={post} setCurrentId={setCurrentId}/>
=======
                            <Post post={post} setCurrentId={setCurrentId} />
>>>>>>> e7d93eb481be06ad97b8effc2743be5fa2e7cef3
                      </Grid>
              ))}
            </Grid>
        )
    );
}
export default Posts;