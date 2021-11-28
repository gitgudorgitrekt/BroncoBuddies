import React from 'react';
import { Container} from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import About from './components/About/About';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/auth" exact element={<Auth />}/>
                    <Route path="/about" exact element={<About />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;