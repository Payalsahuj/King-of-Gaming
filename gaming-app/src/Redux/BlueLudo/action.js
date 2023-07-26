import { BLUBUTTFOUR, BLUBUTTONE, BLUBUTTTHREE, BLUBUTTTWO, CARRYFOURBLU, CARRYONEBLU, CARRYTHREEBLU, CARRYTWOBLU } from "./actionType"


export const carryoneblu=(data)=>(dispatch)=>{
    dispatch({type:CARRYONEBLU,payload:data})
}

export const carrytwoblu=(data)=>(dispatch)=>{
    dispatch({type:CARRYTWOBLU,payload:data})
}

export const carrythreeblu=(data)=>(dispatch)=>{
    dispatch({type:CARRYTHREEBLU,payload:data})
}

export const carryfourblu=(data)=>(dispatch)=>{
    dispatch({type:CARRYFOURBLU,payload:data})
}






export const carryonebybluone =(data)=>(dispatch)=>{
    console.log(data)
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