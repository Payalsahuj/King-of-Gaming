import { Box, Divider, Heading, Image } from "@chakra-ui/react"
import { Startplay } from "../Components/Startaudio"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import yellowstar from "../Image/yellowstar.png"
import greenstar from "../Image/greenstar.png"
import bluestar from '../Image/blue.png'
import redstar from "../Image/redstar.png"
import "../CSS/ludo.css"
import { Diceblue } from "../Components/Diceblue"
import { Diceyellow } from "../Components/Diceyellow"
import { useDispatch, useSelector } from "react-redux"
import { YellOneImg } from "../Components/YellImage/YellOneImg"
import { carryfour, carryfourbyyelfour, carryone, carryonebyyelone, carrythree, carrythreebyyelthree, carrytwo, carrytwobyyeltwo, diedfouryel, diedoneyel, diedthreeyel } from "../Redux/Yellowludo/action"
import { YellTwoImg } from "../Components/YellImage/YellTwoImg"
import { YellThreeImg } from "../Components/YellImage/YellThreeImg"
import { YellFourImg } from "../Components/YellImage/YellFourImg"
import { Jumpplay } from "../Components/Audiojump"
import {  carryfourbyblufour,  carryonebybluone,  carrythreebybluthree, carrytwobyblutwo, diedfourblu, diedoneblu, diedthreeblu, diedtwoblu } from "../Redux/BlueLudo/action"
import { BluOneImg } from "../Components/BluImage/BluOneImg"
import { BluTwoImg } from "../Components/BluImage/BluTwoImg"
import { BluThreeImg } from "../Components/BluImage/BluThreeImg"
import { BluFourImg } from "../Components/BluImage/BluFourImg"
import { Deadplay } from "../Components/Audiodead"
import {GiPodiumWinner} from "react-icons/gi"


