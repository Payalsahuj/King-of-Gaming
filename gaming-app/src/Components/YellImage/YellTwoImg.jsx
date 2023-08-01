import { Image } from "@chakra-ui/react"
import yellowstar from "../../Image/yellowstar.png"

import "../../CSS/token.css"

export const YellTwoImg=({handelyellowtwo,eventhandleyel})=>{
   
    return <Image className={eventhandleyel?'blink_me':''}  pointerEvents={eventhandleyel?'':'none'} onClick={handelyellowtwo} _hover={{cursor:'pointer'}} src={yellowstar} position="absolute" paddingLeft={{base:'0.6%',md:'0.3%'}} w={{base:'24px',sm:'40px',md:'40px',lg:'60px'}} alt=""/>
       
    
}