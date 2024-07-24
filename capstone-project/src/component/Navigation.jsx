import React from 'react'
import Header from '../component/Header'

export default function Navigation() {
  return (
        <nav >
            <ul >
                <Header />
                <div class="search-container">
                  <input type="text" placeholder="Search"></input>
                  {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                </div>
                <li ><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/bookingPage">Bookings</a></li>
                <li ><a href="/contact">Contact</a></li>
                <li ><a href="/chicago">Chicago</a></li>
            </ul>
       </nav>
  )
}
