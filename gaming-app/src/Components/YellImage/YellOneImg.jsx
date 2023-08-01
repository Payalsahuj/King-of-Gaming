import { Image } from "@chakra-ui/react"
import yellowstar from "../../Image/yellowstar.png"

import "../../CSS/token.css"

export const YellOneImg=({handelyellowone,eventhandleyel})=>{
    return <Image className={eventhandleyel?'blink_me':''}   pointerEvents={eventhandleyel?'':'none'} onClick={handelyellowone} src={yellowstar} _hover={{cursor:'pointer'}} position="absolute" w={{base:'30px',sm:'40px',md:'40px',lg:'60px'}} alt=""/>
    
}