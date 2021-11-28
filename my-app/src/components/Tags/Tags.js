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

export default Auth