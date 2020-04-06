import React,{useState} from 'react'
import '../App.css'
import Carousel from './carousel';

export default function Partners () {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40; 

  return (
    <div>
      <div style={{}} className="bg-white w-full flex flex-col justify-center items-center my-6">
        <div style={{}} className="w-full bg-white flex flex-col items-center justify-center my-5">
          <span className="md:text-4xl text-xl" data-aos="fade-up"><b>PARTNERS</b></span>
          <span className="text-xl">text text text jkasdfjk adsdasd asdkasd asdkjasd kasdas dkasdasdjj kasd</span>
          <span className="text-xl">text text text jkasdfjk adsdasd asdkasd asdkjasd kasdas dkasdasdjj kasdjd asdjkasd asjd sjkadjasdasdasd jhadasdjhasdas</span>
        </div>
        <div className="w-11/12 h-40 my-5">
          <Carousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={window.innerWidth < 500 ? false : <button>{'<'}</button>}
            rightChevron={window.innerWidth < 500 ? false : <button>{'>'}</button>}
            chevronWidth={chevronWidth}
            outsideChevron
          >
            {
              [1,2,3, 4, 5].map((item, i) => {
                return (
                  <div key={i} className="px-5" data-aos="fade-left">
                    <div className="bg-gray-400 p-5 rounded-lg shadow-lg" style={{height: '120px'}}>
                      Partner {i + 1}
                    </div>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </div>
  )
}