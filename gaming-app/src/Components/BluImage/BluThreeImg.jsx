import { Image } from "@chakra-ui/react"
import blustar from "../../Image/blue.png"



export const BluThreeImg=({handelbluethree,displaybludice})=>{
    return <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluethree} src={blustar} _hover={{cursor:'pointer'}} position="absolute" paddingLeft={'0.1%'} w={{base:'23px',sm:'38px',md:'38px',lg:'60px'}} alt=""/>
    
}