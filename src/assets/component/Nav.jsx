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
    <>
{
                Navitems.map((nav) => (
            <Link to={nav.path} key={nav.path} className='text-2xl text-white rounded-full w-[13vw] h-[5vh] m-2 hover:bg-white hover:text-black font-bold'>
             
              {nav.label}

            </Link>
            ))
             }
    </>
  )
}

export default Nav