import React from 'react';
import cust1 from "../../images/cust1.jpg";
import cust2 from "../../images/cust2.jpg";
import cust3 from "../../images/cust3.jpg";
// import './styles.css';

export default function CustomersSay() {
  return (
    <div className="customerSay">
      <div className='custItem'>
        <img src={cust1} alt="customer1"/>
      </div>
      <div className='custItem'>
        <img src={cust2} alt="customer2"/>
      </div>
      <div className='custItem'>
        <img src={cust3} alt="customer3"/>
      </div>
    </div>
  );
}

