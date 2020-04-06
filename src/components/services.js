import React,{useState, useEffect} from 'react'
import '../App.css'
import ItemsCarousel from 'react-items-carousel';
import { toast } from 'react-toastify';
import { post } from '../services/restService'
import Carousel from './carousel';

export default function Services () {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [form, setForm] = useState({});
  const chevronWidth = 40;

  useEffect(() => {
    document.querySelector('.service-container .service-text');
  }, [])

  const handleChange = (data) => {
    setForm({...form, ...data})
  }
  
  const onSubmit = (e = null) => {
        
    if(e)
    e.preventDefault();
    
    if(!document.getElementById('myForm').checkValidity()) return false;
        
    let toastId = toast.info("submitting request...", {autoClose: false});
    post('quote', form)
      .then(res => {
        document.getElementById('myForm').reset();
        setForm({});
        toast.update(toastId, {
          type: toast.TYPE.SUCCESS,
          render: 'request submitted successfully',
          autoClose: 2000
        });
      })
      .catch(err => {
        toast.dismiss(toastId);
      })
  }

  return (
    <div>
      <div className="bg-white flex flex-col items-center services-container my-5">

        <div className="w-full bg-gray-300 flex flex-col items-center">
          <span className="service-text md:text-4xl text-xl my-5" data-aos="fade-up">OUR SERVICES</span>
          <div className="h-48 w-11/12">
            <Carousel>
              {
                [1,2,3, 4, 5].map((item, i) => {
                  return (
                    <div key={i} className="px-5" data-aos="fade-left">
                      <div className="bg-gray-400 p-5 rounded-lg shadow-lg" style={{height: '120px'}}>
                        Service {i + 1}
                      </div>
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
        </div>

        <div className="relative w-10/12 bg-white flex md:flex-row flex-col">
          <div className=" h-full pt-10 pb-10 md:w-7/12 w-full bg-white">
            <span className="lg:text-3xl md:text-2xl"><b>Why Customers Choose Us</b></span><br></br><br></br>
            <span className="lg:text-3xl md:text-2xl"><b>Reliable andFast delivery</b></span><br></br>
            <span className="lg:text-3xl md:text-2xl"><b>24/7Support</b></span><br></br>
            <span className="lg:text-3xl md:text-2xl"><b>Well recognizedby the Maldives</b></span><br></br><br></br>
            <span className="md:text-xl text-base">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</span>
          </div>

          <form id="myForm" onKeyUp={e => {e.keyCode === 13 && onSubmit()}} onSubmit={onSubmit} data-aos="flip-right" className="bg-indigo-800 md:w-5/12 w-full lg:pr-10 lg:pl-10 pl-2 pr-2 pt-2 md:pt-0  flex flex-col req-quote">

            <span className="md:text-3xl text-xl mb-8 md:mt-3 text-white">Request a Quote</span>
            <div className="h-8 w-12/12 bg-white mb-3 flex rounded-sm">
              <span className="text-sm mt-1 ml-2">Name:</span>
              <input required type="text" onChange={(e) => handleChange({name: e.target.value})} className="w-10/12 ml-2"></input>
            </div>
            <div className="h-8 w-12/12 bg-white mb-3 flex rounded-sm">
              <span className="text-sm mt-1 ml-2">Email:</span>
              <input required type="text" onChange={(e) => handleChange({email: e.target.value})} className="w-11/12 ml-2"></input>
            </div>

            <div className="h-8 w-12/12 bg-white mb-3 flex rounded-sm">
              <span className="text-sm mt-1 ml-2">Contact: </span>
              <input required type="text" onChange={(e) => handleChange({contact: e.target.value})} className="ml-1 contact-number"></input>
            </div>

            <div className="h-8 w-12/12 bg-white mb-3 flex rounded-sm">
              <div className="w-7/12 bg-white flex">
                <span className="text-sm mt-1 ml-2">Container Size: </span>
                <input required type="text" onChange={(e) => handleChange({size: e.target.value})} className="w-10 ml-2 "></input>
              </div>

              <div className="w-5/12 bg-white ml-auto flex rounded-sm">
                <span className="text-sm mt-1 ml-2">Type: </span>
                <input required type="text" onChange={(e) => handleChange({type: e.target.value})} className="w-8/12 ml-2"></input>
              </div>
            </div>

            <div className="h-8 w-12/12 bg-white mb-3 flex rounded-sm">
              <span className="text-sm mt-1 ml-2">Cargo Type: </span>
              <input required type="text" onChange={(e) => handleChange({cargo: e.target.value})} className="ml-1"></input>
            </div>

            <div className="h-56 w-12/12 bg-white mb-3 flex flex-col rounded-sm">
              <span className="text-sm mt-1 ml-2">Your Message: </span>
              <textarea required onChange={(e) => handleChange({message: e.target.value})} className="w-12/12 ml-2 mr-2 h-48"></textarea>
            </div>

            <div className="h-8 w-12/12 bg-indigo-800 mb-3 flex justify-center items-center">
              <button type="submit" className="w-40 h-full bg-white hover:bg-indigo-200 rounded-sm">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}