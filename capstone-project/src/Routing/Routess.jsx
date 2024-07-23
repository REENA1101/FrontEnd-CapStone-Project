import HomePage from '../component/HomePage';
import BookingPage from '../component/BookingPage';
import About from '../component/Pages/About';
import Contact from '../component/Pages/Contact';
import Menu from '../component/Pages/Menu'
import Chicago from '../component/Pages/Chicago';
import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';


export default function Routess() {
    let routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: 'bookingpage', element: <BookingPage /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'menu', element: <Menu /> },
        { path: 'chicago', element: <Chicago /> },
    ]);
    return routes;
}