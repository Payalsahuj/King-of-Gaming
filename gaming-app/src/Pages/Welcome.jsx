import AOS from "aos"
import "aos/dist/aos.css"
import welcome from "../Image/gametion.webp"
import { useEffect,useState } from "react"


import { Navigate } from "react-router-dom"

export const Welcomeone=()=>{
    const [wait,setwait]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setwait(true)
        },5000)
        AOS.init({ duration: 2000 ,delay:500});
    },[])
    return <div style={{backgroundColor:"black",height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}} >
        <img style={{width:'620px'}} src={welcome} alt="" />
        
           {wait?<Navigate to={'/welcome'}/> :''} 
       
    </div>
}