import React, { useState } from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { addTask } from '../redux/actions/TodoActions';
import { useDispatch} from 'react-redux'

function Addtask() {
    const [task, setTask]=useState('')
    const dispatch = useDispatch();
    const handleSubmit=()=>{
        task!==''? dispatch(addTask(task.toUpperCase())): alert ('Task Field is Empty')
        setTask('')
    }

    return (
        <div>
        <h1>TO DO LIST</h1>
        <InputGroup className="mb-3">
           <FormControl
           placeholder="What are you going to do"
           onChange={e=>setTask(e.target.value)}
           value={task}
           aria-label="Task"
           aria-describedby="basic-addon2"
           
           />
           <Button variant="primary" onClick={handleSubmit}  id="button-addon2">
            ADD TO MY TO DO LIST
            </Button>
        </InputGroup>
        </div>
    )
}

export default Addtask
