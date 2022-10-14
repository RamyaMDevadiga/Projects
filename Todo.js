import React, { useState,useEffect } from 'react';
import './../Todo.css'
import Modal from './Modal'
import Task from './Task'
import CreateTask from './Task'


function Todo() {
    const [time,setTime]=useState(new Date());
    const[pendingTasks,setPendingTaskCount]=useState(0);
    const[btnColor,setBtnColor]=useState('blue');
    const [tasks, setTasks] = useState([
            {
                title: "Grab some Pizza",
                completed: true,
               
            },
            {
                title: "Do your workout",
                completed: true,
               
            },
            {
                title: "Hangout with friends",
                completed: false,
               
            }
        ]);
        


       useEffect(()=>{setPendingTaskCount(tasks.filter(task => !task.completed).length)  })
       useEffect(()=>{
           var interval =setInterval(()=>{
                    setTime(new Date());
           })
           return function cleanUp(){
               clearInterval(interval)
           }

       })

        const completeTask=(index)=>{
            const newTasks =[...tasks];
            newTasks[index].completed=true;
            setTasks(newTasks);
            setBtnColor('green');

        }
        const removeTask =(index)=>{
            const newTasks =[...tasks];
            newTasks.splice(index,1);
            setTasks(newTasks);

        }
        const addTask=(title)=>{
            const newTasks = [...tasks,{ title, completed: false,timeStamp: `{$timeStamp}` }]
            setTasks(newTasks);
            
        }
       
        const [show,setShow]=useState(false);

        const openModal=()=>{
            setShow(true)
        }
        const closeModal=()=>{
            setShow(false)
        }
        
        return (
            <div className="todo-container">
               <div style={{alignItems:'centre',justifyContent:'center',display:'flex'}}>{time.toLocaleTimeString()}</div> 
                <div className="header">TODO - ITEMS</div>
                <div className="header">Pending Tasks {pendingTasks}</div>
                <button onClick={openModal}>Open</button>
                <Modal onClose={closeModal}show={show}/>
                
                <div className="tasks">
                    {console.log(tasks)}
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            completeTask={completeTask}
                            removeTask={removeTask}
                            btnColor={btnColor}
                            key={index}
                        />
                       
                    ))}
                    {console.log(tasks)}
                </div>
                <div className="create-task">
                <CreateTask addTask={addTask} />
                </div>
            </div>
        );
    }

    
    
    export default Todo;