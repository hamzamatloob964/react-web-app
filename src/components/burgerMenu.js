import React, {useEffect, useRef, useState } from 'react';
import Sidebar from "react-sidebar";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function SidebarContent(onSetSidebarOpen) {
  return (
    <div style={{height: '100vh'}} className={`md:h-12 w-full bg-indigo-800 flex py-5 md:py-0 justify-center burger-menu md:hidden`}>
      <div className="md:w-10/12 text-white flex md:flex-row flex-col items-center md:mt-0">
        <Link onSetActive={() => onSetSidebarOpen(false)} className="md:mr-8 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="home" activeClass="menu-active">
          <span className="menu-item-text">
            HOME
          </span>
          <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/home-outline.png")} alt="" />
        </Link>
        <Link onSetActive={() => onSetSidebarOpen(false)} className="md:mr-8 mt-2 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="aboutUs" activeClass="menu-active">
          <span className="menu-item-text">
            ABOUT US
          </span>
          <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/information-outline.png")} alt="" />
        </Link>
        <Link onSetActive={() => onSetSidebarOpen(false)} className="md:mr-8 mt-2 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="services" activeClass="menu-active">
          <span className="menu-item-text">
            SERVICES
          </span>
          <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/face-agent.png")} alt="" />
        </Link>
        <Link onSetActive={() => onSetSidebarOpen(false)} className="md:mr-16 mt-2 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="schedule" activeClass="menu-active">
          <span className="menu-item-text">
          SCHEDULE
          </span>
          <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/calendar-arrow-right.png")} alt="" />
        </Link>
        <Link onSetActive={() => onSetSidebarOpen(false)} className="mt-2 md:mt-0 cursor-pointer menu-item" spy={true} smooth={true} to="contactUs" activeClass="menu-active">
          <span className="menu-item-text">
            CONTACT US
          </span>
          <img className="sm:invisible md:visible menu-item-img" src={require("../assets/images/card-account-phone.png")} alt="" />
        </Link>
        <Link onSetActive={() => onSetSidebarOpen(false)} className="md:ml-auto mt-2 md:mt-0 cursor-pointer" spy={true} smooth={true} to="services" activeClass="menu-active">
          <span offset={100}>
            QUOTE <span className="ml-1">BOOKING</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);

  const onSetSidebarOpen = (value) => {
    setIsOpen(value);
  }

  return (
    <>
      <button className="md:hidden" style={{zIndex: 2}} onClick={() => onSetSidebarOpen(true)}>
        <div>
          <svg style={{width:'40px',height:'40px'}} viewBox="0 0 24 24">
            <path fill="#434190" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </div>
      </button>
      <Sidebar
        rootClassName="md:hidden"
        sidebar={SidebarContent(onSetSidebarOpen)}
        open={isOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { width: '75%', position: 'fixed', top: 0 } }}
      >
      </Sidebar>
    </>
  )

}