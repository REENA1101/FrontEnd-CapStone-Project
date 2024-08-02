import React from 'react'
import footerLogo from "../images/footer.png"


export default function Footer() {
  return (
    <footer className="footer">
      <div className='complete'>
        <div className='footerDivOne'>
        <div className='footerDivDivOne'>
               <img src={footerLogo} alt="logoPhoto"/>
               <p className='footerImageTitle'>Little Lemon Restaurant</p>
              </div>

              <div className='footerDivDivTwo'>
                  <ul>
                     <li><h3>Site Links</h3></li>
                     <li><a>Home</a></li>
                     <li> <a>About Us</a></li>
                     <li><a>Book Your Spot Now</a></li>
                     <li><a>Contact US</a></li>
                     <li><a>Our Chicago Branch</a></li>
                  </ul>
              </div>

              <div className='footerDivDivThree'>
               <ul>
               <li> Contact Us </li>
               </ul>
              </div>

              <div className='footerDivDivFour'>
                 <text></text>
              </div>
              </div>
              <p> &copy; Little Lemon 2023</p>

              </div>

    </footer>
  )
}
