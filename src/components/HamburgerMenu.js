import React from 'react';
import '../App.css'
import { slide as Menu } from 'react-burger-menu'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function HamburgerMenu () {
  return  (
    <Menu>
      <span className="menu-item">
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          HOME
        </Link>
      </span>
      <span className="menu-item">
        <Link activeClass="active" to="aboutUs" spy={true} smooth={true}>
          ABOUT US
        </Link>
      </span>
      <span className="menu-item">
        <Link activeClass="active" to="services" spy={true} smooth={true}>
          SERVICES
        </Link>
      </span>
      <span className="menu-item">
        <Link activeClass="active" to="schedule" spy={true} smooth={true}>
          SCHEDULE
        </Link>
      </span>
      <span className="menu-item">
        <Link activeClass="active" to="contactUs" spy={true} smooth={true}>
          CONTACT US
        </Link>
      </span>
      <span className="menu-item">
        <Link activeClass="active" to="services" spy={true} smooth={true}>
          QUOTE <span className="ml-1">BOOKING</span>
        </Link>
      </span>
    </Menu>
  )
}