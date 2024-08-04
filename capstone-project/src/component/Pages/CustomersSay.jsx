import React from 'react';
import cust1 from "../../images/cust1.jpg";
import cust2 from "../../images/cust2.jpg";
import cust3 from "../../images/cust3.jpg";
// import './styles.css';

export default function CustomersSay() {
  const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < rating ? "gold" : "gray"}
        width="18px"
        height="18px"
        display="flex"
        justify-content="center"
        margin="-30px"
      >
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"/>
      </svg>
    );
  }
  return stars;
};

  return (
    <>
    <div className="customerSay">
    <h1 style={{color:'white', marginTop:"30px"}}>Our Visitor's Review</h1>
      <div className='custItem'>
        <img src={cust1} alt="customer1"/>
        <h3>Marco Fernandez
        <div className="stars">{renderStars(5)}</div>
        </h3>
        <h4>The food is exquisite, different wonderful cuisines at one place</h4>

      </div>
      <div className='custItem'>
        <img src={cust2} alt="customer2"/>
        <h3>Rob Williams
        <div className="stars">{renderStars(4)}</div>
        </h3>
        <h4>The Online Booking system is very efficient.</h4>

      </div>
      <div className='custItem'>
        <img src={cust3} alt="customer3"/>
        <h3>Lisa Hopkins
        <div className="stars">{renderStars(5)}</div>
        </h3>
        <h4>Good Food Good vibe a must visit recommmended.</h4>

      </div>
    </div>
    </>
  );
}

