import React, { useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container >
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography
                    className={classes.heading} variant="h2" align="center">
                        Bronco Buddies
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="flex-start" alignItems="stretch" spacing={2} justify="space-between">
                        <Grid item xs={12} sm={8} md={6}>
                            <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Form currentId={currentId}/>
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;