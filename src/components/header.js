import React, {useEffect, useRef, useState } from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Header() {

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  const [isSticky, setSticky] = useState(false)

  const stickyRef = useRef(null)
  const stickyContainer = useRef(null)

  const handleScroll = () => {
    let containerBottom = stickyContainer.current.getBoundingClientRect().bottom;

    stickyRef.current.getBoundingClientRect().top <= 0 && containerBottom <= 48
      ? setSticky(true)
      : setSticky(false)
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <div ref={stickyContainer} className="flex flex-col">
      <div className="md:h-12 h-20 flex flex-col md:flex-row bg-gray-300">
        <span className="md:ml-20 xs:ml-10 md:text-sm xs:text-xs md:mt-3 mt-5">Opening hours : Saturday to Sunday - 8AM to 5PM</span>
        <div className="flex ml-auto mt-2 md:mt-0 justify-center items-center">
          <span className="mr-2 w-6 h-6 rounded-full cursor-pointer">
            <img src="https://img.icons8.com/ios/24/000000/whatsapp.png" alt=""/></span>
          <span className="mr-2 w-6 h-6 rounded-full cursor-pointer">
            <img src="https://img.icons8.com/ios-glyphs/24/000000/telegram-app.png" alt=""/></span>
          <span className="mr-2 w-6 h-6 rounded-full cursor-pointer">
            <img src="https://img.icons8.com/ios/24/000000/ringer-volume.png" alt=""/></span>
          <span className="mr-2 w-6 h-6 rounded-full cursor-pointer">
            <img src="https://img.icons8.com/ios/24/000000/facebook-new.png" alt=""/></span>
          <button className="text-sm mr-5 md:mr-20 ml-8 flex">
            <img className="mr-2" src="https://img.icons8.com/ios/24/000000/privacy.png" alt=""/>
            Login</button>
        </div>
      </div>

      <div className="md:h-40 lg:pr-16 md:pr-16 lg:pl-16 md:pl-8 flex md:flex-row flex-col md:justify-between items-center justify-center">
        <div className="rounded-lg w-64 bg-gray-400 h-24 flex justify-center items-center mt-4 md:mt-0">
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

      <div style={{minHeight: '48px'}}>
        <div className={`md:h-12 w-full bg-indigo-800 flex justify-center py-5 md:py-0 ${isSticky ? 'md:fixed' : 'md:sticky'} top-0 z-50`} ref={stickyRef}>
          <div className="md:w-10/12 text-white flex md:flex-row flex-col items-center md:mt-0">
            <Link className="md:mr-8 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="home" activeClass="menu-active">
              <Link className="menu-item-text">
                HOME
              </Link>
              <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/home-outline.png")} alt="" />
            </Link>
            <Link className="md:mr-8 mt-2 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="aboutUs" activeClass="menu-active">
              <Link className="menu-item-text">
                ABOUT US
              </Link>
              <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/information-outline.png")} alt="" />
            </Link>
            <Link className="md:mr-8 mt-2 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="services" activeClass="menu-active">
              <Link className="menu-item-text">
                SERVICES
              </Link>
              <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/face-agent.png")} alt="" />
            </Link>
            <Link className="md:mr-16 mt-2 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="schedule" activeClass="menu-active">
              <Link className="menu-item-text">
              SCHEDULE
              </Link>
              <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/calendar-arrow-right.png")} alt="" />
            </Link>
            <Link className="mt-2 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="contactUs" activeClass="menu-active">
              <Link className="menu-item-text">
                CONTACT US
              </Link>
              <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/card-account-phone.png")} alt="" />
            </Link>
            <Link className="md:ml-auto mt-2 md:mt-0 cursor-pointer" spy={true} smooth={true} to="services" activeClass="menu-active">
              <Link offset={100}>
                QUOTE <span className="ml-1">BOOKING</span>
              </Link>
            </Link>
            {/* <span className="mt-2 md:ml-5 md:mt-0">BOOKING</span> */}
          </div>
        </div>
      </div>

      {/* <div className="" ref={stickyRef}>hello {isSticky + 'helo'}</div> */}
    </div>
  )
}