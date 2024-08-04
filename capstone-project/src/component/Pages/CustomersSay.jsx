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
        width="20px"
        height="20px"

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
        <h4>"Little Lemon offers a delightful dining experience with its fresh and flavorful dishes.
           The lemon herb chicken was absolutely divine, bursting with vibrant citrus notes. The cozy
            ambiance and attentive service make it a must-visit spot!"</h4>

      </div>
      <div className='custItem'>
        <img src={cust2} alt="customer2" />
        <h3>Rob Williams
        <div className="stars">{renderStars(4)}</div>
        </h3>
        <h4>"A hidden gem in the heart of the city! The seafood pasta was a standout,
           perfectly cooked and seasoned. Great atmosphere and friendly staff, though 
           the wait time was a bit long. Still the taste was exquisite an amazing experience "</h4>

      </div>
      <div className='custItem'>
        <img src={cust3} alt="customer3"/>
        <h3>Lisa Hopkins
        <div className="stars">{renderStars(5)}</div>
        </h3>
        <h4>"Good Food Good Vibe, a must visit, highly recommended. The grilled salmon with 
          lemon butter sauce was simply outstanding. Friendly staff and warm atmosphere
           make it a great spot for any occasion! Totally Love it, would be here next time soon"</h4>

      </div>
    </div>
    </>
  );
}

