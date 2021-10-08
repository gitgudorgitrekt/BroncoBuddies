import Button from 'react-bootstrap/Button';
import React from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

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
        </Container>
    );
}

export default App;