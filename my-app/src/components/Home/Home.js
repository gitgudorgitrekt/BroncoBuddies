import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { Container, Grow, Grid } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Navbar/>
                <Grid container alignItems="stretch" spacing={2} justify="space-between">
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home
