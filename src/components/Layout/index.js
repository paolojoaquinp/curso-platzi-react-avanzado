import React from 'react';
import { GlobalStyle } from '../../styles/GlobalStyles';
import Logo from '../Logo';
import NavBar from '../NavBar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Logo />
            { children }
            <NavBar />
        </React.Fragment>
    )
};

export default Layout;