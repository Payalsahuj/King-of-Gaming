import { Navigate } from "react-router-dom";



export const PrivateRoute = ({children})=>{
   

 let token=localStorage.getItem("token")
 let email=localStorage.getItem("email")

 if(token && email){
    return children
 }
 alert("Login Please !!")
 return  <Navigate to = "/register"/>
}