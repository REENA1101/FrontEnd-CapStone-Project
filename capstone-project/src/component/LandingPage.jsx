import React from 'react'
import main1 from '../images/main1.png';
import main2 from "../images/main2.png";
import FoodSlider from './FunctionalComps/FoodSlider';
import BackToTopButton from './FunctionalComps/BackToTopButton';
import chef from "../images/ChefPhoto.jpg"
import CustomersSay from './Pages/CustomersSay';

export default function LandingPage() {
  return (
    <div className="landingpage" style={{ marginLeft: '105px', marginRight: '40px'}}>
         <div className='main2' style={{display:"flex", marginBottom:"40px",  justifyContent:"space-between", backgroundColor: 'white', height: '400px', borderRadius: '8px'}}>
              <div>
                <h1>LITTLE </h1>
                <h1>LEMON RESTAURANT</h1>
                <h1>CHICAGO</h1>
                <button style={{backgroundColor:"#353333",color:"white", padding:"8px", borderRadius:"5px", marginTop:"25px"}}>Reserve Your Table</button>
                </div>
            <div>
              <img style={{width:"400px", marginRight:"-20px"}} src={chef} alt="chefPhoto"/>
              </div>
          </div>


        <img style={{marginTop:"30px", height:"400px", width:"1050px",marginBottom:"40px"}} src={main1} alt="Main1" />

        <FoodSlider />


        <img style={{marginTop:"", height:"480px", width:"1050px"}} src={main2} alt="Main2"/>
        <CustomersSay/>
        <BackToTopButton/>
    </div>
  )
}
