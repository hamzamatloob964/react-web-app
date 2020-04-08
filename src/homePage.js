import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HomePage () {

  return (
    <div className="carousel-container" className="w-full mt-0 bg-gray-600">
      <Carousel>
        <div class="relative carousel-item">
          <img style={{objectFit: 'cover', objectPosition: 'center'}} src={require('../../src/assets/images/pic1.jfif')} alt="" />
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="w-2/4 md:w-1/4 md:mr-auto md:ml-20 text-white text-left p-2 flex flex-col" style={{backgroundColor: '#434190db'}}>
              <span className="text-2xl">Text</span>
              <span className="text-xl">Text Text Text Text</span>
              <span className="">Text Text</span>
              <button className="btn bg-indigo-800 mt-3 mr-auto py-2 px-5 border-white border">search</button>
            </div>
          </div>
        </div>
        <div class="relative carousel-item">
          <img style={{objectFit: 'cover', objectPosition: 'center'}} src={require('../../src/assets/images/pic2.jpg')} alt="" />
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="w-2/4 md:w-1/4 md:mr-auto md:ml-20 text-white text-left p-2 flex flex-col" style={{backgroundColor: '#434190db'}}>
              <span className="text-2xl">Text</span>
              <span className="text-xl">Text Text Text Text</span>
              <span className="">Text Text</span>
              <button className="btn bg-indigo-800 mt-3 mr-auto py-2 px-5 border-white border">search</button>
            </div>
          </div>
        </div>
        <div class="relative carousel-item">
          <img style={{objectFit: 'cover', objectPosition: 'center'}} src={require('../../src/assets/images/pic3.jpg')} alt="" />
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="w-2/4 md:w-1/4 md:mr-auto md:ml-20 text-white text-left p-2 flex flex-col" style={{backgroundColor: '#434190db'}}>
              <span className="text-2xl">Text</span>
              <span className="text-xl">Text Text Text Text</span>
              <span className="">Text Text</span>
              <button className="btn bg-indigo-800 mt-3 mr-auto py-2 px-5 border-white border">search</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>      
  )
}