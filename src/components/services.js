import React,{useState} from 'react'
import '../App.css'
import ItemsCarousel from 'react-items-carousel';

export default function Services () {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40; 
  return (
    <div>
      <div className="bg-white flex flex-col items-center ">

        <div  className="w-full bg-gray-300 flex flex-col items-center">
          <span className="md:text-4xl text-xl mt-3 mb-3">OUR SERVICES</span>
          <div className="h-48 w-11/12 ">
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={3}
              gutter={20}
              leftChevron={<button>{'<'}</button>}
              rightChevron={<button>{'>'}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <img className="services-carousel" src={require('../../src/assets/images/pic1.png')} />
              <img className="services-carousel" src={require('../../src/assets/images/pic1.png')} />
              <img className="services-carousel" src={require('../../src/assets/images/pic1.png')} />
              <img className="services-carousel" src={require('../../src/assets/images/pic1.png')} />
            </ItemsCarousel>
          </div>
        </div>

        <div className="relative w-10/12 bg-white flex md:flex-row flex-col">
          <div className=" h-full pt-10 pb-10 md:w-7/12 w-full bg-white">
            <span className="lg:text-3xl md:text-2xl"><b>Why Customers Choose Us</b></span><br></br><br></br>
            <span className="lg:text-3xl md:text-2xl"><b>Reliable andFast delivery</b></span><br></br>
            <span className="lg:text-3xl md:text-2xl"><b>24/7Support</b></span><br></br>
            <span className="lg:text-3xl md:text-2xl"><b>Well recognizedby the Maldives</b></span><br></br><br></br>
            <span className="md:text-xl text-base">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</span>
          </div>

          <div className="bg-indigo-800 md:w-5/12 w-full lg:pr-10 lg:pl-10 pl-2 pr-2 pt-2 md:pt-0  flex flex-col req-quote">

            <span className="md:text-3xl text-xl mb-8 md:mt-3 text-white">Request a Quote</span>
            <div className="h-8 w-12/12 bg-white mb-3 flex">
              <span className="text-sm mt-1 ml-2">Name:</span>
              <input className="w-10/12 ml-2"></input>
            </div>
            <div className="h-8 w-12/12 bg-white mb-3 flex">
              <span className="text-sm mt-1 ml-2">Email:</span>
              <input className="w-11/12 ml-2"></input>
            </div>

            <div className="h-8 w-12/12 bg-white mb-3 flex">
              <span className="text-sm mt-1 ml-2">Contact Number: </span>
              <input className="ml-1 contact-number"></input>
            </div>

            <div className="h-8 w-12/12 bg-white mb-3 flex">
              <div className="w-7/12 bg-white flex">
                <span className="text-sm mt-1 ml-2">Container Size: </span>
                <input className="w-10 ml-2 "></input>
              </div>

              <div className="w-5/12 bg-white ml-auto flex">
                <span className="text-sm mt-1 ml-2">Type: </span>
                <input className="w-8/12 ml-2"></input>
              </div>
            </div>

            <div className="h-8 w-6/12 bg-white mb-3 flex">
              <span className="text-sm mt-1 ml-2">Cargo Type: </span>
              <input className="w-16 ml-1"></input>
            </div>

            <div className="h-56 w-12/12 bg-white mb-3 flex flex-col">
              <span className="text-sm mt-1 ml-2">Your Message: </span>
              <textarea className="w-12/12 ml-2 mr-2 h-48"></textarea>
            </div>

            <div className="h-8 w-12/12 bg-indigo-800 mb-3 flex justify-center items-center">
              <button className="w-40 h-full bg-white hover:bg-indigo-800 hover:text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}