import AOS from "aos"
import "aos/dist/aos.css"
import welcometwo from "../Image/up-removebg-preview.png"
import { useEffect, useState } from "react"
import "../CSS/welcometwo.css"
import { useNavigate } from "react-router-dom"
import { Box, Image } from "@chakra-ui/react"

export const Welcometwo=()=>{
    const navigate=useNavigate("")
    useEffect(()=>{
        
        AOS.init({ duration: 1000 ,delay:0});
    },[])

    function handleclick(){
        
    navigate("/register")
    }
    
    return <Box onClick={handleclick} height={'100vh'}  padding={'15px'}  style={{display:'flex',flexDirection:'column'}} id="welcometwo"  >


        
        <Image padding={{base:'15px',sm:'0px'}} data-aos="zoom-out" data-aos-easing="ease-in-back" data-aos-delay="500"   src={welcometwo} alt="" />
        <h4 id="start" data-aos="zoom-out" data-aos-easing="ease-in-back" data-aos-delay="500">Tap to Start . . . </h4>
        {/* {wait?<Navigate to={'/register'}/>:''}  */}
    </Box>
}