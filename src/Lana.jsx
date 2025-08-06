import react from 'react'
import image1 from './assets/image/lana1.jpg'
import image2 from './assets/image/lana2.jpg'
import image3 from './assets/image/lana3.jpg'
import logo from './assets/image/logo.png'
import { Link } from 'react-router-dom'
import song from './assets/audio/brooklyn.mp3'
import disc from './assets/image/disc.png'
const Test = () => {
   
    const navItems=[
        {
            label:"Home",
            path:"/"
        }, 
        {
            label:"Joji",
            path:"/Joji"
        },
        {
            label:"Juice Wrld",
            path:"/Juice"
        },
        {
            label:"Olivia Rodrigo",
            path:"/Ol"
        },
        
        {
            label:"Billish Eliish",   
            path:"/Bele"  
        } 
       
    ]
    
  return (
 <div >
        
            

    <div className='bg-black w-screen h-screen text-white flex flex-col items-center  text-6xl align-text-bottom'>
        <div className='bg-black flex justify-evenly text-center'>
             
            <div className=' flex justify-center text-white text-5xl mt-0'>
                      
                    {
                        navItems.map((nav) => (
                    <Link to={nav.path} key={nav.path} className='justify-between text-2xl text-white rounded-full w-[15vw] h-[5vh] m-2 hover:bg-white hover:text-black font-bold '>
                     
                      {nav.label}
        
                    </Link>
                    ))
                     } 
              </div>
        </div>
        
        <div className='flex justify-between w-full max-w-2xl mb-10 mt-20  mr-35'>

            <div className='w-6xl'><img src={image1} alt="" className=' mt-28 mr-10 mask-b-from-10% mask-b-to-60'/></div>
            <div className='w-6xl'><img src={image2} alt="" className='ml-20  mask-b-from-70% mask-b-to-80'/></div>
            <div className='w-6xl flex'><img src={image3} alt="" className=' mt-28 ml-40  mask-b-from-90% mask-b-to-96 z-[100]' />
            <img src={disc} alt="" className='w-[15vw] h-3[15vh] animate-spin absolute right-1/8 mt-20 z-0' style={{ animationDuration: '5s' }}/>
            </div>
           
            
        </div>
          LANA DEL REY
           <audio controls autoPlay className='hidden'>
            <source src={song} type="audio/mpeg" />   
            </audio>
            <div className='text-2xl w-[20vw] h-[5vh] mt-4 text-black bg-white flex items-center justify-center rounded-full'>
                <Link className='hover:bg-black hover:text-white w-full h-full border-2 rounded-full hover:border-white font-bold text-center'
                    to="/">
                        
                    Back To Home
                 </Link>
            </div>
     </div>
     
 </div>
    
  )
}

export default Test