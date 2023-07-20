import {  STOPAUDIO, TOGGELAUDIO } from "./actionType"


export const toggel=(dispatch)=>{
    dispatch({type:TOGGELAUDIO})
}

export const stopaudio=(dispatch)=>{
    dispatch({type:STOPAUDIO})
}

