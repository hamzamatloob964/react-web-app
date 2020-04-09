import React, {useRef, useState} from 'react';
import Header from './header'
import HomePage from './homePage'
import AboutUs from './aboutUs'
import ContactUs from './contactUs'
import Footer from './footer'
import Partners from './partners'
import Schedule from './schedule'
import Services from './services'
import HamburgerMenu from './HamburgerMenu'
import MobileViewHeader from './MobileViewHeader'
import NavBar from './NavBar'
import '../App.css'

export default function WebApp () {

  var navBar = useRef()

  window.onscroll = () => {

    if (document.body.scrollTop > 215 || document.documentElement.scrollTop > 215) {
      navBar.current.classList.add("sticky")
    } else {
      navBar.current.classList.remove("sticky");
    }

  }

  return(
    <div>

      {/* header section */}
      <div className="header">
        <Header/>
      </div>

      {/* nav-bar */}
      <div className="nav-bar">
        <div ref={navBar} >
          <NavBar/>
        </div>
      </div>

      {/* hamburger-menu */}
      <div className="hamburger-menu">
        <HamburgerMenu/>
      </div>

      {/* main-container */}
      <div>

        {/* home page carousel section */}
        <div id="home">
          <div className="MobileViewHeader">
            <MobileViewHeader/>
          </div>
          <HomePage/>
        </div>

        {/* About us section */}
        <div id="aboutUs">
          <AboutUs/>
        </div>

        {/* our services section */}
        <div id="services">
          <Services/>
        </div>

        {/* schedule section */}
        <div id="schedule">
          <Schedule/>
        </div>

        {/* contact us */}
        <div id="contactUs">
          <ContactUs />
        </div>

        {/* partenars section */}
        <div id="partners">
          <Partners/>
        </div>

        {/* footer section */}
        <Footer/>
      </div>

      
    </div>
    )
  }

