import React from 'react';
import cust1 from "../../images/cust1.jpg";
import cust2 from "../../images/cust2.jpg";
import cust3 from "../../images/cust3.jpg";
// import './styles.css';

export default function CustomersSay() {
  return (
    <>
    
    <div className="customerSay">
    <h1 style={{color:'white'}}>Our Visitors Review</h1>
      <div className='custItem'>
        <img src={cust1} alt="customer1"/>
        <h3>Marco</h3>
        <h4>The food is exquisite, different wonderful cuisines at one place</h4>
      </div>
      <div className='custItem'>
        <img src={cust2} alt="customer2"/>
        <h3>Rob</h3>
        <h4>The Online Booking system is very efficient.</h4>
      </div>
      <div className='custItem'>
        <img src={cust3} alt="customer3"/>
        <h3>Shina</h3>
        <h4>Good Food Good vibe a must visit recommmended.</h4>
      </div>
    </div>
    </>
  );
}

