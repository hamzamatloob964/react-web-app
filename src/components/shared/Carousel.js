import React,{useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
import '../../App.css'


export default function ItemCarousel (props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40; 
  //console.log(props.value)

  return (
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
    
      {/* <img className="about-carousel" src={require('../../../src/assets/images/pic1.png')} />
      <img className="about-carousel" src={require('../../../src/assets/images/pic1.png')} />
      <img className="about-carousel" src={require('../../../src/assets/images/pic1.png')} />
      <img className="about-carousel" src={require('../../../src/assets/images/pic1.png')} /> */}
      {[1,2,3,4].map(item => props.value)}
    </ItemsCarousel>
  )
}
