import React from 'react'

const Card = ({ rollNo,id, username, dob, age, color, subjects = [],deletestudent,editstudent, setisedit }) => {
    return (
        <div className='shadow-xl shadow-black/30 p-4 rounded-xl border-2 border-slate-200'>
            <div className=' p-2 rounded-2xl'
                style={{ backgroundColor: color }}
            >Roll No - {rollNo}</div>
            <div>username - {username}</div>
            <div>date of birth - {dob}</div>
            <div>Age - {age}</div>
            <div className='bg-slate-200 flex p-2 mt-2 rounded-2xl gap-2 overflow-auto '>
                <div>Subject - </div>
                {
                    subjects.map((subject, index) => (
                        <div key={subject}>
                            {subject}{index === subjects.length - 1 ? "" : ","}
                        </div>
                    ))
                }
            </div>
            <button 
            onClick={() => deletestudent(username)}
            className='bg-red-500 p-2 rounded-lg mt-4 px-10 active:bg-red-300 cursor-pointer'>
                delete
            </button>
            <button className='bg-blue-500 p-2 rounded-lg mt-4 px-10 active:bg-blue-300 cursor-pointer ml-2'
             onClick={() =>{
                setisedit(true)
                 editstudent(id,username,dob,age,color,subjects)
             }}  
          >Edit</button>
        </div>
    )
}

export default Card