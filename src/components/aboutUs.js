import React,{useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
import '../App.css'

export default function AboutUs () {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40; 

  return (
    <div>
      <div className="w-full h-auto bg-gray-100 flex flex-col items-center mt-3">
        <div className="md:h-32 w-full bg-gray-300 flex justify-center items-center">
          <span className="md:text-4xl text-xl">ABOUT US</span>
        </div>
        <div className="w-10/12  pt-5 pb-5">
          <span className="md:text-lg text-base">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs!"Now fax quizJack!"my brave</span>
          <br></br>
          <br></br>
          <br></br>
          <span className="md:text-lg text-base"><b>NOTE:</b></span><br></br>
          <span className="md:text-lg text-base">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. </span>
          <br></br>
          <br></br>
          <br></br>
          <span className="md:text-lg text-base"><b>NOTE:</b></span><br></br>
          <span className="md:text-lg text-base">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. </span>
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
            <img className="about-carousel" src={require('../../src/assets/images/pic1.png')} />
            <img className="about-carousel" src={require('../../src/assets/images/pic1.png')} />
            <img className="about-carousel" src={require('../../src/assets/images/pic1.png')} />
            <img className="about-carousel" src={require('../../src/assets/images/pic1.png')} />
          </ItemsCarousel>
        </div>
      </div>
    </div>
  )
}