export const Ludo = () => {
    
    const store=useSelector((store)=>store.yellreducer)
    const storeblu=useSelector((store)=>store.blureducer)

    const [displaybludice,setdisplaybludice]=useState(false)
    const [displayyelldice,setdisplayyelldice]=useState(true)
    const [deadaudio,setdeadaudio]=useState(false)
 
    const [data, setdata] = useState({})
    const [diceeventhandle,setdiceeventhandle]=useState(true)
    const [eventhandleyel,seteventhandleyel]=useState(false)

    const [startaudio, setstartaudio] = useState(false)
    const [jumpaudio,setjumpaudio]=useState(false)
    const [jumpaudioyel,setjumpaudioyel]=useState(false)
    const [yelimgone,setyelimgone]=useState(store.yelone)
    const [yelimgtwo,setyelimgtwo]=useState(store.yeltwo)
    const [yelimgthree,setyelimgthree]=useState(store.yelthree)
    const [yelimgfour,setyelimgfour]=useState(store.yelfour)


    const [bluimgone,setbluimgone]=useState(storeblu.bluone)
    const [bluimgtwo,setbluimgtwo]=useState(storeblu.blutwo)
    const [bluimgthree,setbluimgthree]=useState(storeblu.bluthree)
    const [bluimgfour,setbluimgfour]=useState(storeblu.blufour)



    const email = localStorage.getItem("ludoemail")
    const dispatch=useDispatch()
    function getdata() {

        axios("https://ludo-0qj0.onrender.com/user")
            .then((res) => {
                res.data.msg.forEach((el) => {
                    if (el.email === email) {
                        localStorage.setItem("ludocoin",el.coin)
                        setdata(el)
                    }
                })
            })
            .catch((err) => console.log(err))
    }
      
    useEffect(() => {
        getdata()
        setstartaudio(true)
    }, [])

    
    

    function handelbludice(visiblity){
        setdisplaybludice(visiblity)
    }
    function handelyeldice(visiblity){
        setdisplayyelldice(visiblity)
    }
    function jumpfunaudio(){
        setjumpaudio(false)
    }
    function eventhandleofdice(val){
        setdiceeventhandle(val)
    }
    function funeventhandleyel(vale){
        seteventhandleyel(vale)
    }




    function handlediceyellowone(data){
        funeventhandleyel(true)
        if(data!==6){
            eventhandleofdice(false)
            
            
        }
        
            dispatch(carryone(data))
            
        setjumpaudioyel(false)
        setdeadaudio(false)
        
    } 
    function handlediceyellowtwo(data){
        funeventhandleyel(true)
        if(data!==6){
            eventhandleofdice(false) 
            
        }
        dispatch(carrytwo(data))
        
        setjumpaudioyel(false)
        setdeadaudio(false)
        
    }
    function handlediceyellowthree(data){
        funeventhandleyel(true)
        if(data!==6){
            eventhandleofdice(false) 
       
        }
        dispatch(carrythree(data))
    
        setjumpaudioyel(false)
        setdeadaudio(false)
    }
    function handlediceyellowfour(data){
        funeventhandleyel(true)
        if(data!==6){
            eventhandleofdice(false) 
            
        }
        dispatch(carryfour(data))
     
        setjumpaudioyel(false)
        setdeadaudio(false)
    }


   

    

    function handelyellowone(){
        if((store.yelone==0 && store.carryone===6) || store.yelone>=6 ){
            eventhandleofdice(true) 
            funeventhandleyel(false)
            setjumpaudioyel(true)
            let steps=store.carryone+store.yelone
            setyelimgone(steps)
            if(steps<41 && Math.abs(steps-storeblu.bluone)===18 && storeblu.bluone!==0 && storeblu.bluone<41){
                setdeadaudio(true)
                setbluimgone(0)
                dispatch(diedoneblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blutwo)===18 && storeblu.blutwo!==0 && storeblu.blutwo<41){
                setdeadaudio(true)
                setbluimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.bluthree)===18 && storeblu.bluthree!==0 && storeblu.bluthree<41){
                setdeadaudio(true)
                setbluimgthree(0)
                dispatch(diedthreeblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blufour)===18 && storeblu.blufour!==0 && storeblu.blufour<41){
                setdeadaudio(true)
                setbluimgfour(0)
                dispatch(diedfourblu)
            }
            if(store.carryone!==6){
                handelbludice(true)
                handelyeldice(false)
                
                dispatch(carryonebyyelone(steps))
            }
            else{
                
            dispatch(carryonebyyelone(steps))
            }
            
        }
        
        
    }

    function handelyellowtwo(){
        if((store.yeltwo==0 && store.carrytwo==6)  || store.yeltwo>=6){
            eventhandleofdice(true) 
            funeventhandleyel(false)
            setjumpaudioyel(true)
            let steps=store.carrytwo+store.yeltwo
            setyelimgtwo(steps)
            if(steps<41 && Math.abs(steps-storeblu.bluone)===18 && storeblu.bluone!==0 && storeblu.bluone<41){
                setdeadaudio(true)
                setbluimgone(0)
                dispatch(diedoneblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blutwo)===18 && storeblu.blutwo!==0 && storeblu.blutwo<41){
                setdeadaudio(true)
                setbluimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.bluthree)===18 && storeblu.bluthree!==0 && storeblu.bluthree<41){
                setdeadaudio(true)
                setbluimgthree(0)
                dispatch(diedthreeblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blufour)===18 && storeblu.blufour!==0 && storeblu.blufour<41){
                setdeadaudio(true)
                setbluimgfour(0)
                dispatch(diedfourblu)
            }
            if(store.carrytwo!==6){
                handelbludice(true)
                handelyeldice(false)
                dispatch(carrytwobyyeltwo(steps))
            }
            else{
            dispatch(carrytwobyyeltwo(steps))
            }
            
            
        }
        
        
    }
    function handelyellowthree(){
        if((store.yelthree==0 && store.carrythree==6) || store.yelthree>=6){
            eventhandleofdice(true) 
            funeventhandleyel(false)
            setjumpaudioyel(true)
            let steps=store.carrythree+store.yelthree
            setyelimgthree(steps)
            if(steps<41 && Math.abs(steps-storeblu.bluone)===18 && storeblu.bluone!==0 && storeblu.bluone<41){
                setdeadaudio(true)
                setbluimgone(0)
                dispatch(diedoneblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blutwo)===18 && storeblu.blutwo!==0 && storeblu.blutwo<41){
                setdeadaudio(true)
                setbluimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.bluthree)===18 && storeblu.bluthree!==0 && storeblu.bluthree<41){
                setdeadaudio(true)
                setbluimgthree(0)
                dispatch(diedthreeblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blufour)===18 && storeblu.blufour!==0 && storeblu.blufour<41){
                setdeadaudio(true)
                setbluimgfour(0)
                dispatch(diedfourblu)
            }
            if(store.carrythree!==6){
                handelbludice(true)
                handelyeldice(false)
                dispatch(carrythreebyyelthree(steps))
            }
            else{
                dispatch(carrythreebyyelthree(steps))
            }
        }
        
    }
    function handelyellowfour(){
 
        if((store.yelfour==0 && store.carryfour==6) || store.yelfour>=6){
            eventhandleofdice(true) 
            funeventhandleyel(false)
            setjumpaudioyel(true)
            let steps=store.carryfour+store.yelfour
            setyelimgfour(steps)
            if(steps<41 && Math.abs(steps-storeblu.bluone)===18 && storeblu.bluone!==0 && storeblu.bluone<41){
                setdeadaudio(true)
                setbluimgone(0)
                dispatch(diedoneblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blutwo)===18 && storeblu.blutwo!==0 && storeblu.blutwo<41){
                setdeadaudio(true)
                setbluimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.bluthree)===18 && storeblu.bluthree!==0 && storeblu.bluthree<41){
                setdeadaudio(true)
                setbluimgthree(0)
                dispatch(diedthreeblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blufour)===18 && storeblu.blufour!==0 && storeblu.blufour<41){
                setdeadaudio(true)
                setbluimgfour(0)
                dispatch(diedfourblu)
            }
            if(store.carryfour!==6){
                handelbludice(true)
                handelyeldice(false)
                dispatch(carryfourbyyelfour(steps))
            }
            else{
                dispatch(carryfourbyyelfour(steps)) 
            }
            
        }
      
        
    }


    function handlenoneventyell(){
        handelbludice(true)
                handelyeldice(false)
    }




    function handelblueone(data){
       
        if((storeblu.bluone==0 && data==6) || storeblu.bluone>=6 ){
            setjumpaudio(true)
            let steps=data+storeblu.bluone
            setbluimgone(steps)
            if(steps<41 && Math.abs(steps-store.yelone)===18 && store.yelone!==0 && store.yelone<41){
                setdeadaudio(true)
                setyelimgone(0)
                dispatch(diedoneyel)
            }
            if(steps<41 && Math.abs(steps-store.yeltwo)===18 && store.yeltwo!==0 && store.yeltwo<41){
                setdeadaudio(true)
                setyelimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-store.yelthree)===18 && store.yelthree!==0 && store.yelthree<41){
                setdeadaudio(true)
                setyelimgthree(0)
                dispatch(diedthreeyel)
            }
            if(steps<41 && Math.abs(steps-store.yelfour)===18 && store.yelfour!==0 && store.yelfour<41){
                setdeadaudio(true)
                setyelimgfour(0)
                dispatch(diedfouryel)
            }
            if(data!==6){
                handelbludice(false)
                handelyeldice(true)
                dispatch(carryonebybluone(steps))
            }
            else{
                handelbludice(false)
                handelyeldice(true)
                dispatch(carryonebybluone(steps))
            }
            
        }
       
    }

    function handelbluetwo(data){
        if((storeblu.blutwo==0 && data==6) || storeblu.blutwo>=6){
            setjumpaudio(true)
            let steps=data+storeblu.blutwo
            setbluimgtwo(steps)
            if(steps<41 && Math.abs(steps-store.yelone)===18 && store.yelone!==0 && store.yelone<41){
                setdeadaudio(true)
                setyelimgone(0)
                dispatch(diedoneyel)
            }
            if(steps<41 && Math.abs(steps-store.yeltwo)===18 && store.yeltwo!==0 && store.yeltwo<41){
                setdeadaudio(true)
                setyelimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-store.yelthree)===18 && store.yelthree!==0 && store.yelthree<41){
                setdeadaudio(true)
                setyelimgthree(0)
                dispatch(diedthreeyel)
            }
            if(steps<41 && Math.abs(steps-store.yelfour)===18 && store.yelfour!==0 && store.yelfour<41){
                setdeadaudio(true)
                setyelimgfour(0)
                dispatch(diedfouryel)
            }
            if(data!==6){
                handelbludice(false)
                handelyeldice(true)
                dispatch(carrytwobyblutwo(steps))
            }
            else{
                handelbludice(false)
                handelyeldice(true)
            dispatch(carrytwobyblutwo(steps))

            }
        }
       
    }
    function handelbluethree(data){
        if((storeblu.bluthree==0 && data==6) || storeblu.bluthree>=6 ){
            setjumpaudio(true)
            let steps=data+storeblu.bluthree
            setbluimgthree(steps)
            if(steps<41 && Math.abs(steps-store.yelone)===18 && store.yelone!==0 && store.yelone<41){
                setdeadaudio(true)
                setyelimgone(0)
                dispatch(diedoneyel)
            }
            if(steps<41 && Math.abs(steps-store.yeltwo)===18 && store.yeltwo!==0  && store.yeltwo<41){
                setdeadaudio(true)
                setyelimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-store.yelthree)===18 && store.yelthree!==0  && store.yelthree<41){
                setdeadaudio(true)
                setyelimgthree(0)
                dispatch(diedthreeyel)
            }
            if(steps<41 && Math.abs(steps-store.yelfour)===18 && store.yelfour!==0  && store.yelfour<41){
                setdeadaudio(true)
                setyelimgfour(0)
                dispatch(diedfouryel)
            }
            if(data!==6){
                handelbludice(false)
                handelyeldice(true)
                dispatch(carrythreebybluthree(steps))
            }
            else{
                handelbludice(false)
                handelyeldice(true)
                dispatch(carrythreebybluthree(steps))
            }
        }
        
        
    }
    function handelbluefour(data){
       
        if((storeblu.blufour==0 && data==6) || storeblu.blufour>=6 ){
            setjumpaudio(true)
            let steps=data+storeblu.blufour
            setbluimgfour(steps)
           
            if(steps<41 && Math.abs(steps-store.yelone)===18 && store.yelone!==0 && store.yelone<41){
                setdeadaudio(true)
                setyelimgone(0)
                dispatch(diedoneyel)
            }
            if(steps<41 && Math.abs(steps-store.yeltwo)===18 && store.yeltwo!==0 && store.yeltwo<41){
                setdeadaudio(true)
                setyelimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-store.yelthree)===18 && store.yelthree!==0 && store.yelthree<41){
                setdeadaudio(true)
                setyelimgthree(0)
                dispatch(diedthreeyel)
            }
            if(steps<41 && Math.abs(steps-store.yelfour)===18 && store.yelfour!==0 && store.yelfour<41){
                setdeadaudio(true)
                setyelimgfour(0)
                dispatch(diedfouryel)
            }
            if(data!==6){
                handelbludice(false)
                handelyeldice(true)
                dispatch(carryfourbyblufour(steps))
            }
            else{
                handelbludice(false)
                handelyeldice(true)
                dispatch(carryfourbyblufour(steps))
            }

        }
        
    }
    function handlenonevent(){
        handelbludice(false)
        handelyeldice(true) 
    }
    // console.log(storeblu)
    console.log(store)
    // console.log(displayyelldice)
  


    return <Box height={'100vh'} background={'linear-gradient(295deg, #3533CD, black)'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
        {jumpaudio?<Jumpplay/>:''}
        {jumpaudioyel?<Jumpplay/>:''}

        {deadaudio?<Deadplay/>:''}
       
        <Box
            w={{base:'100%',sm:'90%',md:'80%',lg:'70%'}}
            h={'95%'}
            // border={'2px solid yellow'} 
            display={'flex'}
            
            justifyContent={'space-between'}
            alignItems={'center'} >
            {startaudio ? <Startplay /> : ''}
            
            <Box w={{base:'45%',sm:'30%',md:'11%'}} h={{base:'12%',md:'35%'}} position={{base:'absolute',md:'relative'}} display={'flex'} flexDirection={{base:'row',md:'column'}} top={{base:'10%',sm:'5%',md:'-33%'}} >
                <Box h={{base:'100%',md:'50%'}}  w={{base:'50%',md:'100%'}}>
                    <Image w={'100%'} h={'100%'}  src={'https://th.bing.com/th/id/R.48ab7c928379bf8977e2e777a8a497a9?rik=Gh3BSTdyt0tMwA&riu=http%3a%2f%2fclipground.com%2fimages%2fbot-clipart-15.jpg&ehk=GuI7s9KxEO89qje4WERYOqLq6SrC67CXlLDoMT8dg9g%3d&risl=&pid=ImgRaw&r=0'} objectFit={'cover'} alt="" />
                </Box>
                <Box  h={{base:'100%',md:'42%'}} w={{base:'50%',md:'100%'}} backgroundColor={'#d8ba11'} borderRadius={'15px'} display={'flex'}  alignItems={'center'} justifyContent={"center"}>
                    <Box h={'70%'} w={'75%'} borderRadius={'15px'} backgroundColor={'white'} display={'flex'}  justifyContent={'center'} alignItems={'center'}>
                        <Box display={displaybludice?'flex':'none'} w={'100%'} h={'100%'} >
                            {displaybludice?<Diceblue handelblueone={handelblueone} handelbluetwo={handelbluetwo} handelbluethree={handelbluethree} handelbluefour={handelbluefour} handelyeldice={handelyeldice} handelbludice={handelbludice} jumpfunaudio={jumpfunaudio} handlenonevent={handlenonevent}/>:''}
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box w={{base:'100%',sm:'99%',md:'75%'}} h={{base:'50%',sm:'70%',md:'99%'}} border={'6px solid green'} >



                <Box w={'100%'} h={'100%'} border={'4px solid black'} backgroundColor={'white'} display={'grid'} gridTemplateColumns={'repeat(11,1fr)'} >
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===30?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel} />:''}
                    {yelimgtwo===30?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel} />:''}
                    {yelimgthree===30?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel} />:''}
                    {yelimgfour===30?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel} />:''}
                    {bluimgone===12?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===12?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===12?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===12?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===31?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===31?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel} />:''}
                    {yelimgthree===31?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel} />:''}
                    {yelimgfour===31?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel} />:''}
                    {bluimgone===13?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===13?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===13?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===13?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===32?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel} />:''}
                    {yelimgtwo===32?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel} />:''}
                    {yelimgthree===32?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel} />:''}
                    {yelimgfour===32?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===14?<BluOneImg handelblueone={handelblueone}  displaybludice={displaybludice} />:''}
                    {bluimgtwo===14?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===14?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===14?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===29?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===29?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===29?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===29?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===11?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===11?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===11?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===11?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}>
                    {yelimgone===33?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel} />:''}
                    {yelimgtwo===33?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===33?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===33?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===15?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===15?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===15?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===15?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>




                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===28?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===28?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===28?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===28?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===10?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===10?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===10?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===10?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===34?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===34?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===34?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===34?<YellFourImg handelyellowfour={handelyellowfour}  eventhandleyel={eventhandleyel} />:''}
                    {bluimgone===16?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===16?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===16?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===16?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===23?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===23?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===23?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===23?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {yelimgone===24?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===24?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===24?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===24?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===6?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===6?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===6?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===6?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===25?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===25?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===25?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===25?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===7?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===7?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===7?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===7?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===26?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===26?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===26?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===26?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===8?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===8?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===8?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===8?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} >
                    {yelimgone===27?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===27?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===27?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===27?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===9?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===9?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===9?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===9?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===35?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===35?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===35?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===35?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===17?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===17?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===17?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===17?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===36?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===36?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===36?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===36?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===18?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===18?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===18?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===18?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===37?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===37?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===37?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===37?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===19?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===19?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===19?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===19?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===38?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===38?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===38?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===38?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===20?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===20?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===20?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===20?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===39?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===39?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===39?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===39?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===21?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===21?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===21?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===21?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===22?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===22?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===22?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===22?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===40?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===40?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===40?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===40?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {bluimgone===41?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===41?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===41?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===41?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {bluimgone===42?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===42?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===42?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===42?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {bluimgone===43?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===43?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===43?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===43?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {bluimgone===44?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===44?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===44?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===44?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===44?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}  
                    {yelimgtwo===44?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===44?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===44?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===43?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel} />:''} 
                    {yelimgtwo===43?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===43?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===43?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===42?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}  
                    {yelimgtwo===42?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===42?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===42?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===41?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===41?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===41?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===41?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===40?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===40?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===40?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===40?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===22?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===22?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===22?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===22?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===21?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===21?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===21?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===21?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===39?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===39?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===39?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===39?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===20?<YellOneImg handelyellowone={handelyellowone}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===20?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===20?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===20?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===38?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===38?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===38?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===38?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===19?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===19?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===19?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===19?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===37?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===37?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===37?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===37?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===18?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===18?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===18?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===18?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===36?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===36?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===36?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===36?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===17?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===17?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===17?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===17?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===35?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===35?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===35?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===35?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===9?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===9?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===9?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===9?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===27?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===27?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===27?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===27?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===8?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===8?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===8?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===8?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===26?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===26?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===26?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===26?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} >
                    {yelimgone===7?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===7?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===7?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===7?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===25?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===25?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===25?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===25?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} backgroundColor={'yellow'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===6?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===6?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===6?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===6?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===24?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===24?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===24?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===24?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {bluimgone===23?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===23?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===23?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===23?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>






                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===16?<YellOneImg handelyellowone={handelyellowone}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===16?<YellTwoImg handelyellowtwo={handelyellowtwo}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===16?<YellThreeImg handelyellowthree={handelyellowthree}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===16?<YellFourImg handelyellowfour={handelyellowfour}  eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===34?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===34?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===34?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===34?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===10?<YellOneImg handelyellowone={handelyellowone}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===10?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===10?<YellThreeImg handelyellowthree={handelyellowthree}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===10?<YellFourImg handelyellowfour={handelyellowfour}  eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===28?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===28?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===28?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===28?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}>
                    {yelimgone===15?<YellOneImg handelyellowone={handelyellowone}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===15?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===15?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===15?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===33?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===33?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===33?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===33?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===11?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===11?<YellTwoImg handelyellowtwo={handelyellowtwo} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===11?<YellThreeImg handelyellowthree={handelyellowthree} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===11?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===29?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===29?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===29?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===29?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>




                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===14?<YellOneImg handelyellowone={handelyellowone} eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===14?<YellTwoImg handelyellowtwo={handelyellowtwo}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===14?<YellThreeImg handelyellowthree={handelyellowthree}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===14?<YellFourImg handelyellowfour={handelyellowfour} eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===32?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===32?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===32?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===32?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===13?<YellOneImg handelyellowone={handelyellowone}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===13?<YellTwoImg handelyellowtwo={handelyellowtwo}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===13?<YellThreeImg handelyellowthree={handelyellowthree}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===13?<YellFourImg handelyellowfour={handelyellowfour}  eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===31?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===31?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===31?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===31?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===12?<YellOneImg handelyellowone={handelyellowone}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgtwo===12?<YellTwoImg handelyellowtwo={handelyellowtwo}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgthree===12?<YellThreeImg handelyellowthree={handelyellowthree}  eventhandleyel={eventhandleyel}/>:''}
                    {yelimgfour===12?<YellFourImg handelyellowfour={handelyellowfour}  eventhandleyel={eventhandleyel}/>:''}
                    {bluimgone===30?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===30?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===30?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===30?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>



                    <Box h={{base:'15.5%',sm:'21.5%',md:'31%'}} w={{base:'35%',sm:'32%',md:'22%',lg:'18.7%'}}  position={'absolute'}  borderRight={'2px solid black'} borderBottom={'2px solid black'} backgroundColor={'#1E88E5'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                           <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image pointerEvents={displaybludice?'':'none'} onClick={handelblueone} display={bluimgone===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}}  w={{base:'28%',sm:'29%',md:'29%',lg:'28%',xl:'22%'}} top={{base:'19%',sm:'18%',md:'21%',lg:'23%',xl:'22%'}} position={'absolute'} left={{base:'19%',sm:'19%',md:'20%',lg:'20%',xl:'23%'}} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'}  borderRadius={'50%'}>
                                <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluetwo} display={bluimgtwo===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={{base:'28%',sm:'29%',md:'29%',lg:'28%',xl:'21%'}} top={{base:'19%',sm:'18%',md:'21%',lg:'23%',xl:'22%'}} position={'absolute'} left={'54%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluethree} display={bluimgthree===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={{base:'28%',sm:'29%',md:'29%',lg:'28%',xl:'22%'}} top={{base:'50%',sm:'50%',md:'54%',lg:'54%',xl:'49%'}} position={'absolute'} left={'54%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluefour} display={bluimgfour===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={{base:'28%',sm:'29%',md:'29%',lg:'28%',xl:'22%'}} top={{base:'50%',sm:'50%',md:'54%',lg:'54%',xl:'49%'}} position={'absolute'} left={{base:'19%',sm:'19%',md:'20%',lg:'20%',xl:'23%'}} alt=""/>
                            </Box>
                        </Box>

                    </Box>
                    <Box h={{base:'15%',sm:'21.5%',md:'31%'}} w={{base:'35%',sm:'32%',md:'22%',lg:'18.7%'}} position={'absolute'} right={{base:'2.5%',sm:'6%',md:'20.5%',lg:'24%'}} borderLeft={'2px solid black'} borderBottom={'2px solid black'} backgroundColor={'red'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'red'} borderRadius={'50%'}>
                                <Image src={redstar} w={{base:'35%',lg:'30%'}} top={'15%'} position={'absolute'} left={'19%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}>
                                <Image src={redstar} w={{base:'35%',lg:'30%'}} top={'15%'} position={'absolute'} left={'52%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}>
                                <Image src={redstar} w={{base:'35%',lg:'30%'}} top={'45%'} position={'absolute'} left={'52%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}>
                                <Image src={redstar}w={{base:'35%',lg:'30%'}}  top={'45%'} position={'absolute'} left={'19%'} alt=""/>
                            </Box>
                        </Box>
                    </Box>
                    <Box h={{base:'15%',sm:'21.5%',md:'31%'}} w={{base:'35%',sm:'32%',md:'22%',lg:'18.7%'}} position={'absolute'} bottom={{base:'27.5%',sm:'17.8%',md:'4.2%'}} borderRight={'2px solid black'} borderTop={'2px solid black'} background={'green'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'green'} borderRadius={'50%'}>
                                <Image src={greenstar} w={'32%'} top={{base:'20%',lg:'19%'}} position={'absolute'} left={'18%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}>
                                <Image src={greenstar} w={'32%'} top={{base:'20%',lg:'19%'}} position={'absolute'} left={'50%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}>
                                <Image src={greenstar} w={'32%'} top={{base:'53%',lg:'49%'}} position={'absolute'} left={'50%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}>
                                <Image src={greenstar} w={'32%'} top={{base:'53%',lg:'49%'}} position={'absolute'} left={'18%'} alt=""/>
                            </Box>
                        </Box>
                    </Box>
                    <Box h={{base:'15%',sm:'21.5%',md:'31%'}} w={{base:'35%',sm:'32%',md:'22%',lg:'18.7%'}}  position={'absolute'}   bottom={{base:'27.5%',sm:'17.8%',md:'4.2%'}} right={{base:'2.5%',sm:'6%',md:'20.5%',lg:'24%'}} borderLeft={'2px solid black'} borderTop={'2px solid black'} backgroundColor={'yellow'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}>
                                <Image pointerEvents={displayyelldice?'':'none'} onClick={handelyellowone} _hover={{cursor:'pointer'}} display={yelimgone===0?'flex':'none'} src={yellowstar} w={'25%'} top={'23%'} position={'absolute'} left={'25%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}>
                                <Image pointerEvents={displayyelldice?'':'none'} onClick={handelyellowtwo} _hover={{cursor:'pointer'}} display={yelimgtwo===0?'flex':'none'} src={yellowstar} w={'25%'} top={'23%'} position={'absolute'} left={'55%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}>
                                <Image pointerEvents={displayyelldice?'':'none'} onClick={handelyellowthree} _hover={{cursor:'pointer'}} display={yelimgthree===0?'flex':'none'} src={yellowstar} w={'25%'} top={'53%'} position={'absolute'} left={'55%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}>
                                <Image pointerEvents={displayyelldice?'':'none'} onClick={handelyellowfour} _hover={{cursor:'pointer'}} display={yelimgfour===0?'flex':'none'} src={yellowstar} w={'25%'} top={'53%'} position={'absolute'} left={'25%'} alt=""/>
                            </Box>
                        </Box>
                    </Box>


                    <Box position={'absolute'} top={{base:'46.5%',sm:'44%',md:'41%'}} left={{base:'44.5%',sm:'45.5%',md:'45.5%'}} height={{base:'7%',sm:'13%',md:'17.5%'}} w={'11%'} borderRadius={'50%'} backgroundColor={'#073864'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box borderRadius={'50%'} w={'80%'} h={'80%'} zIndex={'2'} display={'flex'} justifyContent={'center'} alignItems={'center'} background={'linear-gradient(305deg, rgba(237,66,31,1) 0%, rgba(253,248,45,1) 100%)'}>
                            <GiPodiumWinner style={{width:'100%',height:'60%'}}/>
                        </Box>
                    </Box>


                </Box>
            </Box>

            <Box w={{base:'45%',sm:'30%',md:'11%'}} h={{base:'12%',md:'35%'}} position={{base:'absolute',md:'relative'}} display={'flex'} flexDirection={{base:'row',md:'column'}}  bottom={{base:'8%',sm:'5%',md:'-33%'}} right={{base:'0%',sm:'5%',md:'0%'}} >
                <Box  h={{base:'100%',md:'50%'}}  w={{base:'50%',md:'100%'}}>
                    <Image w={'100%'} h={'100%'} src={data.image} objectFit={'cover'} alt="" />
                </Box>
                <Box  h={{base:'100%',md:'42%'}}  w={{base:'50%',md:'100%'}} backgroundColor={'#d8ba11'} borderRadius={'15px'} display={'flex'} alignItems={'center'} justifyContent={"center"}>
                    <Box h={'70%'} w={'75%'} borderRadius={'15px'}  backgroundColor={'white'}>
                        <Box display={displayyelldice?'flex':'none'} w={'100%'} h={'100%'}>
                      <Diceyellow  handlediceyellowone={handlediceyellowone} handlediceyellowtwo={handlediceyellowtwo} handlediceyellowthree={handlediceyellowthree} handlediceyellowfour={handlediceyellowfour} handelyeldice={handelyeldice} handelbludice={handelbludice} handlenoneventyell={handlenoneventyell} diceeventhandle={diceeventhandle} />

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}