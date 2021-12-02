import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import useStyles from './styles'
import { URL } from '../../constants/urls';
const Auth = () => {
    var firstname = "";
    var lastname = "";
    var discord = "";
    var aboutme = "";
    var update = false;
    const firstNameRef = React.createRef();
    const lastNameRef = React.createRef();
    const discordRef = React.createRef();
    const aboutMeRef = React.createRef();
    const doSave = async () => {
        console.log("Saving profile")
        firstname = firstNameRef.current.value
        lastname = lastNameRef.current.value
        discord = discordRef.current.value
        aboutme = aboutMeRef.current.value
        update = true;
        try{
            const data = {firstname, lastname, discord, aboutme, update}
            const response = await window.fetch(URL + '/user/profile', {
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

          if(Jason.success === true){
            window.localStorage.setItem('firstname', firstname)
            window.localStorage.setItem('lastname', lastname)
            window.localStorage.setItem('discordtag', discord)
            window.localStorage.setItem('aboutme', aboutme)
            window.alert("Profile update saved! :)")
          }
          else{
              window.alert("Profile update failed!")
          }
        }catch(err){
            console.log(err)
        }
    }
    const doLoad = async () => {
        firstname = window.localStorage.getItem('firstname')
        lastname = window.localStorage.getItem('lastname')
        update = false;
        const data = {firstname, lastname, discord, aboutme, update}
        try{
            const response = await window.fetch(URL + '/user/profile', {
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
          if(Jason.success === true){
            window.localStorage.setItem('discordtag', Jason.discord)
            window.localStorage.setItem('aboutme', Jason.aboutme)
            window.alert("Profile Loaded :)")
          }
          else{
              window.alert("Profile Load failed!")
          }
        }catch(err){
            console.log(err)
        }
    }
    if(window.localStorage.getItem('LOGGEDIN')){
        console.log("LOGGED IN");
        doLoad();
        discord = window.localStorage.getItem('discordtag') 
        aboutme = window.localStorage.getItem('aboutme') 
    }
    const state = null;
    const classes = useStyles();
    return (
        <div>
            <h1 >Your Profile</h1>
            <div>
                <Box sx={{ width: 1000, height: 800, background: 'white' }} className={classes.ProfileBox}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="First name" variant="standard" inputRef={firstNameRef} defaultValue={firstname}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Last name" variant="standard" inputRef={lastNameRef} defaultValue={lastname}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField id="standard-basic" label="Discord Tag" variant="standard" inputRef={discordRef} defaultValue={discord}/>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField id="outlined-multiline-flexible" label="About Me" multiline maxRows={4} inputRef={aboutMeRef} defaultValue={aboutme}/>
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