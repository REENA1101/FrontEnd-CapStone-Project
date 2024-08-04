import React from 'react'
import { Link } from 'react-router-dom'

export default function Chicago() {
  return (
    <div style={{marginTop:"160px", textAlign:"center", height:"300px"}}>
      <h1>Little Lemon Chicago Branch</h1>
      <h1 style={{marginTop:"20px"}}>Page Under Development</h1>
      <div>
            <Link to="/">
                  <button className="main2button" >Switch to Home Page</button>
            </Link>
        </div>
      </div>
  )
}
