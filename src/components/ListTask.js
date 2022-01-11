import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
    const [filter, setfilter] = useState(false)
    const [doned, setdoned] = useState(false)
    const todos= useSelector(state=>state.todoReducer.todos);
    return (
        <div >
            <div style={{display:'flex', justifyContent:'space-evenly', padding: '30px 100px 20px 100px' }}>
            <Button style={{padding: '10px 20px', borderRadius: '8px', fontSize:'16px', width:'20%'}} onClick={()=>setfilter(false)} variant='primary' size="sm">Show all</Button>
            <Button style={{padding: '10px 20px', borderRadius: '8px', fontSize:'16px', width:'20%'}} onClick={()=>{setfilter(true);setdoned(true)}} variant="primary" size="sm" >Show done</Button>
            <Button style={{padding: '10px 20px', borderRadius: '8px', fontSize:'16px', width:'20%'}} onClick={()=>{setfilter(true);setdoned(false)}} variant="primary" size="sm">Show not done</Button>
            </div>
            <div style={{cursor: 'pointer', padding: '30px 100px 20px 100px', background: '#eee',}}>
            {!filter ? todos.map(el=>(
            <>
            <Task key={el.id} el={el}/>
            <br/>
            <br/>
            </>
            )):doned ? todos.filter(el=>el.done).map(el=>(
                <>
                <Task key={el.id} el={el}/>
                <br/>
                <br/>
                </>
                )):todos.filter(el=>!el.done).map(el=>(
                    <>
                    <Task key={el.id} el={el}/>
                    <br/>
                    <br/>
                    </>
                    ))}
            </div>
            
            
        </div>
    )
}

export default ListTask
