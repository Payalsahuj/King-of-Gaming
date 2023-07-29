// Dice.js
import React, { useEffect, useRef, useState } from 'react';
import "../CSS/diceblu.css"
import { Box, Button } from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import { Sixplay } from './Audiosix';



export const Diceblue = ({handlediceblueone,handledicebluetwo,handledicebluethree,handledicebluefour,handelyeldice,handelbludice}) => {
  const [diceValue, setDiceValue] = useState(3);
  const buttonRef = useRef(null);
  const [arr,setarr]=useState([1,1,1])
  const [sixplay,setsixplay]=useState(false)
  const store=useSelector((store)=>store.blureducer)
  useEffect(() => {
    // Check if the button exists before triggering the click event
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 2000);
    
  }, []);
  console.log("ok")
  const rollDice = () => {
   
    let newValue = Math.floor(Math.random() * 6) + 1;
    
    setarr(new Array(newValue).fill(1))
    setDiceValue(newValue)
    if(newValue!==6 && store.bluone==0 && store.blutwo==0 && store.bluthree==0 && store.blufour==0){
      handelyeldice(true)
      handelbludice(false)
    }

    if(store.bluone+newValue===6 || store.blutwo+newValue===6 || store.bluthree+newValue===6 || store.blufour+newValue===6){
      setsixplay(true)
      handlediceblueone(newValue)
      handledicebluetwo(newValue)
      handledicebluethree(newValue)
      handledicebluefour(newValue)
    
    }


    else if((store.bluone>=6 && store.bluone+newValue<=44)  ||  (store.blutwo>=6 && store.blutwo+newValue<=44) || (store.bluthree>=6 && store.bluthree+newValue<=44) || (store.blufour>=6 && store.blufour+newValue<=44)){
      
      setsixplay(false)
      handlediceblueone(newValue)
      handledicebluetwo(newValue)
      handledicebluethree(newValue)
      handledicebluefour(newValue)
    }


    else if(store.blucarryone+newValue===45){
      alert("winner")
    }
    
  };

 
  return (
    <Button ref={buttonRef} isDisabled={store.ludodisable} className='diceblu' style={{margin:'auto',marginTop:'10%'}}  onClick={rollDice}>
      {sixplay?<Sixplay/>:''}
      <h1 style={{width:"100%",margin:'auto'}}>{arr.length}</h1>
    </Button>
  );
};


