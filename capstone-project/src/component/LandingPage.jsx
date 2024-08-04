import React from 'react'
import main1 from '../images/main1.png';
import main2 from "../images/main2.png";
import FoodSlider from './FunctionalComps/FoodSlider';
import BackToTopButton from './FunctionalComps/BackToTopButton';
import chef from "../images/ChefPhoto.jpg"
import CustomersSay from './Pages/CustomersSay';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landingpage" style={{ marginLeft: '105px', marginRight: '40px'}}>
         <div className='main2' style={{display:"flex", backgroundColor: 'white', height: '360px', borderRadius: '8px'}}>
              <div>
                <h1 style={{fontSize:'40px', paddingTop:"20px"}}>LITTLE </h1>
                <h1 style={{fontSize:'40px'}}>LEMON RESTAURANT</h1>
                <h1 style={{fontSize:'40px'}}>NEW YORK</h1>

                <Link to="/bookingpage">
                <button className="main2button" >Reserve Your Table</button>
                </Link>
                </div>
            <div>
              <img style={{width:"420px", marginRight:"-20px", marginLeft:"120px"}} src={chef} alt="chefPhoto"/>
              </div>
          </div>


        <img style={{marginTop:"30px", height:"400px", width:"1050px",marginBottom:"40px", borderRadius:"50px"}} src={main1} alt="Main1" />

        <FoodSlider />


        <img style={{marginTop:"30px", height:"480px", width:"1050px"}} src={main2} alt="Main2"/>
        <CustomersSay/>
        <BackToTopButton/>
    </div>
  )
}
