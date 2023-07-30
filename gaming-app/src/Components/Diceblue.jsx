// Dice.js
import React, { useEffect, useRef, useState } from 'react';
import "../CSS/diceblu.css"
import { Box, Button } from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import { Sixplay } from './Audiosix';
import { Jumpplay } from './Audiojump';



export const Diceblue = ({handelblueone,handelbluetwo,handelbluethree,handelbluefour,handelyeldice,handelbludice,jumpfunaudio,handlenonevent}) => {
  const [diceValue, setDiceValue] = useState(3);
  const buttonRef = useRef(null);
  const [arr,setarr]=useState([1,1,1])
  const [sixplay,setsixplay]=useState(false)
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
    if(newValue!==6 && store.bluone==0 && store.blutwo==0 && store.bluthree==0 && store.blufour==0){
      handelyeldice(true)
      handelbludice(false)
    }

    if(store.bluone+newValue===6 || store.blutwo+newValue===6 || store.bluthree+newValue===6 || store.blufour+newValue===6){
      let random = Math.floor(Math.random() * 4) + 1;
      setsixplay(true)
      if(random==1){
        handelblueone(newValue)
      }
      else if(random==2){
        handelbluetwo(newValue)
      }
      else if(random==3){
        handelbluethree(newValue)
      }
      else if(random==4){
        handelbluefour(newValue)
      } 
      
    
    }


    else if((store.bluone>=6 && store.bluone+newValue<=45)){  
      setsixplay(false)
      handelblueone(newValue)
    }
    else if(store.blutwo>=6 && store.blutwo+newValue<=45) {
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
    else if(store.bluone==45 &&  store.blutwo==45 && store.bluthree==45 && store.blufour==45){
      alert("winner")
    }
    else{
      handlenonevent()
    }
    
  };

 
  return (
    <Button ref={buttonRef} isDisabled={store.ludodisable} className='diceblu' style={{margin:'auto',marginTop:'10%'}}  onClick={rollDice}>
      {sixplay?<Sixplay/>:''}
      <h1 style={{width:"100%",margin:'auto'}}>{arr.length}</h1>
    </Button>
  );
};


