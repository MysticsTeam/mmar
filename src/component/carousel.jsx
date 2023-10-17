import React from 'react';
import { Carousel } from 'antd';

export default function CarouselComponent() {
  const carouselStyle = {
    textAlign: 'center',
    width: '90%',
    backgroundColor: 'lightblue',
    height: '350px',
    margin: '25px auto',
    display: 'flex',
    alignItems: 'center', // Để căn giữa theo chiều dọc
  };

  return (
    <Carousel autoplay style={carouselStyle}>
      <div>
        <h3>3</h3>
        <h3>8</h3>
      </div>
      <div>
        <h2>2</h2>
      </div>
      <div>
        <h1>1</h1>
      </div>
    </Carousel>
  );
}