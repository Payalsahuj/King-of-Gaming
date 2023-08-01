import { Image } from "@chakra-ui/react"
import yellowstar from "../../Image/yellowstar.png"
import "../../CSS/token.css"


export const YellThreeImg=({handelyellowthree,eventhandleyel})=>{
    return <Image className={eventhandleyel?'blink_me':''}  pointerEvents={eventhandleyel?'':'none'} onClick={handelyellowthree} _hover={{cursor:'pointer'}} src={yellowstar} position="absolute" paddingLeft={{base:'0.3%',md:'0.7%'}} w={{base:'27px',sm:'27px',md:'40px',lg:'60px'}} alt=""/>
    
}