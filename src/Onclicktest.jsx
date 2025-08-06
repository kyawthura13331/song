import { useState } from "react"

const Onclicktest = () => {
    const [number,setnumber]=useState(0)
    const innumberBy1=()=> {
        setnumber(number+1)
    }
    const outnumberBy1=()=> {
        setnumber(number-1) 
    }
    const resetnumber=()=> {
        setnumber(0)
    } 
  return (
    <div className="flex flex-col items-center justify-center h-screen text-6xl">

        <div>total{number}</div>
        <button className="bg-amber-300 active:bg-amber-900" onClick={innumberBy1}>add to</button>
        <button className="bg-amber-800 active:bg-blue-200 " onClick={outnumberBy1}>Sub to</button>
        <button className="bg-amber-500 active:bg-blue-200" onClick={resetnumber}>Reset</button>
        <div className="text-2xl">Click the button to change the number</div>
    </div>
  )
}

export default Onclicktest