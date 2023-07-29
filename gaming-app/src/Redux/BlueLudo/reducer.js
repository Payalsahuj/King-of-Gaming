import { BLUBUTTFOUR, BLUBUTTONE, BLUBUTTTHREE, BLUBUTTTWO, CARRYFOURBLU, CARRYONEBLU, CARRYTHREEBLU, CARRYTWOBLU, DEADFOURBLU, DEADONEBLU, DEADTHREEBLU, DEADTWOBLU } from "./actionType"



const initialstate={
   blucarryone:0,
   bluone:0,
   bluonepresent:true,
   blucarrytwo:0,
   blutwo:0,
   blutwopresent:true,
   blucarrythree:0,
   bluthree:0,
   bluthreepresent:true,
   blucarryfour:0,
   blufour:0,
   blufourpresent:true,
   countthrow:0,
   ludodisable:false
}

export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        
        case CARRYONEBLU:{
            return {...state,blucarryone:action.payload}
        }
        case CARRYTWOBLU:{
            return {...state,blucarrytwo:action.payload}
        }
        case CARRYTHREEBLU:{
            return {...state,blucarrythree:action.payload}
        }
        case CARRYFOURBLU:{
            return {...state,blucarryfour:action.payload}
        }
        case BLUBUTTONE:{
            return {...state,bluone:action.payload,blucarryone:0,blucarrytwo:0,blucarrythree:0,blucarryfour:0} 
        }
        case BLUBUTTTWO:{
            return {...state,blutwo:action.payload,blucarrytwo:0,blucarryone:0,blucarrythree:0,blucarryfour:0} 
        }
        case BLUBUTTTHREE:{
            return {...state,bluthree:action.payload,blucarrytwo:0,blucarryone:0,blucarrythree:0,blucarryfour:0} 
        }
        case BLUBUTTFOUR:{
            return {...state,blufour:action.payload,blucarrytwo:0,blucarryone:0,blucarrythree:0,blucarryfour:0} 
        }
        case DEADONEBLU:{
            return {...state,bluone:0,blucarrytwo:0,blucarryone:0,blucarrythree:0,blucarryfour:0}
        }
        case DEADTWOBLU:{
            return {...state,blutwo:0,blucarrytwo:0,blucarryone:0,blucarrythree:0,blucarryfour:0}
        }
        case DEADTHREEBLU:{
            return {...state,bluthree:0,blucarrytwo:0,blucarryone:0,blucarrythree:0,blucarryfour:0}
        }
        case DEADFOURBLU:{
            return {...state,blufour:0,blucarrytwo:0,blucarryone:0,blucarrythree:0,blucarryfour:0}
        }
        default:{
            return {...state}
        }
    }
}


