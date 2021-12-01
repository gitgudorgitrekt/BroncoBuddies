import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './barstyles'

const Bar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Toolbar className={classes.toolbar}>
                <Button className={classes.buttons} component={Link} to="/buddyfilter" variant="contained" color="primary">Buddy Filter</Button>
                <Button className={classes.buttons} component={Link} to="/register" variant="contained" color="primary">Register</Button>
                <Button className={classes.buttons} component={Link} to="/about" variant="contained" color="primary">About Us</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Bar
