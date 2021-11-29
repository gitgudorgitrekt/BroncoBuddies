import React from 'react'
import { AppBar, Button, Toolbar, Container} from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './barstyles'

const Bar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Toolbar className={classes.toolbar} >
                <Button component={Link} to="/buddyfilter" variant="contained" color="primary">Buddy Filter</Button>
                <Button component={Link} to="/register" variant="contained" color="primary">Register</Button>
                <Button component={Link} to="/about" variant="contained" color="primary">About Us</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Bar
