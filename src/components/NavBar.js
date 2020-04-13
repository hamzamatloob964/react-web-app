import React, {useState} from 'react'
import '../App.css'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function NavBar () {

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  function stickyNav (data) {
    setName(data.name)
    setId('set-active')
    window.scrollTo(0,data.pixel)
  }

  return (
    <div>
      <div className="md:h-12 w-full bg-indigo-800 flex justify-center">
        <div className="md:w-10/12 text-white flex md:flex-row flex-col items-center mt-3 md:mt-0">
          <span className="md:mr-8 mt-2 md:mt-0 cursor-pointer">
          {/*  onClick={() => stickyNav({name:'home',pixel:0})} */}
            {/* <span className={(name == 'home')? id : ''}>
              HOME
            </span> */}
            <Link to="home" spy={true} smooth={true}>
              HOME
            </Link>
          </span>
          <span className="md:mr-8 mt-2 md:mt-0 cursor-pointer">
          {/*  onClick={() => stickyNav({name:'about',pixel:530})} */}
            {/* <span className={(name == 'about')? id : ''}>
              ABOUT US
            </span> */}
            {/* <a href='#aboutUs'> ABOUT US </a> */}
            <Link to="aboutUs" activeClass="active" spy={true} smooth={true}>
              ABOUT US
            </Link>
          </span>
          <span className="md:mr-8 mt-2 md:mt-0 cursor-pointer">
          {/*  onClick={() => stickyNav({name:'services',pixel:1230})} */}
            {/* <span className={(name == 'services')? id : ''}>
              SERVICES
            </span> */}
            <Link to="services" activeClass="active" spy={true} smooth={true}>
              SERVICES
            </Link>
          </span>
          <span className="md:mr-16 mt-2 md:mt-0 cursor-pointer">
          {/*  onClick={() => stickyNav({name:'schedule',pixel:2100})} */}
            {/* <span className={(name == 'schedule')? id : ''}>
              SCHEDULE
            </span> */}
            <Link to="schedule" activeClass="active" spy={true} smooth={true}>
              SCHEDULE
            </Link>
          </span>
          <span className="mt-2 md:mt-0 cursor-pointer">
          {/*  onClick={() => stickyNav({name:'contact',pixel:2870})} */}
            {/* <span className={(name == 'contact')? id : ''}>
              CONTACT US
            </span> */}
            <Link to="contactUs" activeClass="active" spy={true} smooth={true}>
              CONTACT US
            </Link>
          </span>
          <span className="md:ml-auto mt-2 md:mt-0 cursor-pointer mb-5 md:mb-0">
          {/*  onClick={() => stickyNav({name:'booking',pixel:1500})} */}
            {/* <span className={(name == 'booking')? id : ''}>
              QUOTE <span className="ml-1">BOOKING</span>
            </span> */}
            <Link to='services' activeClass="active" spy={true} smooth={true} offset={230}>
              QUOTE <span className="ml-1">BOOKING</span>
            </Link>
          </span>
            
        </div>
      </div>
    </div>
  )
}