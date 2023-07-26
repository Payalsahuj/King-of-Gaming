import { CARRYFOUR, CARRYONE, CARRYTHREE, CARRYTWO, YELFOUR, YELONE, YELTHREE, YELTWO } from "./actionType"


const initialstate={
   carryone:0,
   yelone:0,
   yelonepresent:true,
   carrytwo:0,
   yeltwo:0,
   yeltwopresent:true,
   carrythree:0,
   yelthree:0,
   yelthreepresent:true,
   carryfour:0,
   yelfour:0,
   yelfourpresent:true,
   countthrow:0,
   ludodisable:false
}

export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        
        case CARRYONE:{
            return {...state,carryone:action.payload}
        }
        case CARRYTWO:{
            return {...state,carrytwo:action.payload}
        }
        case CARRYTHREE:{
            return {...state,carrythree:action.payload}
        }
        case CARRYFOUR:{
            return {...state,carryfour:action.payload}
        }
        case YELONE:{
            return {...state,yelone:action.payload,carryone:0,carrytwo:0,carrythree:0,carryfour:0} 
        }
        case YELTWO:{
            return {...state,yeltwo:action.payload,carrytwo:0,carryone:0,carrythree:0,carryfour:0} 
        }
        case YELTHREE:{
            return {...state,yelthree:action.payload,carrytwo:0,carryone:0,carrythree:0,carryfour:0} 
        }
        case YELFOUR:{
            return {...state,yelfour:action.payload,carrytwo:0,carryone:0,carrythree:0,carryfour:0} 
        }
        default:{
            return {...state}
        }
    }
}


