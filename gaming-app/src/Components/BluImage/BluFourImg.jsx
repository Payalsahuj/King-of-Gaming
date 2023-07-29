import { Image } from "@chakra-ui/react"
import blustar from "../../Image/blue.png"



export const BluFourImg=({handelbluefour,displaybludice})=>{
    return <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluefour} src={blustar} _hover={{cursor:'pointer'}} position="absolute" paddingLeft={'0.8%'} w={'60px'} alt=""/>
    
}