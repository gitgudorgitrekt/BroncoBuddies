import React from 'react'

const Auth = () => {
    const state = null;

    return (
        <div>
            <h1>Create An Account Here</h1>

            <TextField id="standard-basic" label="First name" variant="standard" />
            <TextField id="standard-basic" label="Last name" variant="standard" />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
        </div>
    )
}

export default Auth