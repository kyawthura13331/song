
import React, { useState } from 'react'
import Card from './Card'
import { subject1, subject2, subjects, allSubjects } from './constant'

const NewPage = () => {
    const [username, setusername] = useState('')
    const [dob, setdob] = useState(null)
    const [age, setage] = useState(0)
    const [color, setcolor] = useState('')
    const [subjects, setSubjects] = useState([])
    const [allStudents, setAllStudents] = useState([])
    const [id, setid] = useState()
    const [isedit, setisedit]=useState(false)
    const deletestudent = (id) => {
       setAllStudents(allStudents.filter(student => student.id !== id))
    }
    const editstudent = (id,username,dob,age,color,subjects) => {
        setusername(username)
        setdob(dob)
        setage(age)
        setcolor(color)
        setSubjects(subjects)
        setid(id)
    }
    
    const clearOnSuccess = () => {
        setusername('')
        setdob(null)
        setage(0)
        setcolor('')
        setSubjects([])
        setisedit(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, dob, age, color, subjects)


        try {
            if (username.trim() === '') return alert("username is required!")
            else if (!dob) return alert("date of birth is required!")
            else if (age <= 0  || typeof age !== 'number') return alert("Age validation failed!")
            else if (color.trim() === ''||  !color) return alert("Color is required!")
            else if (subjects.length === 0) return alert("Select at least 1 subject!")
                if(isedit){
                    const newstudents = allStudents.map(student => (
                        student.id === id ? {
                            username,
                            dob,
                            age,
                            color,
                            subjects,
                        } : student
                    ))
                    setAllStudents(newstudents)
                }
                else {
            setAllStudents([...allStudents, {
                id: new Date().toLocaleTimeString(),
                username,
                dob,
                age,
                color,
                subjects: subjects
            }])
        }
             clearOnSuccess()
        } catch (error) {
            console.log("Error submitting student!")
        }
    }

    return (
        <div className='w-screen h-screen overflow-auto'>
            <form action="" className=' flex flex-col gap-2 w-full justify-center items-center p-10' onSubmit={(e) => handleSubmit(e)}>
                <div className='flex gap-2 w-[300px]'>
                    <label htmlFor="username" className='w-1/3'>
                        Username
                    </label>
                    <input value={username} onChange={(e) => setusername(e.target.value)} type="text" id='username' className='w-2/3 p-1 bg-slate-200 border-slate-400 border-2 rounded-lg outline-0' />
                </div>
                <div className='flex gap-2 w-[300px]'>
                    <label htmlFor="username" className='w-1/3'>
                        Date of Birth
                    </label>
                    <input value={dob} onChange={(e) => setdob(e.target.value)} type="date" id='username' className='w-2/3 p-1 bg-slate-200 border-slate-400 border-2 rounded-lg outline-0' />
                </div>
                <div className='flex gap-2 w-[300px]'>
                    <label htmlFor="username" className='w-1/3'>
                        Age
                    </label>
                    <input value={age} onChange={(e) => setage(parseInt(e.target.value))} type="number" id='username' className='w-2/3 p-1 bg-slate-200 border-slate-400 border-2 rounded-lg outline-0' />
                </div>
                <div className='flex gap-2 w-[300px]'>
                    <label htmlFor="username" className='w-1/3'>
                        Color
                    </label>
                    <input value={color} onChange={(e) => setcolor(e.target.value)} type="color" id='username' className='w-2/3 p-1 bg-slate-200 border-slate-400 border-2 rounded-lg outline-0' />
                </div>
                <h1 className='text-2xl mt-6 mb-2'>Available Subject</h1>
                <div className='grid grid-cols-3 gap-2'>
                    {
                        allSubjects.map((subject, index) => (
                            <div className='w-full flex items-center justify-around gap-2'>
                                <label htmlFor={subject} className='cursor-pointer'>{subject}</label>
                                <input type="checkbox" checked={subjects.includes(subject)} id={subject} onChange={() => {
                                    if (subjects.includes(subject)) {
                                        console.log("condition1")
                                        setSubjects(subjects.filter(sub => sub !== subject))
                                    } else {


console.log("condition2")
                                        setSubjects([...subjects, subject])
                                    }
                                }} />
                            </div>
                        ))
                    }
                </div>
                <button type='submit' className={`${isedit? 'bg-blue-500': 'bg-red-200'} p-2 rounded-lg mt-4 px-10 active:bg-blue-300 cursor-pointer`} >
                    {
                        isedit ? "Edi-tting" : "Add Student"
                    }
                </button>
                
            </form>
            <div className='grid grid-cols-3 gap-4 p-4'>
                {
                    allStudents.map((student, index) => (
                        <Card
                            rollNo={(index + 1)}
                            id={student.id}
                            username={student.username}
                            dob={student.dob}
                            age={student.age}
                            color={student.color}
                            subjects={student.subjects}
                            deletestudent={deletestudent}
                           editstudent={editstudent}
                           setisedit={setisedit}
                        />
                    ))
                }


            </div>
        </div>
    )
}

export default NewPage