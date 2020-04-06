import React,{useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
import '../App.css'
//import ItemCarousel from './shared/Carousel'

export default function AboutUs () {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40; 

  return (
    <div>
      <div className="w-full bg-black-600 flex flex-col items-center mt-3">
        <div className="md:h-32 w-full bg-gray-300 flex justify-center items-center">
          <span className="md:text-4xl text-xl pt-5 pb-5 md:pt-0 md:pb-0">ABOUT US</span>
        </div>
        <div className="w-10/12 pt-10 pb-10">
          <p className="md:text-lg text-base mb-8">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs!"Now fax quizJack!"my brave</p>
          <p className="md:text-lg text-base"><b>NOTE:</b></p>
          <p className="md:text-lg text-base mb-8">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. </p>
          <p className="md:text-lg text-base"><b>NOTE:</b></p>
          <p className="md:text-lg text-base">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. </p>
        </div>
        <div className="h-32 w-11/12 ">

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
            <img className="about-carousel" src={require('../../src/assets/images/pic1.png')} alt="" />
            <img className="about-carousel" src={require('../../src/assets/images/pic1.png')} alt="" />
            <img className="about-carousel" src={require('../../src/assets/images/pic1.png')} alt="" />
            <img className="about-carousel" src={require('../../src/assets/images/pic1.png')} alt="" />
          </ItemsCarousel>
        </div>
      </div>
    </div>
  )
}