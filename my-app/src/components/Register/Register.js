import store from '../../store.js'
import React from 'react'
import Spongebob from '../../images/spongebob-welcome.gif'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import useStyles from './styles'
const Auth = () => {
    const firstNameRef = React.createRef();
    const lastNameRef = React.createRef();
    const emailRef = React.createRef();
    const usernameRef = React.createRef();
    const passwordRef = React.createRef();
    const doRegister = async () => {
        console.log("sending user to tags page")
        const firstname = firstNameRef.current.value
        const lastname = lastNameRef.current.value
        const email = emailRef.current.value
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        const data = {firstname, lastname, email, username, password}
        try{
            const response = await window.fetch('https://broncobuddies.herokuapp.com/auth/register', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
          });
          console.log(response)
          const Jason = await response.json();

          if(Jason.status == 'ok'){
            window.localStorage.setItem('LOGGEDIN', 'true')
            window.location.href = '/tags'
          }
          else{
              window.alert("Account creation failed!")
          }
        }catch(err){
            console.log(err)
        }
    }
    
    const state = null;
    const classes = useStyles();
    return (
        <div>
            <h1>Create An Account Here</h1>
            <div>
                <Box sx={{ background: 'white' }} className={classes.LoginBox}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="First name" variant="standard" inputRef={firstNameRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Last name" variant="standard" inputRef={lastNameRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Email" variant="standard" inputRef={emailRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Username" variant="standard" inputRef={usernameRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Password" variant="standard" inputRef={passwordRef}/>
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