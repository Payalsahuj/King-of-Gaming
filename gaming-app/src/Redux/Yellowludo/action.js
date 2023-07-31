import { CARRYFOUR, CARRYONE, CARRYTHREE, CARRYTWO, DEADFOURYEL, DEADONEYEL, DEADTHREEYEL, DEADTWOYEL, RESET, YELFOUR, YELONE, YELTHREE, YELTWO } from "./actionType"


export const carryone=(data)=>(dispatch)=>{
    dispatch({type:CARRYONE,payload:data})
}

export const carrytwo=(data)=>(dispatch)=>{
    dispatch({type:CARRYTWO,payload:data})
}


export const carrythree=(data)=>(dispatch)=>{
    dispatch({type:CARRYTHREE,payload:data})
}

export const carryfour=(data)=>(dispatch)=>{
    dispatch({type:CARRYFOUR,payload:data})
}




export const carryonebyyelone =(data)=>(dispatch)=>{
    
    dispatch({type:YELONE,payload:data})
}

export const carrytwobyyeltwo =(data)=>(dispatch)=>{
    dispatch({type:YELTWO,payload:data})
}

export const carrythreebyyelthree =(data)=>(dispatch)=>{
    
    dispatch({type:YELTHREE,payload:data})
}

export const carryfourbyyelfour =(data)=>(dispatch)=>{
    console.log(data)
    dispatch({type:YELFOUR,payload:data})
}




export const diedoneyel=(dispatch)=>{
    dispatch({type:DEADONEYEL})
}

export const diedtwoyel=(dispatch)=>{
    dispatch({type:DEADTWOYEL})
}

export const diedthreeyel=(dispatch)=>{
    dispatch({type:DEADTHREEYEL})
}

export const diedfouryel=(dispatch)=>{
    dispatch({type:DEADFOURYEL})
}

export const reset=(dispatch)=>{
    dispatch({type:RESET})
}