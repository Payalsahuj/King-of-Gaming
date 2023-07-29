import { Image } from "@chakra-ui/react"
import yellowstar from "../../Image/yellowstar.png"



export const YellFourImg=({handelyellowfour,displayyelldice})=>{
    return <Image  pointerEvents={displayyelldice?'':'none'} onClick={handelyellowfour} _hover={{cursor:'pointer'}} src={yellowstar} position="absolute" paddingLeft={'1%'} w={'60px'} alt=""/>
    
}