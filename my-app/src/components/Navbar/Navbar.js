import { mergeClasses } from '@material-ui/styles';
import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import broncos from '../../images/android-chrome-192x192.png'

const Navbar = () => {
const classes = useStyles();
const user = null;

    return (
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">BroncoBuddies</Typography>
                    <img className={classes.image} src={broncos} alt="icon" height="60"></img>
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                    )}
                </Toolbar>
            </AppBar>
    )
}

export default Navbar;