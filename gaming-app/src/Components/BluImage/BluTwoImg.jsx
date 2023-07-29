import { Image } from "@chakra-ui/react"
import blustar from "../../Image/blue.png"



export const BluTwoImg=({handelbluetwo,displaybludice})=>{
    return <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluetwo} src={blustar} _hover={{cursor:'pointer'}} position="absolute" paddingLeft={'0.4%'}   w={'60px'} alt=""/>
    
}