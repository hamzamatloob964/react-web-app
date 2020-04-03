import React,{useState} from 'react'
import '../App.css'
import ItemsCarousel from 'react-items-carousel';

export default function Partners () {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40; 

  return (
    <div>
      <div style={{height:'510px'}} className="bg-white w-full flex flex-col justify-center items-center">
        <div style={{height:'350px'}} className="w-full bg-white flex flex-col items-center justify-center p-5">
          <span className="md:text-4xl text-xl"><b>PARTNERS</b></span>
          <span className="text-xl">text text text jkasdfjk adsdasd asdkasd asdkjasd kasdas dkasdasdjj kasd</span>
          <span className="text-xl">text text text jkasdfjk adsdasd asdkasd asdkjasd kasdas dkasdasdjj kasdjd asdjkasd asjd sjkadjasdasdasd jhadasdjhasdas</span>
        </div>
        <div className="w-11/12 h-40 ">
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
    </div>
  )
}