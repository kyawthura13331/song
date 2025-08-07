import React from 'react'
import { Link } from 'react-router-dom'
import bgimg from './assets/image/milky-way.jpg'
import image1 from './assets/image/jw1.jpg'
import image2 from './assets/image/jw2.jpg'
import image3 from './assets/image/jw3.jpg'
import song from './assets/audio/hateme.mp3'
import disc from './assets/image/disc.png'
import Nav from './assets/component/Nav'
 const Juice = () => {
   
  return (
   <div className=' flex justify-center items-center  w-screen h-screen bg-no-repeat bg-center bg-cover bg-[url("./assets/image/milky-way.jpg")]'>
             <div className='flex justify-evenly text-center absolute top-0 left-0 w-full h-[5vh] text-white text-5xl font-bold'>
                          <div className=' flex justify-center text-white text-4xl mt-0 '>
                           
                          </div>
                             </div><img src={disc} alt="" className='w-[20vw] h-3[25vh] animate-spin absolute right-1/11 mt-5 z-20' style={{ animationDuration: '5s' }}/>
                             <div className='flex  max-w-4xl  mt-0 w-[80vw] h-[60vh] bg-black/5  backdrop-blur-xs font-bold text-white rounded-3xl z-100'>
                         
                                 <div className=''><img src={image1} alt="" className=' mt-8 mask-b-from-60% mask-b-to-78 '/></div>
                                 <div className=''><img src={image3} alt="" className='ml-3 mask-b-from-56% mask-b-to-90'/></div>
                                 <div className=''><img src={image2} alt="" className='scale-90 ml-3 mt-0 mask-b-from-80% mask-b-to-95'/>

                                 </div>
                                 <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold'>
                                    JUICE WRLD
                                 </div>
                                           
                            </div> 
                            <div className='text-2xl w-[20vw] h-[5vh] mt-9  text-white  flex items-center justify-center rounded-full absolute bottom-10'>
                                   <audio controls autoPlay className='ml-20  w-[30vw] h-[5vh] rounded-lg shadow-2xl absolute bottom-20 hidden'>
                                                         <source src={song} type="audio/mpeg" />
                                                                     
                                                 </audio>    
                                       
                                  <Link className='hover:bg-red-500 hover:text-black w-full h-full border-2 rounded-full hover:border-black font-bold text-center'
                                      to="/">
                                          Back to Home
                                  </Link>
                              </div>
                        
                    
   </div>
   
  )
}
export default Juice
