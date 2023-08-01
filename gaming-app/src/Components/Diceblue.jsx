// Dice.js
import React, { useEffect, useRef, useState } from 'react';
import "../CSS/diceblu.css"
import { Box, Button, Image } from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import { Sixplay } from './Audiosix';
import { Jumpplay } from './Audiojump';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { reset } from '../Redux/Yellowludo/action';
import { resetblu } from '../Redux/BlueLudo/action';
import { useNavigate } from 'react-router-dom';
import { Winnerplay } from './Audiowinner';


export const Diceblue = ({handelblueone,handelbluetwo,handelbluethree,handelbluefour,handelyeldice,handelbludice,jumpfunaudio,handlenonevent}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [diceValue, setDiceValue] = useState(3);
  const buttonRef = useRef(null);
  const [arr,setarr]=useState([1,1,1])
  const [sixplay,setsixplay]=useState(false)
  const [winner,setwinner]=useState(false)

  const store=useSelector((store)=>store.blureducer)
  useEffect(() => {
    jumpfunaudio()
    // Check if the button exists before triggering the click event
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 2000);
    
  }, []);
 
  const rollDice = () => {
   
    let newValue = Math.floor(Math.random() * 6) + 1;
    
    setarr(new Array(newValue).fill(1))
    setDiceValue(newValue)
    console.log(newValue)
    setTimeout(() => {
      if(newValue!==6 && store.bluone==0 && store.blutwo==0 && store.bluthree==0 && store.blufour==0){
        setsixplay(false)
        handelyeldice(true)
        handelbludice(false)
      }
  
      if(store.bluone+newValue===6 || store.blutwo+newValue===6 || store.bluthree+newValue===6 || store.blufour+newValue===6){
        let random = Math.floor(Math.random() * 4) + 1;
        setsixplay(true)
        if(random===1){
          handelblueone(newValue)
        }
        else if(random===2){
          handelbluetwo(newValue)
        }
        else if(random===3){
          handelbluethree(newValue)
        }
        else if(random===4){
          handelbluefour(newValue)
        } 
        
      
      }
  
  
      else if(store.bluone>=6 && store.bluone+newValue<=45){  
        setsixplay(false)
        handelblueone(newValue)
      }
      else if(store.blutwo>=6 && store.blutwo+newValue<=45) {
        console.log(store.blutwo ,store.blutwo+newValue)
        setsixplay(false)
        handelbluetwo(newValue)
      }
      else if(store.bluthree>=6 && store.bluthree+newValue<=45){
        setsixplay(false)
        handelbluethree(newValue)
      }
      else if(store.blufour>=6 && store.blufour+newValue<=45){
        setsixplay(false)
        handelbluefour(newValue)
      }
      else if(store.bluone>=45 &&  store.blutwo>=45 && store.bluthree>=45 && store.blufour>=45){
        setwinner(true)
        onOpen()
        setTimeout(()=>{
          dispatch(reset)
          dispatch(resetblu)
          navigate("/home")
        },4000)
      }
      else{
        handlenonevent()
      }
    }, 1000);
    
  };

 
  return (
    <Button ref={buttonRef} isDisabled={store.ludodisable} className='diceblu' style={{margin:'auto',marginTop:'10%'}}  onClick={rollDice}>
      {sixplay?<Sixplay/>:''}
      {winner?<Winnerplay/>:''}
      <h1 style={{width:"100%",margin:'auto'}}>{arr.length}</h1>
      <Modal isOpen={isOpen} >
        <ModalOverlay />
        <ModalContent background={'linear-gradient(295deg, #3533CD, black)'} border={'5px solid yellow'} borderRadius={'15px'} top={'18%'} color={'yellow'}>
          <ModalHeader>Congratulations To Me 🎊🎊🎊</ModalHeader>
          
          <ModalBody display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
            <Box  w={'40%'}>
            <Image src={"https://th.bing.com/th/id/R.48ab7c928379bf8977e2e777a8a497a9?rik=Gh3BSTdyt0tMwA&riu=http%3a%2f%2fclipground.com%2fimages%2fbot-clipart-15.jpg&ehk=GuI7s9KxEO89qje4WERYOqLq6SrC67CXlLDoMT8dg9g%3d&risl=&pid=ImgRaw&r=0"} alt=""/>
            </Box>
           <Box w={'55%'} >
           <p>⭐⭐⭐⭐⭐</p>
            <p>Total coins: 2000</p>
            <p> Thank You</p> 
            <p>Challenge Me Again 😎</p>
           </Box>
          </ModalBody>

          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Button>
  );
};


