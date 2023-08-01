// Dice.js
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
import React, { useState } from 'react';
import "../CSS/ludo.css"
import { Box, Button,Image } from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import { Sixplay } from './Audiosix';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { reset } from '../Redux/Yellowludo/action';
import { resetblu } from '../Redux/BlueLudo/action';
import { Winnerplay } from './Audiowinner';


export const Diceyellow = ({handlediceyellowone,handlediceyellowtwo,handlediceyellowthree,handlediceyellowfour,handelyeldice,handelbludice,handlenoneventyell,diceeventhandle}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const param=useParams()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [diceValue, setDiceValue] = useState(3);
  const [arr,setarr]=useState([1,1,1])
  const [sixplay,setsixplay]=useState(false)
  const [winner,setwinner]=useState(false)
  

  const [data,setdata]=useState({})
  const store=useSelector((store)=>store.yellreducer)
  
  const localcoin=localStorage.getItem("ludocoin")
  
  

  const rollDice = () => {
    let newValue = Math.floor(Math.random() * 6) + 1;
   
    setarr(new Array(newValue).fill(1))
    setDiceValue(newValue)
    console.log(newValue)
    setTimeout(()=>{
      if(newValue!==6 && store.yelone==0 && store.yeltwo==0 && store.yelthree==0 && store.yelfour==0){
        handelyeldice(false)
        handelbludice(true)
  
      }
  
  
      if(store.yelone+newValue===6 || store.yeltwo+newValue===6 || store.yelthree+newValue===6 || store.yelfour+newValue===6){
       
        setsixplay(true)
        handlediceyellowone(newValue)
        handlediceyellowtwo(newValue)
        handlediceyellowthree(newValue)
        handlediceyellowfour(newValue)
      }
  
  
      else if((store.yelone>=6 && store.yelone+newValue<=45)  ||  (store.yeltwo>=6 && store.yeltwo+newValue<=45) || (store.yelthree>=6 && store.yelthree+newValue<=45) || (store.yelfour>=6 && store.yelfour+newValue<=45)){
        
        setsixplay(false)
        handlediceyellowone(store.carryone+newValue)
        handlediceyellowtwo(store.carrytwo+newValue)
        handlediceyellowthree(store.carrythree+newValue)
        handlediceyellowfour(store.carryfour+newValue)
        
      }
      else if(store.yelone>=45 &&  store.yeltwo>=45 && store.yelthree>=45 && store.yelfour>=45){
        patchdata()
        setwinner(true)
        onOpen()
      }
      
      else{
        handlenoneventyell()
      }
    },500)
  };
  
  
  function patchdata(){
        let update=+localcoin+50
        
    axios.patch(`https://ludo-0qj0.onrender.com/user/update/${param.id}`,{coin:update})
    .then((res)=>{
      setdata(res.data.data)
      localStorage.setItem("ludocoin",update)
      handlewinner()
      
    })
    .catch((err)=>console.log(err))
   }

  function handlewinner(){
    setTimeout(()=>{
      dispatch(reset)
      dispatch(resetblu)
      navigate("/home")
    },4000)
  }

 
  return (<>
  <Box w={'100%'} pointerEvents={diceeventhandle?'':'none'} display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={rollDice}>
  <Button pointerEvents={diceeventhandle?'':'none'} isDisabled={store.ludodisable} className='dice'   >
      {sixplay?<Sixplay/>:''}
      <h1 style={{width:'100%',height:'100%'}}>{arr.length}</h1>
      {winner?<Winnerplay/>:''}
      
    </Button>
  </Box>
   
    <Modal isOpen={isOpen} >
        <ModalOverlay />
        <ModalContent background={'linear-gradient(295deg, #3533CD, black)'} border={'5px solid yellow'} borderRadius={'15px'} top={'18%'} color={'yellow'}>
          <ModalHeader>Congratulations {data.name} 🎊🎊🎊</ModalHeader>
          
          <ModalBody display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
            <Box  w={'40%'}>
            <Image src={data?.image} alt=""/>
            </Box>
           <Box w={'55%'} >
            {localcoin===0?<p>0</p>
            :localcoin<=50?<p>⭐</p>
            :localcoin<=200?<p>⭐⭐</p>
            :localcoin<=400?<p>⭐⭐⭐</p>
            :localcoin<=800?<p>⭐⭐⭐⭐</p>
            :localcoin<=1000?<p>⭐⭐⭐⭐⭐</p>
            :localcoin<=1500?<p>💎</p>
            :localcoin<=2500?<p>💎💎</p>
            :localcoin<=3500?<p>💎💎💎</p>
            :localcoin<=4500?<p>💎💎💎💎</p>
            :<p>💎💎💎💎💎</p>
          }
           {/* <p>⭐⭐⭐⭐⭐</p> */}
            <p>Total coins: {localcoin}</p>
            <p> Thank You</p> 
            <p>Challenge the Bot Again 😎</p>
           </Box>
          </ModalBody>

          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};


