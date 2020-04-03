import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Header from './header'
import HomePage from './homePage'
import AboutUs from './aboutUs'
import ContactUs from './contactUs'
import Footer from './footer'
import Partners from './partners'
import Schedule from './schedule'
import Services from './services'

import '../App.css'

export default function WebApp () {

  function goToContactUs () {
    console.log("function called....")
    scroller.scrollTo('contactUs', {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: 'ContainerElementID',
      offset: 50, 
    })
    //scroll.scrollToBottom()
  }

  return(
    <div >

      {/* header section */}
      <Header/>

      {/* home page carousel section */}
      <div id="home">
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
    )
  }

