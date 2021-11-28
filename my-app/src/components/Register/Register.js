import React from 'react'
import Spongebob from '../../images/spongebob-welcome.gif'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import useStyles from './styles'
const Auth = () => {
    const doRegister = () => {
        console.log("sending user to tags page")
        window.location.href = '/tags'
    }
    
    const state = null;
    const classes = useStyles();
    return (
        <div>
            <h1>Create An Account Here</h1>
            <div>
                <Box sx={{ background: 'white' }} className={classes.LoginBox}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="First name" variant="standard" />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Last name" variant="standard" />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Email" variant="standard" />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Username" variant="standard" />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Password" variant="standard" />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Button variant="contained" 
                                onClick={doRegister}
                            >Register Account</Button>
                        </FormControl>
                </Box>
                <center>
                    <div>
                        <img src={Spongebob} alt="Welcome to the Club Squidward" height="600" />
                    </div>
                </center>
            </div>
        </div>
    )
}


export default Auth