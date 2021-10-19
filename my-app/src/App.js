import React, {useEffect} from 'react';
import { Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth } from './components/Auth/Auth';

//import name from './images/name.png';

// import Enzyme, { shallow } from 'enzyme';
// describe('Form', ()=>{
//     it('', ()=>{
//         const wrapper = shallow(<Form>Word</Form>);
//         expect(Form).toHaveLength(1);

//     })
// });

const App = () => (
    <BrowserRouter>
        <Container maxidth="lg">
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;