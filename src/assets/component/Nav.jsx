import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    const Navitems=[
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
            label:"Lana Del Rey", 
            path:"/Lana"  
        },
        {
            label:"Billish Eilish",   
            path:"/Bele"  
        }   
    ]
  return (
    <div className='bg-none flex justify-between absolute left-1/12'>{
                Navitems.map((nav) => (
            <Link to={nav.path} key={nav.path} className='text-center text-2xl bg-none text-white rounded-full w-[13vw] h-[5vh] m2 hover:bg-white hover:text-black font-bold '>
             
              {nav.label}

            </Link>
            ))
             }
    </div>
  )
}

export default Nav