import { STOPAUDIO, TOGGELAUDIO } from "./actionType"


const initialstate={
   audio:false,
   
}

export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case TOGGELAUDIO:{
            return {...state,audio:!state.audio}
        }
        case STOPAUDIO:{
            return {...state,audio:true}
        }
        
        default:{
            return {...state}
        }
    }
}


