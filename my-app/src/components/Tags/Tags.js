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
const Auth = () => {
    const state = null;
    const classes = useStyles();
    return (
        <div>
            <h1>Create An Account Here</h1>
            <div>
                <Box sx={{ background: 'white' }} className={classes.LoginBox}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                            <Button variant="contained">Complete Profile</Button>
                    </FormControl>
                    <FormControl>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Partying" />
                            <FormControlLabel control={<Checkbox />} label="Studying" />
                            <FormControlLabel control={<Checkbox />} label="Gaming" />
                            <FormControlLabel control={<Checkbox />} label="Movies and Shows" />
                            <FormControlLabel control={<Checkbox />} label="Relationship" />
                            <FormControlLabel control={<Checkbox />} label="Food" />
                        </FormGroup>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}

export default Auth