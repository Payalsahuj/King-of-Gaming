import { Image } from "@chakra-ui/react"
import blustar from "../../Image/blue.png"



export const BluOneImg=({handelblueone,displaybludice})=>{
    return <Image pointerEvents={displaybludice?'':'none'} onClick={handelblueone} src={blustar} _hover={{cursor:'pointer'}} position="absolute" w={'60px'} alt=""/>
    
}