import React from 'react';
import '../App.css'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import DataTable from 'react-data-table-component';

export default function WebApp () {

  const data = [
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' }
  ];
  const columns = [
    {
      name: 'Name',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Text and Numbers',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'ETD',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'PORT',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'ETA',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'PORT',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'ETD Male',
      selector: 'year',
      sortable: true,
      right: true,
    },
  ];

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

        <div style={{height:'550px', position:'relative'}} className="w-10/12 bg-pink-300 flex">
          <div className=" h-full pt-10 pb-10 w-7/12 bg-blue-600">
            <span className="text-4xl"><b>Why Customers Choose Us</b></span><br></br><br></br>
            <span className="text-4xl"><b>Reliable andFast delivery</b></span><br></br>
            <span className="text-4xl"><b>24/7Support</b></span><br></br>
            <span className="text-4xl"><b>Well recognizedby the Maldives</b></span><br></br><br></br>
            <span className="text-2xl">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</span>
          </div>

          <div style={{height:'585px',position:'absolute',right:'0px',top:'-35px'}} className="bg-red-600 w-5/12 pr-10 pl-10  flex flex-col">

            <span className="text-4xl mb-8">Request a Quote</span>
            <div className="h-8 w-12/12 bg-gray-400 mb-3 flex">
              <span className="text-sm mt-1 ml-2">Name:</span>
              <input className="w-10/12 ml-2"></input>
            </div>
            <div className="h-8 w-12/12 bg-gray-400 mb-3 flex">
              <span className="text-sm mt-1 ml-2">Email:</span>
              <input className="w-11/12 ml-2"></input>
            </div>

            <div className="h-8 w-12/12 bg-gray-400 mb-3 flex">
              <span className="text-sm mt-1 ml-2">Contac Number: </span>
              <input className="w-63 ml-1"></input>
            </div>

            <div className="h-8 w-12/12 bg-gray-400 mb-3 flex">
              <div className="h-full w-5/12 bg-blue-600 flex">
                <span className="text-sm mt-1 ml-2">Container Size: </span>
                <input className="w-10 ml-2 "></input>
              </div>

              <div className="h-full w-5/12 bg-blue-600 ml-auto flex">
                <span className="text-sm mt-1 ml-2">Type: </span>
                <input className="w-8/12 ml-2"></input>
              </div>
            </div>

            <div className="h-8 w-5/12 bg-gray-400 mb-3 flex">
              <span className="text-sm mt-1 ml-2">Cargo Type: </span>
              <input className="w-16 ml-1"></input>
            </div>

            <div className="h-56 w-12/12 bg-gray-400 mb-3 flex flex-col">
              <span className="text-sm mt-1 ml-2">Your Message: </span>
              <textarea className="w-12/12 ml-2 mr-2 h-48"></textarea>
            </div>

            <div className="h-8 w-12/12 bg-gray-400 flex justify-center items-center">
              <button className="w-40 h-full bg-red-400">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-700 w-full h-auto flex flex-col items-center">
        <div className="w-full h-32 bg-red-700 flex justify-center items-center">
          <span className="text-5xl"><b>Schedule</b></span>
        </div>
        <div className="w-10/12 bg-blue-600 h-auto">
          <DataTable
            title="Google Sheets Data"
            columns={columns}
            data={data}
          />
        </div>
        <span className="text-2xl mt-5">PLS NOTE ABOVE SCHEDULE IS SUBJECT TO CHANGE WITHOUT PRIOR NOTICE</span>
      </div>

      {/* contact us */}

      <div className="bg-orange-600 w-full flex flex-col">
        <div className="w-full h-32 bg-red-700 flex justify-center items-center">
          <span className="text-5xl"><b>Contact Us</b></span>
        </div>

        <div className="bg-red-800 w-full flex flex-col items-center">
          <div style={{height:'auto'}} className="w-10/12 bg-orange-400 flex">

            <div className="bg-green-700 h-full w-4/12 flex flex-col pt-5 pr-5">
              <div className="bg-blue-700 h-12 w-full flex flex-col items-center">
                <span className="text-xl">Leave us a Message</span>
              </div>

              <div className="bg-gray-600 w-full h-full flex flex-col">
                <span className="text-sm">We are here to answer any Quistion you may have to company Pvt ltd.</span>
                <span className="text-sm">To contact Via email,complite the fields below...</span>
                <span className="text-md mt-5">Name:</span>
                <input style={{border:'none', borderBottom:'1px solid black'}} className="w-full h-8"></input>
                <span className="text-md mt-3">Phone Number:</span>
                <input style={{border:'none', borderBottom:'1px solid black'}} className="w-full h-8"></input>
                <span className="text-md mt-3">Email:</span>
                <input style={{border:'none', borderBottom:'1px solid black'}} className="w-full h-8"></input>
                <span className="text-md mt-3">Message:</span>
                <textarea style={{border:'none', borderBottom:'1px solid black'}} className="w-full h-12"></textarea>
                <button className="w-24 h-8 ml-auto bg-red-400">Submit</button>
              </div>
            </div>

            <div className="bg-gray-700 h-full w-4/12 flex flex-col pt-5 pr-5 pb-5">
              <span className="text-xl"><b>NAME OFTHECOMPANY</b></span>
              <span className="text-sm">ADDRESS</span>
              <span className="text-sm">ADDRESS</span>
              <span className="text-sm">ADDRESS</span>
              <span className="text-sm">ADDRESS</span>
              <span className="text-sm mt-5">Email: contact@sample.com</span>
              <span className="text-sm">Phone: 960 1234567 / 960 1234567</span>
              <span className="text-sm">Mobile: 960 1234567</span>
              <div className="h-12 w-full bg-teal-100 mt-3 flex justify-center items-center">
                <span className="bg-gray-600 h-10 w-10 rounded-full mr-1"></span>
                <span className="bg-gray-600 h-10 w-10 rounded-full mr-1"></span>
                <span className="bg-gray-600 h-10 w-10 rounded-full mr-1"></span>
                <span className="bg-gray-600 h-10 w-10 rounded-full"></span>
              </div>
              <div className="h-32 w-full bg-teal-100 mt-3">Google map location</div>
            </div>

            <div className="bg-green-700 h-full w-4/12 flex flex-col pt-5 pr-5 pb-5">
              <span className="text-xl">Our Office Operational Hours</span>
              <div className="flex mt-2">
                <span className="text-sm ">Saturday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Sunday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Monday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Tuesday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Wednessday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Thursday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm ">Friday</span>
                <span className="text-sm mr-20 ml-auto ">08:00 am  -  04:00 pm</span>
              </div>

              <div className="h-32 w-full bg-gray-500 mt-8">image</div>
            </div>

          </div>
        </div>

        <div style={{height:'300px'}} className=" w-full bg-gray-800 flex justify-center">
          <div className="bg-red-100 w-10/12 h-64 flex flex-row pt-3 pb-3 justify-between">
            <div className="bg-red-600 h-full w-3/12 flex flex-col">
              <span className="text-xl">Text</span>
              <div className="flex flex-col bg-orange-100 p-10">
                <span className="text-md"><b>CompanySdn Bhd</b></span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
              </div>
            </div>

            <div className="bg-red-600 h-full w-3/12 flex flex-col">
              <span className="text-xl">Text</span>
              <div className="flex flex-col bg-orange-100 p-10">
                <span className="text-md"><b>CompanySdn Bhd</b></span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
              </div>
            </div>

            <div className="bg-red-600 h-full w-3/12 flex flex-col">
              <span className="text-xl">Text</span>
              <div className="flex flex-col bg-orange-600 p-10">
                <span className="text-md"><b>CompanySdn Bhd</b></span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
                <span className="text-sm">text</span>
              </div>
            </div>
    
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
