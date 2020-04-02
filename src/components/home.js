import React from 'react';
import '../App.css'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function WebApp () {

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    // var i;
    // var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {slideIndex = 1}    
    // if (n < 1) {slideIndex = slides.length}
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";  
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
  }

  return(
    <div className="">
      <div className="w-full bg-green-600 h-12 flex">
        <span style={{marginTop:'17px'}} className="ml-20 text-sm">Opening hours : saturday-sunday-8am to 5pm</span>
      </div>

      <div className="w-full bg-blue-600 h-40 pr-16 pl-16  flex justify-around items-center">
        <div style={{width:'300px'}} className="bg-green-600  h-24 flex justify-center items-center">
          <span className="text-4xl"><b>Logo</b></span>
        </div>
        <div className="bg-green-600 h-20 w-auto flex">
          <div className="h-full w-20 bg-red-600"></div>
          <div className="flex flex-col items-center h-full w-auto bg-yellow-600">
            <span className="text-sm"><b>Visit Us</b></span>
            <span className="text-xs">1address</span>
            <span className="text-xs">2address</span>
            <span className="text-xs">3address</span>  
          </div>
        </div>
        <div className="bg-green-600 h-20 w-auto flex">
          <div className="h-full w-20 bg-red-600"></div>
          <div className="flex flex-col justify-center h-full w-auto bg-yellow-600">
            <span className="text-sm"><b>Email</b></span>
            <span className="text-xs">sample@gmail.com</span>
          </div>
        </div>
        <div className="bg-green-600 h-20 w-auto flex">
          <div className="h-full w-20 bg-red-600"></div>
          <div className="flex flex-col justify-center h-full w-auto bg-yellow-600">
            <span className="text-sm"><b>Call Us</b></span>
            <span className="text-xs">0088-988-877777</span>
          </div>
        </div>
      </div>

      <div className="h-12 w-full bg-green-600 flex justify-center">
        <div className="h-full w-10/12 bg-yellow-600 flex flex-row items-center">
          <span className="mr-8">HOME</span>
          <span className="mr-8">ABOUT</span>
          <span className="mr-8">SERVICES</span>
          <span className="mr-16">SCHEDULE</span>
          <span>CONTACT US</span>
          <span className="ml-auto mr-8">QUOTE</span>
          <span>BOOKING</span>
        </div>
      </div>

      <div style={{height:'400px'}} className="w-full bg-gray-600">
        {/* <Carousel>
          <div>
                <img src={require('../../src/assets/images/pic1.png')} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={require('../../src/assets/images/pic2.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('../../src/assets/images/pic3.png')} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel> */}
      </div>

      <div className="w-full h-auto bg-indigo-600 flex flex-col items-center">
        <div className="h-32 w-full bg-green-500 flex justify-center items-center">
          <span className="text-5xl"><b>About Us</b></span>
        </div>
        <div style={{height:'500px'}} className="w-10/12 bg-indigo-900 pt-5 pb-5">
          <span className="text-lg">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs!"Now fax quizJack!"my brave</span>
          <br></br>
          <br></br>
          <br></br>
          <span className="text-lg"><b>NOTE:</b></span><br></br>
          <span className="text-lg">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. </span>
          <br></br>
          <br></br>
          <br></br>
          <span className="text-lg"><b>NOTE:</b></span><br></br>
          <span className="text-lg">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. </span>
        </div>
        <div className="h-32 w-11/12 bg-green-700"></div>
      </div>

      <div className="w-full h-auto bg-orange-600 flex flex-col items-center ">

        <div style={{height:'350px'}} className="w-full bg-indigo-800 flex flex-col items-center">
          <span className="text-5xl mt-10">OUR SERVICES</span>
          <div className="h-48 w-11/12 bg-purple-300"></div>
        </div>

        <div style={{height:'550px'}} className="w-10/12 bg-pink-300 flex">
          <div className=" h-full pt-10 pb-10 w-7/12 bg-blue-600">
            <span className="text-4xl"><b>Why Customers Choose Us</b></span><br></br><br></br>
            <span className="text-4xl"><b>Reliable andFast delivery</b></span><br></br>
            <span className="text-4xl"><b>24/7Support</b></span><br></br>
            <span className="text-4xl"><b>Well recognizedby the Maldives</b></span><br></br><br></br>
            <span className="text-2xl">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</span>
          </div>

          <div style={{height:'550px'}} className="bg-red-600 w-4/12">
            
          </div>

        </div>

      </div>
      
        

      
    </div>
    )
  }


  // <div className="max-w-sm rounded overflow-hidden shadow-lg">
  //   <img className="w-full" src={require('../../src/pic.png')} alt="Display" />
  //   <div className="px-6 py-4">
  //     <div className="font-bold text-purple-500 text-xl mb-2">
  //       Blessing Krofegha
  //     </div>
  //     <p className="text-gray-700 text-base">
  //       When i’m not coding i switch to netflix with biscuits and cold tea as my companion. <span></span>😜
  //     </p>
  //   </div>
  //   <div className="px-6 py-4">
  //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Engineer</span>
  //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Writter</span>
  //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#Public Speaker</span>
  //   </div>
  // </div>
