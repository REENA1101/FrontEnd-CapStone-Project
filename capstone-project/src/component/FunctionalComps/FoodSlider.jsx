import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';

const foodImages = [
  {image1},
  {image2},
  {image3},
  {image4},
  {image5},
  // ... more images
];

const FoodSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} style={{marginBottom:'40px'}}>
      {foodImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Food Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default FoodSlider;
