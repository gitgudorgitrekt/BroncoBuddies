import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid, ExpansionPanelActions} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'

import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';


//import name from './images/name.png';

// import Enzyme, { shallow } from 'enzyme';
// describe('Form', ()=>{
//     it('', ()=>{
//         const wrapper = shallow(<Form>Word</Form>);
//         expect(Form).toHaveLength(1);

//     })
// });

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch]);
    return (
        
        <Container maxidth="lg">
            <Router>
                <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                    </Switch>
            </Router>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography
                    className={classes.heading} variant="h2" align="center">
                        Bronco Buddies
                </Typography>
                <div className='App'>
                    <Navbar />
                </div>
            </AppBar>
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
        </Container>
    );
}

export default App;