import BookingPage from '../component/BookingPage';
import About from '../component/Pages/About';
import Contact from '../component/Pages/Contact';
import Menu from '../component/Pages/BookingForm'
import Chicago from '../component/Pages/Chicago';
import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LandingPage from '../component/LandingPage';


export default function Routess() {
    let routes = useRoutes([
        { path: '/', element: <LandingPage /> },
        { path: 'bookingpage', element: <BookingPage /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'menu', element: <Menu /> },
        { path: 'chicago', element: <Chicago /> },
    ]);
    return routes;
}