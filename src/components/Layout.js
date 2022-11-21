//layoout allows reusing components on diffirent pages without calling them again or wrapping the entire application

//using children prop to access all other components used in the application 
//the Outlet component of react-router-dom

import React from 'react';
import Header from './Header';
import Slider from './Slider';
import { outlet } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <>
          <Slider />
          <Header />
          <main>{children}</main>
        </>
    );
}

export default Layout;