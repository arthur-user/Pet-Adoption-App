import React from 'react';
import Navigation from '../navigation';
// import Outlet
import { Outlet } from 'react-router-dom';
import Header from "../Header";

const Root = () => {
    return (
        <>
            <Header />  
            <Navigation/>
            <Outlet />
        </>
    );
};

export default Root;