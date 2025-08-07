import React from 'react'
import { Link } from 'react-router-dom'
import image3 from './assets/image/belebg.jpeg'
import image2 from './assets/image/beleimg2.jpg'
import image1 from './assets/image/beleimg1.jpeg'
import bgimg from './assets/image/bgimg.jpg'
import song from './assets/audio/birdsof.mp3'
import disc from './assets/image/disc.png'  
import Nav from './assets/component/Nav.jsx'
const Bele = () => {
 
  return (
    
    <div className='flex justify-center items-center w-screen h-screen bg-center bg-cover bg-[url("./assets/image/bgimg.jpg")] '>

<div className='flex justify-evenly text-center absolute top-0 left-0 w-full h-[5vh] text-white text-5xl font-bold'>
     <div className=' flex justify-center  text-4xl mt-0'>
            <Nav/>
    </div>
  </div>
      <img src={disc} alt="" className='w-[20vw] h-3[13vh] animate-spin absolute right-1/11 top-1/6 z-20' style={{ animationDuration: '5s' }}/>
        <div className='flex w-screen max-w-4xl  mt-10 backdrop-blur-xs bg-white/5  font-bold rounded-3xl z-100'>
                       
           <div className=''><img src={image1} alt="" className='scale-90 mt-8 mask-b-from-40% mask-b-to-90'/></div>
            <div className=''><img src={image2} alt="" className='scale-90 mr-5 mask-b-from-50% mask-b-to-120'/></div>
             <div className=''><img src={image3} alt="" className='scale-90 ml-1 mt-8 mask-b-from-50% mask-b-to-100 '/></div>
                                   
         </div>
          
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white z-100'>
             
              BILLIE EILISH
              
              </div>   
                           
          <div className='text-2xl w-[20vw] h-[5vh] mt-9  text-white  flex items-center justify-center rounded-full absolute bottom-10'>
              <audio controls autoPlay className='hidden'>
                       <source src={song} type="audio/mpeg" />
                                   
               </audio>
              <Link className='hover:bg-gray-950 hover:text-white w-full h-full border-2 rounded-full hover:border-black font-bold text-center'
                  to="/">
                  Back to Home
              </Link> 
              </div>


    </div>
    
  )
}
export default Bele
