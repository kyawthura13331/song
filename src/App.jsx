import React from 'react'
import image1 from './assets/image/acubi.jpeg'
import image2 from './assets/image/download.jpeg'

const App = () => {
  return (
    <div>
    <div className='h-30 bg-blue-400 text-center m-0 p-0'>
    

    </div>
    <div className="flex justify-start"> 
      <div className={`bg-center bg-auto bg-no-repeat h-[50vh] ... w-1/2 bg-black hover:bg-[url("./assets/image/acubi.jpeg")]  `}></div>
      <div className='grid-cols-7 grid gap-4 max-w-2/5 min-w-1 '>
        <div className='bg-black hover:bg-amber-200 ... p-5 m-3 w-full mt-2 rounded-3xl hover:rotate-6 text-center'>I</div>
        <div className='bg-black hover:bg-amber-600 ... p-5 m-3 w-full mt-2 rounded-3xl hover:rotate-6 text-center'>Love</div>
        <div className='bg-black hover:bg-amber-800 ... p-5 m-3 w-full mt-2 rounded-3xl hover:rotate-6 text-center'>You</div>
        <div className='bg-black hover:bg-amber-900 ... p-5 m-3 w-full mt-2 rounded-3xl hover:rotate-6 text-center'>So</div>
        <div className='bg-black hover:bg-amber-900 ... p-5 m-3 w-full mt-2 rounded-3xl hover:rotate-6 text-center'>So</div>
        <div className='bg-black hover:bg-amber-900 ... p-5 m-3 w-full mt-2 rounded-3xl hover:rotate-6 text-center'>So</div>
        <div className='bg-black hover:bg-amber-900 ... p-5 m-3 w-full mt-2 rounded-3xl hover:rotate-6 text-center'>So</div>
      </div>
      
    </div>
    <div className='text-center mt-6 flex justify-between text-5xl mb-5'>   
      <button className='bg-black hover:bg-sky-700 ... p-5 mr-3 w-full'>I</button>
      <button className='bg-black hover:bg-sky-700 ... p-5 mr-3 w-full'>Love</button>
      <button className='bg-black hover:bg-sky-700 ... p-5 mr-3 w-full'>You</button>
      <button className='bg-black hover:bg-sky-700 ... p-5 mr-3 w-full'>So</button>

    </div>
    <div class='text-2xl ml-20'>
    <div class="w-fit max-w-9/10 ... bg-black mb-2  hover:bg-sky-700 hover:text-white ...">I'm gonna pack my things and leave you behind,This feeling old .</div>
    <div class="w-fit max-w-3/4 ...  bg-black mb-2  hover:bg-sky-700  hover:text-white ...">And I know that I've made up my soul </div>
    <div class="w-fit max-w-2/3 ...  bg-black mb-2  hover:bg-sky-700  hover:text-white ...">I hope you feel what I felt when you shatterend my soul</div>
    <div class="w-fit max-w-3/5 ...  bg-black mb-2  hover:bg-sky-700 hover:text-white ...">'Cause you wew cruel and I'm fool, so  please let me go</div>
    </div>
     <div class='text-center mt-6 flex justify-between text-5xl mb-5'>
      <button className='bg-black hover:bg-sky-700 ... p-5 mr-3 w-full'>I</button>
      <button className='bg-black hover:bg-sky-700 ... p-5 mr-3 w-full'>Love</button>
      <button className='bg-black hover:bg-sky-700 ... p-5 mr-3 w-full'>You</button>
      <button className='bg-black hover:bg-sky-700 ... p-5 mr-3 w-full'>So......</button>

    </div>
    <div className='flex justify-center hover:bg-[url("./assets/image/acubi.jpeg")]'>
      <img src={image2} alt="" />
    </div>
    <div className="flex ... justify-between">
  <div className="size-14 grow-3 ... bg-amber-600 ">01</div>
  <div className="size-14 grow-3 ... bg-blue-700 hover:grow-7">02</div>
  <div className="size-14 grow-3 ... bg-cyan-950">03</div>
  </div>
    </div>
    
  )
}

export default App