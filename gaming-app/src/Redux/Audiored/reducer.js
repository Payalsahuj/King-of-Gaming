import { TOGGELAUDIO } from "./actionType"


const initialstate={
   audio:false
}

export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case TOGGELAUDIO:{
            return {...state,audio:!state.audio}
        }
        default:{
            return {...state}
        }
    }
}


