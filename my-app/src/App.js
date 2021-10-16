import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, ExpansionPanelActions} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'
//import name from './images/name.png';

// import Enzyme, { shallow } from 'enzyme';
// describe('Form', ()=>{
//     it('', ()=>{
//         const wrapper = shallow(<Form>Word</Form>);
//         expect(Form).toHaveLength(1);

//     })
// });

const App = () => {
    const classes = useStyles();
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography
                    className={classes.heading} variant="h2" align="center">
                        Bronco Buddies
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space between" alignItems="strech" spacing={3}>
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