import React from 'react'

export default function Navigation() {
  return (
        <nav >
            <ul >
                <li ><a href="/">Home</a></li>
                <li style={{ marginLeft: '120px'}}><a href="/about">About</a></li>
                <li style={{ marginLeft: '120px'}}><a href="/menu">Menu</a></li>
                <li style={{ marginLeft: '120px'}}><a href="/contact">Contact</a></li>
                <li style={{ marginLeft: '120px'}}><a href="/chicago">Chicago</a></li>
            </ul>
       </nav>
  )
}
