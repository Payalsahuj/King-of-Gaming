// Dice.js
import React, { useState } from 'react';
import "../CSS/ludo.css"
import { Box, Button } from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import { Sixplay } from './Audiosix';



export const Diceblue = ({handlediceblueone,handledicebluetwo,handledicebluethree,handledicebluefour}) => {
  const [diceValue, setDiceValue] = useState(3);
  const [arr,setarr]=useState([1,1,1])
  const [sixplay,setsixplay]=useState(false)
  const store=useSelector((store)=>store.blureducer)
  const rollDice = () => {
   
    let newValue = Math.floor(Math.random() * 6) + 1;
    if (newValue == diceValue){
        if(newValue==6){
            newValue=Math.floor(Math.random() * 5) + 1
        }
        else if(newValue!==1){
            
        }
        else{
            newValue=newValue+1
        }
    }
    setarr(new Array(newValue).fill(1))
    setDiceValue(newValue)


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
  console.log(diceValue,sixplay)
 
  return (
    <Button isDisabled={store.ludodisable} className='dice' style={{margin:'auto',marginTop:'10%'}} padding={'26%'} onClick={rollDice}>
      {sixplay?<Sixplay/>:''}
      {arr.length}
    </Button>
  );
};


