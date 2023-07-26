import { Image } from "@chakra-ui/react"
import yellowstar from "../../Image/yellowstar.png"



export const YellThreeImg=({handelyellowthree})=>{
    return <Image onClick={handelyellowthree} _hover={{cursor:'pointer'}} src={yellowstar} position="absolute" paddingLeft={'0.7%'} w={'60px'} alt=""/>
    
}