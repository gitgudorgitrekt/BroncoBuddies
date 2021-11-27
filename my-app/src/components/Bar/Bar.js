import React from 'react'
import { AppBar, Button, Toolbar, Typography, Menu, MenuItem, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './barstyles'
import buddies from '../../images/group-android-chrome-512x512.png'

const Bar = () => {
    const classes = useStyles();
    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Menu id="menu-appbar">
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/test">
                    <Typography textAlign="center">Test</Typography>
                </MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Bar
