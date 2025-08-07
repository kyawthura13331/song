import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from './assets/image/logo.png'
import bele from './assets/image/bele.jpg'
import joji from './assets/image/joji.jpg'
import juice from './assets/image/juice.jpg'
import oliva from './assets/image/oliva.jpg'
import lana from './assets/image/lanapf.jpg'
import Nav from './assets/component/Nav'

const Otherpf = () => {
  
  return (
    <>
        <div className='bg-black w-screen h-screen '>
            <div className='bg-black flex justify-center text-center  '>
              <img className='w-48 h-40 mask-b-from-60% mr-[90%] mask-t-from-20 mask-r-from-30 absolute '  src={logo} alt="" /> 
          
        </div>

            
    <div className="w-fit h-fit flex flex-col justify-center items-center gap-4 ml-[13%] mt-[6%]">

    <div className='flex'>
     <Link to={"/Joji"}>
     <img src={joji} alt="" className="transition-transform duration-600 hover:scale-x-130 hover:scale-3d hover:scale-y-115 w-[15vw] h-[60vh]"/>
     </Link>    
      
    

 <Link to="/Ol">
    <img src={oliva}alt=""className="transition-transform duration-600 hover:scale-x-160 hover:scale-3d hover:scale-y-120 w-[15vw] h-[60vh]"/>
      </Link> 
    <Link to="/Lana">
        <img src={lana} alt="" className="transition-transform duration-600 hover:scale-x-160 hover:scale-y-120 w-[15vw] h-[60vh]" />
      </Link>
      <Link to="/Juice">
      <img src={juice} alt="" className="transition-transform duration-600 hover:scale-x-150 hover:scale-y-120 w-[15vw] h-[60vh]" />
      </Link>
    <Link to="/Bele">
   
    <img src={bele} alt="" className="transition-transform duration-600 hover:scale-x-140 hover:scale-y-120 w-[15vw] h-[60vh]" />
 </Link>
    </div>
     <div className="flex justify-center text-white text-5xl mt-14">
        MY FAV SINGERS
    </div>
    </div>
   
</div>
<Outlet />
    </>
        

 )  
  
}

export default Otherpf