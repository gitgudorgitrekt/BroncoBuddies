import Button from 'react-bootstrap/Button';
import React from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
//import name from './images/name.png';

const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography
                    variant="h2"
                    align="center">
                        Bronco Buddies
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space between"
                    alignItems="strech" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                            </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form />
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;