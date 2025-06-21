import React, { useReducer } from 'react';

let initialValue=0
let initialReact={LIKE:0,DISLIKE:0}

const counter = (state,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case'RESET':
            return 0
        default:
            return state
    }
}
const rev = (state,action) =>{
    switch(action.type){
        case 'LIKE':
            return {LIKE:state.LIKE+1,DISLIKE:state.DISLIKE}
        case 'DISLIKE':
            return {LIKE:state.LIKE,DISLIKE:state.DISLIKE-1}
        default:
            return state
    }
}
const Reducer = () =>{
    const [count,dispatch]=useReducer(counter,initialValue)
     const [review,redispatch]=useReducer(rev,initialReact)
    return(
    <div>
        <h1>Count:{count}</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
    <button onClick={()=>dispatch({type:"RESET"})}>↺</button>
    <h1>REVIEW</h1>
    <button onClick={()=>redispatch({type:"LIKE"})}>👍{review.LIKE}</button>
    <button onClick={()=>redispatch({type:"DISLIKE"})}>👎{review.DISLIKE}</button>
     </div>
    )
}
export default Reducer