import store from '../../store.js'
import React from 'react'
import Spongebob from '../../images/spongebob-welcome.gif'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import useStyles from './styles'
const Auth = () => {
    
    const state = null;
    const classes = useStyles();
    return (
        <div>
            <h1>Your Profile</h1>
            <div>
                <Box sx={{ width: 300, height: 300, background: 'white' }} className={classes.ProfileBox}>
                        
                </Box>
            </div>
        </div>
    )
}

export default Auth