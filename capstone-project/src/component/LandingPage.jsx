import React from 'react'
import main1 from '../images/main1.png';
import main2 from "../images/main2.png";

export default function LandingPage() {
  return (
    <div className="landingpage">
        
              <div class="slider">
        <div class="slide">
          <img src="image1.jpg" alt="Food Image 1"/>
        </div>
        <div class="slide">
          <img src="image2.jpg" alt="Food Image 2"/>
        </div>
        </div>

        <img src={main1} alt="Main1" />
          <div className='main2'>
            <h1>LITTLE </h1>
            <h1>LEMON RESTAURANT</h1>
          </div>

        <img src={main2} alt="Main2"/>
    </div>
  )
}
