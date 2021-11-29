import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import useStyles from './styles'
const Tags = () => {
    const genderRef = React.createRef();
    const transferRef = React.createRef();
    const yearRef = React.createRef();
    const tagsRef = React.createRef();

    const doTags = async () => {
        console.log("sending user to tags page")
        const gender = genderRef.current.value
        const transfer = transferRef.current.value
        const year = yearRef.current.value
        const tags = tagsRef.current.value
        const data = {gender, transfer, year, tags}
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
            window.location.href = '/home'
          }
          else{
              window.alert("Issue with adding information to profile!")
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
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Are You A Transfer?</FormLabel>
                            <RadioGroup aria-label="transfer" name="radio-buttons-group">
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="no" />
                            </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Year</FormLabel>
                            <RadioGroup aria-label="Year" name="radio-buttons-group">
                                <FormControlLabel value="freshman" control={<Radio />} label="Freshman" />
                                <FormControlLabel value="sophomore" control={<Radio />} label="Sophomore" />
                                <FormControlLabel value="junior" control={<Radio />} label="Junior" />
                                <FormControlLabel value="senior" control={<Radio />} label="Senior" />
                            </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormGroup>
                            <FormLabel component="legend">Interest tags</FormLabel>
                                <FormControlLabel control={<Checkbox />} label="Partying" />
                                <FormControlLabel control={<Checkbox />} label="Studying" />
                                <FormControlLabel control={<Checkbox />} label="Gaming" />
                                <FormControlLabel control={<Checkbox />} label="Movies and Shows" />
                                <FormControlLabel control={<Checkbox />} label="Relationship" />
                                <FormControlLabel control={<Checkbox />} label="Food" />
                        </FormGroup>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                            <Button variant="contained">Complete Profile</Button>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}

export default Tags