 import React,{useState} from 'react'

function CreateTask ({addTask}){
    const [value,setValue]=useState('');
   const  handleSubmit=(e)=>{
       e.preventDefault();
       if(!value)return;
       alert(`The task you entered was: ${value}`)
       
       addTask(value);
       setValue('')

    }

    return(
        <form  id ="addTaskForm" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
            <button onSubmit="addTaskForm">Add</button>
            
        </form>

    )
}
export default CreateTask; 