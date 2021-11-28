import React from 'react';
import { Container} from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Bar from './components/Bar/Bar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BuddyFilter from './components/BuddyFilter/BuddyFilter';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Bar />
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/buddyfilter" exact element={<BuddyFilter />}/>
                    <Route path="/login" exact element={<Login />}/>
                    <Route path="/register" exact element={<Register />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;