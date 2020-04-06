import React from 'react'

export default function ContacUs () {
  return (
    <div>
      <div className="bg-white w-full flex flex-col mt-3">
        <div className="w-full md:h-32 bg-gray-300 flex justify-center items-center">
          <span className="md:text-4xl text-xl pt-5 pb-5 md:pt-0 md:pb-0">CONTACT US</span>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="lg:w-10/12 md:w-full flex md:flex-row flex-col md:p-2 lg:p-0">

            <div className="h-full md:w-4/12 w-full flex flex-col pt-5 md:pr-5 p-5 md:pt-5">
              <div className="h-12 w-full flex flex-col items-center">
                <span className="text-xl">Leave us a Message</span>
              </div>

              <div className="w-full h-full flex flex-col">
                <span className="text-sm">We are here to answer any Quistion you may have to company Pvt ltd.</span>
                <span className="text-sm">To contact Via email,complite the fields below...</span>
                <span className="text-md mt-5">Name:</span>
                <input style={{border:'none', borderBottom:'1px solid black'}} className="w-full h-8"></input>
                <span className="text-md mt-3">Phone Number:</span>
                <input style={{border:'none', borderBottom:'1px solid black'}} className="w-full h-8"></input>
                <span className="text-md mt-3">Email:</span>
                <input style={{border:'none', borderBottom:'1px solid black'}} className="w-full h-8"></input>
                <span className="text-md mt-3">Message:</span>
                <textarea style={{border:'none', borderBottom:'1px solid black'}} className="w-full h-12"></textarea>
                <button className="w-24 mt-3 h-8 ml-auto border border-black hover:border-blue-600 hover:text-blue-600 ">Submit</button>
              </div>
            </div>

            <div className="h-full md:w-4/12 w-full flex flex-col pt-5 pr-5 pb-5 md:pr-5 p-5 md:pt-5">
              <span className="text-xl"><b>NAME OFTHECOMPANY</b></span>
              {[1,2,3].map((i) => <span key={i} className="text-sm">ADDRESS</span>)}
              <span className="text-sm mt-5">Email: contact@sample.com</span>
              <span className="text-sm">Phone: 960 1234567 / 960 1234567</span>
              <span className="text-sm">Mobile: 960 1234567</span>
              <div className="h-12 w-full mt-3 flex justify-center items-center">
                <span className="h-8 w-8 rounded-full mr-1 cursor-pointer">
                  <img src="https://img.icons8.com/ios/24/000000/whatsapp.png"/>
                </span>
                <span className="h-8 w-8 rounded-full mr-1 cursor-pointer">
                  <img src="https://img.icons8.com/ios-glyphs/24/000000/telegram-app.png"/>
                </span>
                <span className="h-8 w-8 rounded-full mr-1 cursor-pointer">
                  <img src="https://img.icons8.com/ios/24/000000/ringer-volume.png"/>
                </span>
                <span className="h-8 w-8 rounded-full cursor-pointer">
                  <img src="https://img.icons8.com/ios/24/000000/facebook-new.png"/>
                </span>
              </div>
              <div className="h-32 w-full mt-3">Google map location</div>
            </div>

            <div className="h-full md:w-4/12 w-full flex flex-col pt-5 pr-5 pb-5 md:pr-5 p-5 md:pt-5">
              <span className="text-xl">Our Office Operational Hours</span>
              <div className="flex mt-2">
                <span className="text-sm ">Saturday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Sunday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Monday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Tuesday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Wednessday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Thursday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Friday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="h-32 w-full bg-gray-500 mt-8">image</div>
            </div>

          </div>
        </div>

        <div className=" w-full bg-gray-500 flex justify-center items-center flex-col">
          <div className="md:w-10/12 w-full flex md:flex-row flex-col pt-3 pb-3 md:justify-between p-5 md:p-0">

            <div className="h-full md:w-3/12 w-full flex flex-col">
              <span className="text-xl md:mt-3 mb-3">Text</span>
              <div className="flex flex-col p-5 bg-white rounded shadow-lg">
                <span className="text-md"><b>CompanySdn Bhd</b></span>
                {[4,5,6].map((i) => <span key={i} className="text-sm">text</span>)}
              </div>
            </div>

            <div className="h-full md:w-3/12 w-full flex flex-col mt-2 md:mt-0">
              <span className="text-xl md:mt-3 mb-3">Text</span>
              <div className="flex flex-col bg-white p-5 rounded shadow-lg">
                <span className="text-md"><b>CompanySdn Bhd</b></span>
                {[1,2,3].map((i) => <span key={i} className="text-sm">text</span>)}
              </div>
            </div>

            <div className="h-full md:w-3/12 w-full flex flex-col mt-2 md:mt-0">
              <span className="text-xl md:mt-3 mb-3">Text</span>
              <div className="flex flex-col bg-white p-5 rounded shadow-lg">
                <span className="text-md"><b>CompanySdn Bhd</b></span>
                {[1,2,3].map((i) => <span key={i} className="text-sm">text</span>)}
              </div>
            </div>
          </div>

          <span className="md:text-xl text-lg">MORE</span>

        </div>
      </div>
    </div>
  )
}