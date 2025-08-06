import React from 'react'

const Input = () => {
    const [value, setValue] = React.useState('');
    const[vlauecopy,setValuecopy]=React.useState('')
  return (
    <>
    <div className='w-screen  flex flex-col gap-6 justify-center items-center'>
        <div className='textinput w-[50vw] h-[10vh] border-2 border-b-black rounded-xl text-center p-5 overflow-hidden'>{value}</div>
        <label htmlFor="username"></label>
        <input 
        type="text"
        value={value}
        id='username'
        className='w-[30vw] h-[5vh] text-2xl text-center border-2 border-black rounded-lg'
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter your name'
         />
 </div>
 <div className='w-screen h-[50%] flex flex-row gap-3 justify-center items-center'>
 <button
         className='w-[10vw] h-[5vh] text-2xl text-center bg-blue-500 text-white rounded-lg mt-4 active:bg-blue-700 hover:bg-blue-600'
            onClick={() => setValuecopy(value)}

            >Copy</button>
            <button
            onClick={() => setValue('')}
            onClickCapture={() => setValuecopy('')}
            className='w-[10vw] h-[5vh] text-2xl text-center bg-red-500 text-white rounded-lg mt-4 active:bg-red-700 hover:bg-red-600'>
                Reset
            </button>
           
 </div>
         <div className='textinput flex justify-center'>{vlauecopy}</div>

   
    </>
      
   
    
   
  
    
  )
}
export default Input
