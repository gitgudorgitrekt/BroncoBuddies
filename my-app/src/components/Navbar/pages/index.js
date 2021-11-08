import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from '../../../reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../../../reducers';

import App from '../../../App';

import {
   Nav,
   NavLogo,
   NavLink,
   Bars,
   NavMenu,
   NavBtn,
   NavBtnLink,
} from "./NavbarElements";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const Navbar = () => {
   return (
       <>
          <Nav>
           <NavLogo to="/">
               Logo
           </NavLogo>
           <Bars />

           <NavMenu>
               <NavLink to="/" activeStyle>
                   Home
               </NavLink>
               <NavLink to="/about" activeStyle>
                   About
               </NavLink>
               <NavLink to="/contact" activeStyle>
                   Contact
               </NavLink>
               <NavLink to="/signin" activeStyle>
                   Sign In
               </NavLink>
               <NavBtn>
                   <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
               </NavBtn>
           </NavMenu> 
          </Nav> 
       </>
   );
};
export default Navbar;


const Home = () => {
   return (    
       <h1>Welcome to our website!</h1>
   );
 };
 
 export default Home;

ReactDOM.render(
  <Provider store={store}>

     <App />
   
  </Provider>,
   
   document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Running 'npm start' will run both the front end and back end servers at the same time