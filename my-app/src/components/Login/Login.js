import React from 'react'
import Dutchman from '../../images/dutchman.gif'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import useStyles from './styles'
const Auth = () => {
    const state = null;
    const classes = useStyles();
    return (
        <div>
            <center>
                <h1>Welcome Back!</h1>
            </center>
            <div>
                <Box sx={{ background: 'white' }} className={classes.LoginBox}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Username" variant="standard" />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Password" variant="standard" />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Button variant="contained">Sign In</Button>
                        </FormControl>
                </Box>
                <center>
                    <div>
                        <img src={Dutchman} alt="Welcome Back" height="200" />
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Auth