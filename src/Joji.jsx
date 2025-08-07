import React from 'react'
import { Link } from 'react-router-dom'
import image1 from './assets/image/joji1.jpg'
import image2 from './assets/image/joji2.jpg'
import image3 from './assets/image/joji3.jpg'
import jojibg from './assets/image/jojibg.jpg'
import song from './assets/audio/glimpseofus.mp3'
import disc from './assets/image/disc.png'
import Nav from './assets/component/Nav'
const Joji = () => {
  return (
   
          <div  className='bg-center bg-no-repeat bg-cover bg-[url("./assets/image/jojibg.jpg")]'>
                  <div className='bg-center bg-no-repeat  bg-[url("./assets/image/jojibg.jpg")] w-screen h-screen text-white flex flex-col items-center  text-7xl align-text-bottom font-bold'>
                         <div className='flex justify-evenly text-center'>
                            
                             <div className=' flex justify-center text-white text-4xl mt-0'>
                                    
                                    
                               </div>
                         </div>
                          <img src={disc} alt="" className='w-[18vw] h-3[20vh] animate-spin absolute right-1/13 mt-33 z-20' style={{ animationDuration: '5s' }}/>
                         <div className='flex w-screen max-w-4xl  mt-20 z-100 '>
                 
                             <div className=''><img src={image1} alt="" className=' mt-8 mask-b-from-40% mask-b-to-90'/></div>
                             <div className=''><img src={image2} alt="" className='ml-4 mask-b-from-90% mask-b-to-90'/>
                             </div>
                             <div className=''><img src={image3} alt="" className='ml-8 mt-8 mask-b-from-80% mask-b-to-90 '/></div>
                            
                         </div>
                        
                           JOJI
                            <audio controls autoPlay className='hidden'>
                                 <source src={song} type="audio/mpeg" />
                       
                                </audio>
                             <div className='text-2xl w-[20vw] h-[5vh] mt-9  text-black bg-emerald-200 flex items-center justify-center rounded-full'>
                                 
                                 <Link className='hover:bg-cyan-900 hover:text-white w-full h-full border-2 rounded-full hover:border-white font-bold text-center'
                                     to="/">
                                         Back to Home
                                 </Link>
                             </div>
                            
                         </div>
            </div>
   
  )
}
export default Joji
