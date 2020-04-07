import React from 'react'
import '../App.css'
import ItemCarousel from './shared/Carousel'

export default function Partners () {

  return (
    <div>
      <div style={{height:'510px'}} className="bg-white w-full flex flex-col justify-center items-center">
        <div style={{height:'350px'}} className="w-full bg-white flex flex-col items-center justify-center p-5">
          <span className="md:text-4xl text-xl"><b>PARTNERS</b></span>
          <span className="text-xl">text text text jkasdfjk adsdasd asdkasd asdkjasd kasdas dkasdasdjj kasd</span>
          <span className="text-xl">text text text jkasdfjk adsdasd asdkasd asdkjasd kasdas dkasdasdjj kasdjd asdjkasd asjd sjkadjasdasdasd jhadasdjhasdas</span>
        </div>
        <div className="w-11/12 h-40 ">
          <ItemCarousel images={['pic1','pic2','pic1','pic1']}/>
        </div>
      </div>
    </div>
  )
}