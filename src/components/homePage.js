import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HomePage () {

  return (
    <div style={{height:'350px'}} className="w-full mt-2 bg-gray-600">
      <Carousel>
        <div>
              <img src={require('../../src/assets/images/pic1.png')} />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={require('../../src/assets/images/pic2.png')} />
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src={require('../../src/assets/images/pic3.png')} />
              <p className="legend">Legend 3</p>
          </div>
      </Carousel>
    </div>      
  )
}