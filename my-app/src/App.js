<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
=======
import React, { useState, useEffect} from 'react';
>>>>>>> e7d93eb481be06ad97b8effc2743be5fa2e7cef3
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
//import name from './images/name.png';

// import Enzyme, { shallow } from 'enzyme';
// describe('Form', ()=>{
//     it('', ()=>{
//         const wrapper = shallow(<Form>Word</Form>);
//         expect(Form).toHaveLength(1);

//     })
// });

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

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
<<<<<<< HEAD
                    <Grid container justify="space between" alignItems="strech" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
=======
                    <Grid container  direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} sm={8} md={6}>
                            <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Form currentId={currentId}/>
>>>>>>> e7d93eb481be06ad97b8effc2743be5fa2e7cef3
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;