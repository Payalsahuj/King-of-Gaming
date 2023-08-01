import { Navigate } from "react-router-dom";



export const PrivateRoute = ({children})=>{
   

 let token=localStorage.getItem("ludotoken")
 let email=localStorage.getItem("ludoemail")

 if(token && email){
    return children
 }
 alert("Login Please !!")
 return  <Navigate to = "/register"/>
}