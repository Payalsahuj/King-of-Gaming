
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Image,
    Input,
    useToast,
  } from '@chakra-ui/react'
  import {AiFillSetting} from "react-icons/ai"
import { useEffect } from 'react'


import "../CSS/login.css"

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Logout=({handelout,dataid})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

    const toast=useToast()
    const navigate=useNavigate()
 
    useEffect(()=>{
       
        onOpen()
        
    },[])

    function handelclose(){
        handelout(false)
        onClose()
    }
  
    function handellogout(){
        
        axios.delete(`https://ludo-0qj0.onrender.com/user/delete/${dataid}`)
       .then((res)=>{
        toast({
            position:'top-right',
            title: 'Successfully Logout',
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
          localStorage.setItem("ludocoin",'')
        localStorage.setItem("ludotoken",'')
        localStorage.setItem("ludoemail",'')
        navigate("/register")
        })
       .catch((err)=>console.log(err))
   
        
    }
    
    return <>
    <Modal  isOpen={isOpen} onClose={handelclose}>
        <ModalOverlay />
        <ModalContent top={'25%'}  background={'linear-gradient(295deg, #3533CD, black)'} border={'5px solid yellow'} borderRadius={'15px'} color={'yellow'}>
          <ModalHeader display={'flex'}>Are You Sure ?</ModalHeader>
         
          <ModalBody>
           <p>After this process you have to Register Yourself again.</p>
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='orange' mr={3} onClick={handelclose}>
              Close
            </Button>
            <Button colorScheme='red' onClick={handellogout} >Logout</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

}