// Dice.js
import React, { useState } from 'react';
import "../CSS/ludo.css"
import { Box, Button } from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import { Sixplay } from './Audiosix';


export const Diceyellow = ({handlediceyellowone,handlediceyellowtwo,handlediceyellowthree,handlediceyellowfour}) => {
  const [diceValue, setDiceValue] = useState(3);
  const [arr,setarr]=useState([1,1,1])
  const [sixplay,setsixplay]=useState(false)

  const store=useSelector((store)=>store.yellreducer)
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


    if(store.yelone+newValue===6 || store.yeltwo+newValue===6 || store.yelthree+newValue===6 || store.yelfour+newValue===6){
      setsixplay(true)
      handlediceyellowone(newValue)
      handlediceyellowtwo(newValue)
      handlediceyellowthree(newValue)
      handlediceyellowfour(newValue)
    }


    else if((store.yelone>=6 && store.yelone+newValue<=44)  ||  (store.yeltwo>=6 && store.yeltwo+newValue<=44) || (store.yelthree>=6 && store.yelthree+newValue<=44) || (store.yelfour>=6 && store.yelfour+newValue<=44)){
      setsixplay(false)
      handlediceyellowone(store.carryone+newValue)
      handlediceyellowtwo(store.carrytwo+newValue)
      handlediceyellowthree(store.carrythree+newValue)
      handlediceyellowfour(store.carryfour+newValue)
    }


    else if(store.carryone+newValue===45){
      alert("winner")
    }
    
  };
 
  return (
    <Button isDisabled={store.ludodisable} className='dice' style={{marginTop:'10%',marginLeft:'10%'}} padding={'26%'} onClick={rollDice}>
      {sixplay?<Sixplay/>:''}
      {arr.length}
    </Button>
  );
};


