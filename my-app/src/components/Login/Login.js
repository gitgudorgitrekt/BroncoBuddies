import store from '../../store.js'
import React from 'react'
import Dutchman from '../../images/dutchman.gif'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import useStyles from './styles'
const Auth = () => {
    const usernameRef = React.createRef();
    const passwordRef = React.createRef();
    const doLogin = async () => {
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        const data = {username, password}
        try{
            const response = await window.fetch('https://broncobuddies.herokuapp.com/auth/login', {
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

          if(Jason.success == true){
            window.localStorage.setItem('LOGGEDIN', 'true')
            window.localStorage.setItem('firstname', Jason.firstname)
            window.localStorage.setItem('lastname', Jason.lastname)
            window.location.href = '/'
          }
          else{
              window.alert("Login failed!")
          }
        }catch(err){
            console.log(err)
        }
    }
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
                            <TextField id="standard-basic" label="Username" variant="standard" inputRef={usernameRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Password" variant="standard" inputRef={passwordRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Button variant="contained" onClick={doLogin}>Sign In</Button>
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