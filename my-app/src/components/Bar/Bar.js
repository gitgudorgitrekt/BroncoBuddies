import React from 'react'
import { AppBar, Button, Toolbar, Typography, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './barstyles'
import buddies from '../../images/group-android-chrome-512x512.png'

const Bar = () => {
    const classes = useStyles();
    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Bronco Buddies</Typography>
                <img className={classes.image} src={buddies} alt="icon" height="50" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ?  (
                    <div className={classes.profile}>
                        <Avatar className={classes.yellow} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar
