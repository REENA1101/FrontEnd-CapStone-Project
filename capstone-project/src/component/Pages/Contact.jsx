import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div style={{marginTop:"160px", textAlign:"center", height:"300px"}}>
      <h1>Contact Us</h1>
      <h1 style={{marginTop:"14px"}}>Page Under Development</h1>
      <div>
            <Link to="/">
                  <button className="main2button" >Switch to Home Page</button>
            </Link>
        </div>
      </div>
  )
}