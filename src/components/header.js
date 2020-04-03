import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="md:h-12 h-20 flex flex-col md:flex-row bg-gray-300">
        <span className="md:ml-20 xs:ml-10 md:text-sm xs:text-xs md:mt-3 mt-5">Opening hours : saturday-sunday-8am to 5pm</span>
        <div className="flex ml-auto mt-1 md:mt-0 justify-center items-center">
          <span className="w-6 h-6 rounded-full"><img src="https://img.icons8.com/ios/24/000000/whatsapp.png"/></span>
          <span className="w-6 h-6 rounded-full"><img src="https://img.icons8.com/ios-glyphs/24/000000/telegram-app.png"/></span>
          <span className="w-6 h-6 rounded-full"><img src="https://img.icons8.com/ios/24/000000/ringer-volume.png"/></span>
          <span className="w-6 h-6 rounded-full"><img src="https://img.icons8.com/ios/24/000000/facebook-new.png"/></span>
          <button className="text-sm mr-5 md:mr-20 ml-8 flex"><img src="https://img.icons8.com/ios/24/000000/privacy.png"/>Login</button>
        </div>
      </div>

      <div className="md:h-40 lg:pr-16 md:pr-16 lg:pl-16 md:pl-8 flex md:flex-row flex-col md:justify-between items-center justify-center">
        <div className="w-64 bg-gray-500 h-24 flex justify-center items-center">
          <span className="text-4xl"><b>Logo</b></span>
        </div>

        <div className="w-6/12 md:w-auto h-20 flex mt-3 md:mt-0">
          <div className="w-20 flex justify-center items-center">
            <img src="https://img.icons8.com/ios/48/000000/pricing-structure.png"/>
          </div>
          <div className="flex flex-col items-center h-full w-auto">
            <span className="text-sm"><b>Visit Us</b></span>
            <span className="text-xs">1address</span>
            <span className="text-xs">2address</span>
            <span className="text-xs">3address</span>  
          </div>
        </div>

        <div className="h-20 w-6/12 md:w-auto flex mt-3 md:mt-0">
          <div className=" h-full w-20 flex justify-center items-center">
            <img src="https://img.icons8.com/ios/48/000000/open-envelope-stamp.png"/>
          </div>
          <div className=" flex flex-col justify-center h-full w-auto ">
            <span className="text-sm"><b>Email</b></span>
            <span className="text-xs">sample@gmail.com</span>
          </div>
        </div>

        <div className="h-20 w-6/12 md:w-auto flex mt-3 md:mt-0 mb-3 md:mb-0">
          <div className="h-full w-20 flex justify-center items-center">
            <img src="https://img.icons8.com/ios/48/000000/ringer-volume.png"/>
          </div>
          <div className="flex flex-col justify-center h-full w-auto">
            <span className="text-sm"><b>Call Us</b></span>
            <span className="text-xs">0088-988-877777</span>
          </div>
        </div>
      </div>

      <div className="md:h-12 w-full bg-indigo-800 flex justify-center">
        <div className="md:w-10/12 text-white flex md:flex-row flex-col items-center mt-3 md:mt-0">
          <span className="md:mr-8 mt-2 md:mt-0">HOME</span>
          <span className="md:mr-8 mt-2 md:mt-0">ABOUT</span>
          <span className="md:mr-8 mt-2 md:mt-0">SERVICES</span>
          <span className="md:mr-16 mt-2 md:mt-0">SCHEDULE</span>
          <span className="mt-2 md:mt-0">CONTACT US</span>
          <span className="md:ml-auto mt-2 md:mt-0">QUOTE</span>
          <span className="mt-2 md:ml-5 md:mt-0">BOOKING</span>
        </div>
      </div>
    </div>
  )
}