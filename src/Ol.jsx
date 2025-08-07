import React from 'react'
import { Link } from 'react-router-dom'
import image1 from './assets/image/olv1.jpg'
import image2 from './assets/image/olv2.jpg'   
import image3 from './assets/image/olv3.jpg'
import logo from './assets/image/logo.png'
import song from './assets/audio/happier.mp3'
import disc from './assets/image/disc.png'
import Nav from './assets/component/Nav'
const Ol = () => {
  return (
   <>
         <div className='bg-cyan-900 w-screen h-screen text-white flex flex-col items-center  text-6xl align-text-bottom'>
                <div className='flex justify-evenly text-center'>
                   
                    <div className= 'flex justify-center text-white text-4xl mt-0' >
                      </div>
                </div>
                 <img src={disc} alt="" className='w-[15vw] h-3[15vh] animate-spin absolute right-1/8 mt-45 z-20' style={{ animationDuration: '5s' }}/>
                <div className='flex justify-between w-full max-w-2xl  mt-20  mr-35 z-100'>
        
                    <div className='w-5xl'><img src={image2} alt="" className=' mt-20 mr-10 mask-b-from-50% mask-b-to-60'/></div>
                    <div className='w-5xl'><img src={image1} alt="" className=' ml-20  mask-b-from-60% mask-b-to-80'/></div>
                    <div className='w-5xl'><img src={image3} alt="" className=' mt-20 ml-40  mask-b-from-50% mask-b-to-95 '/></div>
                    
                </div>
                OLIVIA RODRIGO
                   <audio controls autoPlay className='hidden'>
                                                  <source src={song} type="audio/mpeg" />
                                        
                                                 </audio>
                    <div className='text-2xl w-[20vw] h-[5vh] mt-4  text-black bg-blue-200 flex items-center justify-center rounded-full'>
                        <Link className='hover:bg-blue-950 hover:text-white w-full h-full border-2 rounded-full hover:border-white font-bold text-center'
                            to="/">
                                Back to Home
                        </Link>
                    </div>
                </div>
   </>
  )
}
export default Ol
