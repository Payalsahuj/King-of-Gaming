// Dice.js
import React, { useState } from 'react';
import "../CSS/ludo.css"
import { Box, Button } from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import { Sixplay } from './Audiosix';


export const Diceyellow = ({handlediceyellowone,handlediceyellowtwo,handlediceyellowthree,handlediceyellowfour,handelyeldice,handelbludice,handlenoneventyell}) => {
  const [diceValue, setDiceValue] = useState(3);
  const [arr,setarr]=useState([1,1,1])
  const [sixplay,setsixplay]=useState(false)

  const store=useSelector((store)=>store.yellreducer)
  const rollDice = () => {
 
    
    let newValue = Math.floor(Math.random() * 6) + 1;
   
    setarr(new Array(newValue).fill(1))
    setDiceValue(newValue)
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
    
    else{
      handlenoneventyell()
    }
  };
 
  return (
    <Button isDisabled={store.ludodisable} className='dice' style={{marginTop:'10%',marginLeft:'10%'}} padding={'26%'} onClick={rollDice}>
      {sixplay?<Sixplay/>:''}
      {arr.length}
    </Button>
  );
};


