import { Image } from "@chakra-ui/react"
import blustar from "../../Image/blue.png"



export const BluThreeImg=({handelbluethree})=>{
    return <Image onClick={handelbluethree} src={blustar} _hover={{cursor:'pointer'}} position="absolute" paddingLeft={'0.6%'} w={'60px'} alt=""/>
    
}