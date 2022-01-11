import { ADDTASK, DELETETASK, EDITTASK, TASKDONE } from "../types"

export const addTask=(task)=>{
    return(
        {
            type: ADDTASK,
            payload: task
        }
    )
}

export const deleteTask=(id)=>{
    return(
        {
            type:DELETETASK,
            payload:id
        }
    )
}

export const taskDone=(id)=>{
    return(
        {
            type:TASKDONE,
            payload:id

        }



    )
}

export const editTask=(id, newtask, newstatus)=>{
    return(
        {
            type:EDITTASK,
            payload:{id, newtask, newstatus}
        }
    )
}