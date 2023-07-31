import { BLUBUTTFOUR, BLUBUTTONE, BLUBUTTTHREE, BLUBUTTTWO,DEADFOURBLU, DEADONEBLU, DEADTHREEBLU, DEADTWOBLU, RESETBLU } from "./actionType"



const initialstate={
   bluone:0,
   blutwo:0,
   bluthree:0,
   blufour:0
}

export const reducer=(state=initialstate,action)=>{
    switch(action.type){ 
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
        case RESETBLU:{
            return {
                bluone:0,
                blutwo:0,
                bluthree:0,
                blufour:0
             }
        }
        default:{
            return {...state}
        }
    }
}


