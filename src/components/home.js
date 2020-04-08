import React from 'react';
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
import '../App.css'

export default function WebApp () {

  return(
    <div >

      {/* header section */}
      <div className="header">
        <Header/>
      </div>

      {/* hamburger-menu */}
      <div className="hamburger-menu">
        <HamburgerMenu/>
      </div>

      {/* main-container */}
      <div className="main-container" >

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

