import React from 'react'

export default function Footer () {
  return (
    <div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="bg-indigo-800 w-full flex md:flex-row flex-col md:justify-between pt-10 pb-10 items-center">
          <div className="h-56 md:w-auto w-6/12 text-white md:ml-24 flex flex-col">
            <span className="text-4xl mb-3 text-black"><b>LOGO</b></span>
            <span className="text-sm">address</span>
            <span className="text-sm">address</span>
            <span className="text-sm mb-5">address</span>
            <span className="text-sm ">Email: contact@sample.com</span>
            <span className="text-sm ">Phone: 960 1234567</span>
            <span className="text-sm">Mobile: 960 1234567</span>
            
          </div>
          <div className="h-56 md:w-auto w-6/12 text-white flex flex-col pt-8">
            <span className="text-sm">About</span>
            <span className="text-sm">Services</span>
            <span className="text-sm mb-10">vessel schedule</span>
            <span className="text-sm "><b>Online</b></span>
            <span className="text-sm ">Request a quote</span>
            <span className="text-sm">Booking</span>
            <span className="text-sm">Download</span>
            
          </div>
          <div className="h-56 md:w-auto w-6/12 text-white flex flex-col pt-8">
            <span className="text-sm">External important links</span>
            <span className="text-sm">Text</span>
            <span className="text-sm mb-5">Text</span>
            
          </div>
          <div className="h-56 md:w-3/12 w-6/12 flex flex-col pt-12 md:mr-10">
            <div className="w-full bg-gray-500 h-32">image</div>
            <div className="w-full h-12 flex justify-center items-center mt-2">
              <span className="h-8 w-8 rounded-full mr-2">
                <img src="https://img.icons8.com/ios/48/000000/whatsapp.png"/>
              </span>
              <span className="h-8 w-8 rounded-full mr-2">
                <img src="https://img.icons8.com/ios-glyphs/48/000000/telegram-app.png"/>
              </span>
              <span className="h-8 w-8 rounded-full mr-2">
                <img src="https://img.icons8.com/ios/48/000000/ringer-volume.png"/>
              </span>
              <span className="h-8 w-8 rounded-full mr-2">
                <img src="https://img.icons8.com/ios/48/000000/facebook-new.png"/>
              </span>
            </div>
          </div>  
        </div>

        <span className="text-xs">Copyright © 2020 Company Pvt. Ltd. All rights reserved</span>
      </div>
    </div>
  )
}