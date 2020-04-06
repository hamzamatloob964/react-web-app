import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HomePage () {

  return (
    <div style={{height:'350px'}} className="w-full mt-0 bg-gray-600">
      <Carousel>
        <div>
          <img style={{objectFit: 'cover'}} src={require('../../src/assets/images/pic1.jfif')} />
        </div>
        <div>
          <img style={{objectFit: 'cover'}} src={require('../../src/assets/images/pic2.jpg')} />
        </div>
        <div>
          <img style={{objectFit: 'cover'}} src={require('../../src/assets/images/pic3.jpg')} />
        </div>
      </Carousel>
    </div>      
  )
}