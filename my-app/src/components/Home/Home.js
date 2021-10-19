import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, ExpansionPanelActions} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justify="space between" alignItems="strech" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;