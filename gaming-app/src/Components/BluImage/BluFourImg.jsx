import { Image } from "@chakra-ui/react"
import blustar from "../../Image/blue.png"



export const BluFourImg=({handelbluefour,displaybludice})=>{
    return <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluefour} src={blustar} _hover={{cursor:'pointer'}} position="absolute" paddingLeft={{base:'0.2%',md:'1%'}} w={{base:'23px',sm:'38px',md:'38px',lg:'60px'}} alt=""/>
    
}