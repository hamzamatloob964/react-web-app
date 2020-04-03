import React from 'react';

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

  return(
    <div >

      {/* header section */}
      <Header/>

      {/* home page carousel section */}
      <HomePage/>

      {/* About us section */}
      <AboutUs/>

      {/* our services section */}
      <Services/>

      {/* schedule section */}
      <Schedule/>

      {/* contact us */}
      <ContactUs/>

      {/* partenars section */}
      <Partners/>

      {/* footer section */}
      <Footer/>
      
    </div>
    )
  }

