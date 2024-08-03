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
              <h2 style={{fontSize:'24px', marginBottom:"10px"}}>Site Links</h2>
                  <ul style={{listStyleType: 'none'}}>
                     <li><a href="#">Home</a></li>
                     <li> <a href="#">About Us</a></li>
                     <li><a href="#">Book Your Spot Now</a></li>
                     <li><a href="#">Contact US</a></li>
                     <li><a href="#">Our Chicago Branch</a></li>
                  </ul>
              </div>

              <div className='footerDivDivFour'>
              <h2 style={{fontSize:'24px', marginBottom:"10px"}}> Our Restaurants In </h2>
              <ul style={{listStyleType: 'none'}}>
                  <li><a>Chicago</a></li>
                  <li><a>Tokyo</a></li>
                  <li><a>Canada</a></li>
                  <li><a>Paris</a></li>
                  <li><a>USA</a></li>
               </ul>
              </div>

              <div className='footerDivDivThree'>
              <h2 style={{fontSize:'24px', marginBottom:"10px"}}> Contact Us </h2>
               <ul style={{listStyleType: 'none'}}>
                  <a><li>Instagram</li></a>
                  <a><li>facebook</li></a>
                  <a><li>Youtube</li></a>
                  <a><li>Twitter</li></a>
                  <li>...</li>
               </ul>
              </div>

              </div>
              <p> &copy; Little Lemon 2024</p>

              </div>

    </footer>
  )
}
