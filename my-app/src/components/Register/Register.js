import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@material-ui/core'
const Auth = () => {
    const state = null;

    return (
        <div>
            <h1>Create An Account Here</h1>
            <div>
                <Box>
                    <TextField id="standard-basic" label="First name" variant="standard" />
                    <TextField id="standard-basic" label="Last name" variant="standard" />
                    <TextField id="standard-basic" label="Email" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                </Box>
            </div>
        </div>
    )
}

export default Auth