import { BLUBUTTFOUR, BLUBUTTONE, BLUBUTTTHREE, BLUBUTTTWO, DEADFOURBLU, DEADONEBLU, DEADTHREEBLU, DEADTWOBLU, RESETBLU } from "./actionType"




export const carryonebybluone =(data)=>(dispatch)=>{
    
    dispatch({type:BLUBUTTONE,payload:data})
}

export const carrytwobyblutwo =(data)=>(dispatch)=>{
    dispatch({type:BLUBUTTTWO,payload:data})
}

export const carrythreebybluthree =(data)=>(dispatch)=>{
    dispatch({type:BLUBUTTTHREE,payload:data})
}

export const carryfourbyblufour =(data)=>(dispatch)=>{
    dispatch({type:BLUBUTTFOUR,payload:data})
}


export const diedoneblu=(dispatch)=>{
    dispatch({type:DEADONEBLU})
}

export const diedtwoblu=(dispatch)=>{
    dispatch({type:DEADTWOBLU})
}

export const diedthreeblu=(dispatch)=>{
    dispatch({type:DEADTHREEBLU})
}

export const diedfourblu=(dispatch)=>{
    dispatch({type:DEADFOURBLU})
}

export const resetblu=(dispatch)=>{
    dispatch({type:RESETBLU})
}