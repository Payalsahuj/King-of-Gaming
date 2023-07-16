import AOS from "aos"
import "aos/dist/aos.css"
import welcometwo from "../Image/up-removebg-preview.png"
import { useEffect, useState } from "react"
import "../CSS/welcometwo.css"
import { useNavigate } from "react-router-dom"

export const Welcometwo=()=>{
    const navigate=useNavigate("")
    useEffect(()=>{
        
        AOS.init({ duration: 1000 ,delay:0});
    },[])

    function handleclick(){
        
    navigate("/register")
    }
    
    return <div onClick={handleclick}   style={{display:'flex',flexDirection:'column'}} id="welcometwo"  >


        
        <img data-aos="zoom-out" data-aos-easing="ease-in-back" data-aos-delay="500" style={{width:'620px'}} src={welcometwo} alt="" />
        <h3  style={{color:'#6098e2',fontSize:'27px'}} data-aos="zoom-out" data-aos-easing="ease-in-back" data-aos-delay="500">Tap to Start . . . </h3>
        {/* {wait?<Navigate to={'/register'}/>:''}  */}
    </div>
}