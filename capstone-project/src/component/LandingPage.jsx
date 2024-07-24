import React from 'react'
import main1 from '../images/main1.png';
import main2 from "../images/main2.png";
import FoodSlider from './FunctionalComps/FoodSlider';

export default function LandingPage() {
  return (
    <div className="landingpage">

        <FoodSlider/>

        <img src={main1} alt="Main1" />
          <div className='main2'>
            <h1>LITTLE </h1>
            <h1>LEMON RESTAURANT</h1>
          </div>

        <img src={main2} alt="Main2"/>
    </div>
  )
}
