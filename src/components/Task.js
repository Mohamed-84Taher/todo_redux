import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { deleteTask, taskDone } from '../redux/actions/TodoActions';
import  { useDispatch }  from 'react-redux'
import EditTask from './EditTask';


function Task({el}) {
    const dispatch = useDispatch()
    const handleSubmit=()=>{
        dispatch(deleteTask(el.id));
    }


    

    return (
        <div style={{display:'flex', justifyContent:'space-evenly' }}>
            <h2 key={el.id} style={{width:'50%',textDecoration:el.done ? 'line-through':null}}> {el.task}</h2> 
            <div style={{display:'flex', justifyContent:'space-between' }}>
            <Button style={{padding: '10px 20px', borderRadius: '8px', fontSize:'16px', width:'33%'}} variant={el.done ? 'success' : 'outline-success'} onClick={()=>dispatch(taskDone(el.id))} >Done</Button>
            <Button style={{padding: '10px 20px', borderRadius: '8px', fontSize:'16px', width:'33%'}} variant="outline-danger" onClick={handleSubmit}>Delete</Button>
            <EditTask  el={el}/>
            </div>
            
        </div>
    );
}

export default Task
