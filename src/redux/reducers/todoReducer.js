import { ADDTASK, DELETETASK, EDITTASK, TASKDONE } from "../types";

const initState = {
    todos : [{id : 0, task : "EATING", done :false},{id : 1, task : "SLEEPING", done :false},{id : 2, task : "REPEAT", done :false}]

}

function todoReducer (state = initState, action){
   
    switch (action.type) {
        case ADDTASK:
            return {...state, todos:[...state.todos,{id:state.todos.length, task:action.payload, done:false}]};

        case DELETETASK:
            return {...state, todos:state.todos.filter(el=>(el.id!==action.payload))};

        case TASKDONE:
            return {...state, todos:state.todos.map(el=>(el.id==action.payload) ? {...el,done:!el.done} :el)};

        case EDITTASK:
            return {...state, todos:state.todos.map(el=>el.id===action.payload.id ? {...el,task:action.payload.newtask, done:action.payload.newstatus}:el)};

    
        default:
           return state;
    }

}

export default todoReducer;
