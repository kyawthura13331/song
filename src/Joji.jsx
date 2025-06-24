import React from 'react'
import { Link } from 'react-router-dom'
import image1 from './assets/image/joji1.jpg'
import image2 from './assets/image/joji2.jpg'
import image3 from './assets/image/joji3.jpg'
import jojibg from './assets/image/jojibg.jpg'

const Joji = () => {
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
   
          <div  className='bg-center bg-no-repeat bg-cover bg-[url("./assets/image/jojibg.jpg")]'>
                  <div className='bg-center bg-no-repeat  bg-[url("./assets/image/jojibg.jpg")] w-screen h-screen text-white flex flex-col items-center  text-7xl align-text-bottom font-bold'>
                         <div className='flex justify-evenly text-center'>
                            
                             <div className=' flex justify-center text-white text-4xl mt-0'>
                                       
                                     {
                                         navItems.map((nav) => (
                                     <Link to={nav.path} key={nav.path} className='border-2 rounded-full hover:border-white text-black bg-emerald-200 text-center justify-between text-[21px] w-[10vw] h-[4vh] m-2 hover:bg-cyan-900 hover:text-white font-bold '>
                                      
                                       {nav.lable}
                         
                                     </Link>
                                     ))
                                      } 
                               </div>
                         </div>
                         
                         <div className='flex w-screen max-w-4xl  mt-20  '>
                 
                             <div className=''><img src={image1} alt="" className=' mt-8 mask-b-from-40% mask-b-to-90'/></div>
                             <div className=''><img src={image2} alt="" className='ml-4 mask-b-from-90% mask-b-to-90'/></div>
                             <div className=''><img src={image3} alt="" className='ml-8 mt-8 mask-b-from-40% mask-b-to-90'/></div>
                             
                         </div>
                        
                           JOJI
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
