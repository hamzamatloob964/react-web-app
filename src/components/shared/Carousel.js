import React,{useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
import '../../App.css'


export default function ItemCarousel (props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40; 

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
    
      {props.images.map(item => <img key={Math.random()} className="about-carousel" src={require(`../../../src/assets/images/${item}.png`)} />)}
    </ItemsCarousel>
  )
}
