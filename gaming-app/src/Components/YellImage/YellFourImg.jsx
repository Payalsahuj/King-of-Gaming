import { Image } from "@chakra-ui/react"
import yellowstar from "../../Image/yellowstar.png"
import "../../CSS/token.css"


export const YellFourImg=({handelyellowfour,eventhandleyel})=>{
    return <Image className={eventhandleyel?'blink_me':''}   pointerEvents={eventhandleyel?'':'none'} onClick={handelyellowfour} _hover={{cursor:'pointer'}} src={yellowstar} position="absolute" paddingLeft={{base:'0.6%',md:'1%'}} w={{base:'28px',sm:'38px',md:'38px',lg:'60px'}} alt=""/>
    
}