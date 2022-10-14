import React from 'react'
function Task({task,index,completeTask,removeTask,btnColor}) {
    console.log(task)
        
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title} 
            
            
            <button style={{background:'red'}} onClick={()=>{removeTask(index)}}>Remove</button>
            <button  style={{background:task.completed?btnColor:"blue"}} onClick={()=>{completeTask(index)}}>Complete</button>
            
        </div>
    );
}
export default Task;