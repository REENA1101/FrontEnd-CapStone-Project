import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image10.jpg";
import image11 from "../../images/image11.jpg";
import { position } from '@chakra-ui/react';
import './FoodSlider.css';


const foodImages = [
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const FoodSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false, // Preload all images
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Preload all images
  };

  const [isAutoplayOn, setIsAutoplayOn] = useState(true);

  // Function to toggle autoplay on/off (optional)
  const toggleAutoplay = () => {
    setIsAutoplayOn(!isAutoplayOn);
  };

  return (
    <>
      <Slider {...settings} >
        {foodImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Food Image ${index + 1}`} />
          </div>
        ))}
      </Slider>


      {/* Optional: Button to toggle autoplay (if desired)
      {isAutoplayOn && (
        <button onClick={toggleAutoplay}>Pause Autoplay</button>
      )}
      {!isAutoplayOn && (
        <button onClick={toggleAutoplay}>Resume Autoplay</button>
      )} */}
    </>
  );
};

export default FoodSlider;

