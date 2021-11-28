import React from 'react'
import { Typography, Paper } from '@material-ui/core'; 
import useStyles from './styles';

const About = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={2}>
            <Typography className={classes.heading} variant="h6" align="left">About us</Typography>
           <Typography variant="body1"> This site was designed to help students attending Cal Poly Pomona meet other students on campus
           and set up meet ups on campus.</Typography>
        </Paper>
    )
}

export default About