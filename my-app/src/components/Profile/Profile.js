import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import useStyles from './styles'
const Auth = () => {
    const firstNameRef = React.createRef();
    const lastNameRef = React.createRef();
    const discordRef = React.createRef();
    const aboutMeRef = React.createRef();
    const doSave = async () => {
        console.log("Saving profile")
        const firstname = firstNameRef.current.value
        const lastname = lastNameRef.current.value
        const discord = discordRef.current.value
        const aboutMe = aboutMeRef.current.value

        try{
            const data = {firstname, lastname, discord, aboutMe}
            const response = await window.fetch('https://broncobuddies.herokuapp.com/user/profile', {
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
            window.alert("Profile update saved! :)")
          }
          else{
              window.alert("Profile update failed!")
          }
        }catch(err){
            console.log(err)
        }
    }
    const state = null;
    const classes = useStyles();
    return (
        <div>
            <h1 >Your Profile</h1>
            <div>
                <Box sx={{ width: 1000, height: 800, background: 'white' }} className={classes.ProfileBox}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="First name" variant="standard" inputRef={firstNameRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Last name" variant="standard" inputRef={lastNameRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Discord Tag" variant="standard" inputRef={discordRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField id="outlined-multiline-flexible" label="About Me" multiline maxRows={4} inputRef={aboutMeRef}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Button variant="contained" onClick={doSave}>Save Profile</Button>
                        </FormControl>
                </Box>
            </div>
        </div>
    )
}

export default Auth