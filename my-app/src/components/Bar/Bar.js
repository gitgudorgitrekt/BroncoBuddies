import React from 'react'
import { AppBar, Button, Toolbar, Typography, Menu, MenuItem, Box, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './barstyles'
import buddies from '../../images/group-android-chrome-512x512.png'

const Bar = () => {
    const classes = useStyles();
    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Toolbar className={classes.toolbar}>
                <Button component={Link} to="/buddyfilter" variant="contained" color="primary">Buddy Filter</Button>
                <Button component={Link} to="/register" variant="contained" color="primary">Register</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Bar
