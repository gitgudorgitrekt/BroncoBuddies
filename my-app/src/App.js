import React from 'react';
import { Container} from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Bar from './components/Bar/Bar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BuddyFilter from './components/BuddyFilter/BuddyFilter';
import Tags from './components/Tags/Tags';
import About from './components/About/About';
import PostDetails from './components/PostDetails/PostDetails';
const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);

    return (
        <BrowserRouter>
            <Container maxwidth="xl">
                <Navbar />
                <Bar />
                <Routes>
                    <Route path="/" exact element={<Navigate to="/posts" />}/>
                    <Route path="/posts" exact element={<Home />}/>
                    <Route path="/posts/search" exact element={<Home />}/>
                    <Route path="/posts/:id" element={<PostDetails />}/>
                    <Route path="/buddyfilter" exact element={<BuddyFilter />}/>
                    <Route path="/buddyfilter/search" exact element={<BuddyFilter />}/>
                    <Route path="/login" exact element={<Login />}/>
                    <Route path="/register" exact element={!user ? <Register /> : <Navigate to="/posts" />}/>
                    <Route path="/tags" exact element={<Tags />}/>
                    <Route path="/about" exact element={<About />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;