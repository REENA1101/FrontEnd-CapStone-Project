import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const foodImages = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
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
    <Slider {...settings}>
      {foodImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Food Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default FoodSlider;
