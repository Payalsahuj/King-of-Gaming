import { Image } from "@chakra-ui/react"
import yellowstar from "../../Image/yellowstar.png"



export const YellTwoImg=({handelyellowtwo,displayyelldice})=>{
    console.log(displayyelldice)
    return <Image  pointerEvents={displayyelldice?'':'none'} onClick={handelyellowtwo} _hover={{cursor:'pointer'}} src={yellowstar} position="absolute" paddingLeft={'0.3%'} w={'60px'} alt=""/>
    
}