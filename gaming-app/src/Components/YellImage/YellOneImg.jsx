import { Image } from "@chakra-ui/react"
import yellowstar from "../../Image/yellowstar.png"



export const YellOneImg=({handelyellowone})=>{
    return <Image onClick={handelyellowone} src={yellowstar} _hover={{cursor:'pointer'}} position="absolute" w={'60px'} alt=""/>
    
}