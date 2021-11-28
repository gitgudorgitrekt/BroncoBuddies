import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
const Auth = () => {
    const state = null;

    return (
        <div>
            <h1>Create An Account Here</h1>
            <div>
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
                    <TextField id="standard-basic" label="Password" variant="standard" />
                </FormControl>
            </div>
        </div>
    )
}

export default Auth