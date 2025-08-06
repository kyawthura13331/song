import React,{useState} from "react"   


const FormTest = () => {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[users,setusers]=useState([])

  return (
    <div className="flex flex-col items-center h-[30%]  gap-4">
        <div className="h-[300px] w-[30%] flex flex-col items-center justify-center overflow-auto ">
            {
                users.map((item, index) => (
                    <div key={index} className="border p-2 m-2">
                        <div>{item?.username}</div>
                        <div>{item?.password}</div>
                    </div>
                ))
            }
        </div>
         <form onSubmit={(e) => {
        e.preventDefault();
        setusers([...users, { username, password }]);
        setUsername('');
        setPassword('');
    }
}>
    <label htmlFor="username"  ></label>
    <input value={username} type="username" className="mb-5" id='username' autoFocus onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username"/>
   
    <label htmlFor="password" className="block"></label>
    <input value={password} type="password" id='password' onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
    <button className="flex mt-10">Submit</button>
</form>
  
    </div>
    
   
  )
}
export default FormTest