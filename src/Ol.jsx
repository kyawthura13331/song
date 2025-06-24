import React from 'react'
import { Link } from 'react-router-dom'
import image1 from './assets/image/olv1.jpg'
import image2 from './assets/image/olv2.jpg'   
import image3 from './assets/image/olv3.jpg'
import logo from './assets/image/logo.png'
const Ol = () => {
    
   
    const navItems=[
        {
            lable:"Home",
            path:"/"
        }, 
        {
            lable:"Contact",
            path:"/app"
        },
        {
            lable:"About",
            path:"/about"
        }
       
    ]
  return (
   <>
         <div className='bg-cyan-900 w-screen h-screen text-white flex flex-col items-center  text-6xl align-text-bottom'>
                <div className='flex justify-evenly text-center'>
                   
                    <div className=' flex justify-center text-white text-4xl mt-0'>
                              
                            {
                                navItems.map((nav) => (
                            <Link to={nav.path} key={nav.path} className=' bg-blue-200 text-center justify-between text-[21px] text-black rounded-full w-[10vw] h-[4vh] m-2 hover:bg-blue-950 hover:text-white font-bold '>
                             
                              {nav.lable}
                
                            </Link>
                            ))
                             } 
                      </div>
                </div>
                
                <div className='flex justify-between w-full max-w-2xl  mt-20  mr-35'>
        
                    <div className='w-5xl'><img src={image2} alt="" className=' mt-20 mr-10 mask-b-from-50% mask-b-to-60'/></div>
                    <div className='w-5xl'><img src={image1} alt="" className=' ml-20  mask-b-from-60% mask-b-to-80'/></div>
                    <div className='w-5xl'><img src={image3} alt="" className=' mt-28 ml-40  mask-b-from-60% mask-b-to-55'/></div>
                    
                </div>
                OLIVIA RODRIGO
                 
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
