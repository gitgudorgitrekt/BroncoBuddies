import store from '../../store.js'
import React from 'react'
import { AppBar, Button, Toolbar, Typography, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './styles'
import buddies from '../../images/group-android-chrome-512x512.png'

const Navbar = () => {
    const classes = useStyles();
    const user = null;
    console.log(store.getState())
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Bronco Buddies</Typography>
                <img className={classes.image} src={buddies} alt="icon" height="50" />
            </div>
            <Toolbar className={classes.toolbar}>
                {window.localStorage.getItem('LOGGEDIN')=='true' ?  (
                    <div className={classes.profile}>
                        <Avatar className={classes.yellow}  src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png">BOB</Avatar>
                        <Typography className={classes.userName} variant="h6">{window.localStorage.getItem('firstname')}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/login" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar
