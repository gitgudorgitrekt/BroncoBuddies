import React from 'react'
import { AppBar, Button, Toolbar, Container} from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './barstyles'

const Bar = () => {
    
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Toolbar>
                <Button component={Link} to="/buddyfilter" variant="contained" color="primary" style={{width: '200px', 'margin-right':'10px'}}>Buddy Filter</Button>
                <Button component={Link} to="/register" variant="contained" color="primary" style={{width: '200px', 'margin-right':'10px'}}>Register</Button>
                <Button component={Link} to="/about" variant="contained" color="primary" style={{width: '200px', 'margin-right':'10px'}}>About Us</Button>
                <Button component={Link} to="/profile" variant="contained" color="primary" style={{width: '200px', 'margin-right':'10px'}}>Profile</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Bar
