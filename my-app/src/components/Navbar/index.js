import React from 'react'
import App from '../../App'
const index = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Bronco Buddies</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <navLink to="/about" activeStyle>
                        About
                    </navLink>
                    <navLink to="/search" activeStyle>
                        Search
                    </navLink>
                    <navLink to="/signup" activeStyle>
                        Sign Up
                    </navLink>
                    <navLink to="/chats" activeStyle>
                        Chats
                    </navLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default App;
