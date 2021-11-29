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
        console.log("sending user to home page")
        const gender = genderRef.current.querySelector('input[name=gender]:checked').value
        let transfer = transferRef.current.querySelector('input[name=transfer]:checked').value
        if(transfer == "yes"){
            transfer = true;
        }
        else{
            transfer = false;
        }
        let year = yearRef.current.querySelector('input[name=year]:checked').value
        if(year == "freshman"){
            year = 0;
        }
        if(year == "sophomore"){
            year = 1;
        }
        if(year == "junior"){
            year = 2;
        }
        else{
            year = 3;
        }
        const tagsInputs = tagsRef.current.querySelectorAll('input')
        const tagsArray = []
        for(let i = 0; i < tagsInputs.length; i++){
            let input = tagsInputs[i]
            let value = input.checked
            let label = input.parentNode.parentNode.innerText
            if(value == true){
                tagsArray.push(label)
            }
        }
        console.log(tagsArray)
        //const tags = tagsRef.current.value
        const data = {gender, transfer, year, tags:tagsArray}
        console.log(data)
        try{
            const response = await window.fetch('https://broncobuddies.herokuapp.com/tags', {
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
                            <RadioGroup aria-label="gender" name="radio-buttons-group" ref={genderRef}>
                                <FormControlLabel value="female" control={<Radio name="gender" />} label="Female" />
                                <FormControlLabel value="male" control={<Radio name="gender"/>} label="Male" />
                                <FormControlLabel value="other" control={<Radio name="gender"/>} label="Other" />
                            </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Are You A Transfer?</FormLabel>
                            <RadioGroup aria-label="transfer" name="radio-buttons-group"  ref={transferRef}>
                                <FormControlLabel value="yes" control={<Radio name="transfer"/>} label="Yes" />
                                <FormControlLabel value="no" control={<Radio name="transfer"/>} label="No" />
                            </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Year</FormLabel>
                            <RadioGroup aria-label="year" name="radio-buttons-group" ref={yearRef}>
                                <FormControlLabel value="freshman" control={<Radio name="year"/>} label="Freshman" />
                                <FormControlLabel value="sophomore" control={<Radio name="year"/>} label="Sophomore" />
                                <FormControlLabel value="junior" control={<Radio name="year"/>} label="Junior" />
                                <FormControlLabel value="senior" control={<Radio name="year"/>} label="Senior" />
                            </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormGroup ref={tagsRef}>
                            <FormLabel component="legend">Interest tags</FormLabel >
                                <FormControlLabel control={<Checkbox />} label="Partying" />
                                <FormControlLabel control={<Checkbox />} label="Studying" />
                                <FormControlLabel control={<Checkbox />} label="Gaming" />
                                <FormControlLabel control={<Checkbox />} label="Movies and Shows" />
                                <FormControlLabel control={<Checkbox />} label="Relationship" />
                                <FormControlLabel control={<Checkbox />} label="Food" />
                        </FormGroup>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                            <Button variant="contained"  onClick={doTags} >Complete Profile</Button>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}

export default Tags