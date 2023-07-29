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
import { carryfourblu, carryfourbyblufour, carryoneblu, carryonebybluone, carrythreeblu, carrythreebybluthree, carrytwoblu, carrytwobyblutwo, diedfourblu, diedoneblu, diedthreeblu, diedtwoblu } from "../Redux/BlueLudo/action"
import { BluOneImg } from "../Components/BluImage/BluOneImg"
import { BluTwoImg } from "../Components/BluImage/BluTwoImg"
import { BluThreeImg } from "../Components/BluImage/BluThreeImg"
import { BluFourImg } from "../Components/BluImage/BluFourImg"
import { Deadplay } from "../Components/Audiodead"



export const Ludo = () => {
    
    const store=useSelector((store)=>store.yellreducer)
    const storeblu=useSelector((store)=>store.blureducer)


    const [displaybludice,setdisplaybludice]=useState(false)
    const [displayyelldice,setdisplayyelldice]=useState(true)
    const [deadaudio,setdeadaudio]=useState(false)
 
    const [data, setdata] = useState({})
    const [startaudio, setstartaudio] = useState(false)
    const [jumpaudio,setjumpaudio]=useState(false)
    const [yelimgone,setyelimgone]=useState(store.yelone)
    const [yelimgtwo,setyelimgtwo]=useState(store.yeltwo)
    const [yelimgthree,setyelimgthree]=useState(store.yelthree)
    const [yelimgfour,setyelimgfour]=useState(store.yelfour)


    const [bluimgone,setbluimgone]=useState(storeblu.bluone)
    const [bluimgtwo,setbluimgtwo]=useState(storeblu.blutwo)
    const [bluimgthree,setbluimgthree]=useState(storeblu.bluthree)
    const [bluimgfour,setbluimgfour]=useState(storeblu.blufour)



    const email = localStorage.getItem("email")
    const dispatch=useDispatch()
    function getdata() {

        axios("http://localhost:4500/user")
            .then((res) => {
                res.data.msg.forEach((el) => {
                    if (el.email === email) {
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
    




    function handlediceyellowone(data){
        
            dispatch(carryone(data))
        setjumpaudio(false)
        setdeadaudio(false)
        
    } 
    function handlediceyellowtwo(data){
        dispatch(carrytwo(data))
        setjumpaudio(false)
        setdeadaudio(false)
        
    }
    function handlediceyellowthree(data){
        dispatch(carrythree(data))
        setjumpaudio(false)
        setdeadaudio(false)
    }
    function handlediceyellowfour(data){
        dispatch(carryfour(data))
        setjumpaudio(false)
        setdeadaudio(false)
    }


    function handlediceblueone(data){
        dispatch(carryoneblu(data))
        setjumpaudio(false)
        setdeadaudio(false)
    }
    function handledicebluetwo(data){
        dispatch(carrytwoblu(data))
        setjumpaudio(false)
        setdeadaudio(false)
    }
    function handledicebluethree(data){
        dispatch(carrythreeblu(data))
        setjumpaudio(false)
        setdeadaudio(false)
    }
    function handledicebluefour(data){
        dispatch(carryfourblu(data))
        setjumpaudio(false)
        setdeadaudio(false)
    }




    

    function handelyellowone(){
        if((store.yelone==0 && store.carryone===6) || store.yelone>=6 ){
            setjumpaudio(true)
            let steps=store.carryone+store.yelone
            setyelimgone(steps)
            if(steps<41 && Math.abs(steps-storeblu.bluone)===18 && storeblu.bluone!==0){
                setdeadaudio(true)
                setbluimgone(0)
                dispatch(diedoneblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blutwo)===18 && storeblu.blutwo!==0){
                setdeadaudio(true)
                setbluimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.bluthree)===18 && storeblu.bluthree!==0){
                setdeadaudio(true)
                setbluimgthree(0)
                dispatch(diedthreeblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blufour)===18 && storeblu.blufour!==0){
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
            setjumpaudio(true)
            let steps=store.carrytwo+store.yeltwo
            setyelimgtwo(steps)
            if(steps<41 && Math.abs(steps-storeblu.bluone)===18 && storeblu.bluone!==0){
                setdeadaudio(true)
                setbluimgone(0)
                dispatch(diedoneblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blutwo)===18 && storeblu.blutwo!==0){
                setdeadaudio(true)
                setbluimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.bluthree)===18 && storeblu.bluthree!==0){
                setdeadaudio(true)
                setbluimgthree(0)
                dispatch(diedthreeblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blufour)===18 && storeblu.blufour!==0){
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
            setjumpaudio(true)
            let steps=store.carrythree+store.yelthree
            setyelimgthree(steps)
            if(steps<41 && Math.abs(steps-storeblu.bluone)===18 && storeblu.bluone!==0){
                setdeadaudio(true)
                setbluimgone(0)
                dispatch(diedoneblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blutwo)===18 && storeblu.blutwo!==0){
                setdeadaudio(true)
                setbluimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.bluthree)===18 && storeblu.bluthree!==0){
                setdeadaudio(true)
                setbluimgthree(0)
                dispatch(diedthreeblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blufour)===18 && storeblu.blufour!==0){
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
            setjumpaudio(true)
            let steps=store.carryfour+store.yelfour
            setyelimgfour(steps)
            if(steps<41 && Math.abs(steps-storeblu.bluone)===18 && storeblu.bluone!==0){
                setdeadaudio(true)
                setbluimgone(0)
                dispatch(diedoneblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blutwo)===18 && storeblu.blutwo!==0){
                setdeadaudio(true)
                setbluimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.bluthree)===18 && storeblu.bluthree!==0){
                setdeadaudio(true)
                setbluimgthree(0)
                dispatch(diedthreeblu)
            }
            if(steps<41 && Math.abs(steps-storeblu.blufour)===18 && storeblu.blufour!==0){
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




    function handelblueone(){
       
        if((storeblu.bluone==0 && storeblu.blucarryone==6) || storeblu.bluone>=6 ){
            setjumpaudio(true)
            let steps=storeblu.blucarryone+storeblu.bluone
            setbluimgone(steps)
            if(steps<41 && Math.abs(steps-store.yelone)===18 && store.yelone!==0){
                setdeadaudio(true)
                setyelimgone(0)
                dispatch(diedoneyel)
            }
            if(steps<41 && Math.abs(steps-store.yeltwo)===18 && store.yeltwo!==0){
                setdeadaudio(true)
                setyelimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-store.yelthree)===18 && store.yelthree!==0){
                setdeadaudio(true)
                setyelimgthree(0)
                dispatch(diedthreeyel)
            }
            if(steps<41 && Math.abs(steps-store.yelfour)===18 && store.yelfour!==0){
                setdeadaudio(true)
                setyelimgfour(0)
                dispatch(diedfouryel)
            }
            if(storeblu.blucarryone!==6){
                handelbludice(false)
                handelyeldice(true)
                dispatch(carryonebybluone(steps))
            }
            else{
                dispatch(carryonebybluone(steps))
            }
            
        }
       
    }

    function handelbluetwo(){
        if((storeblu.blutwo==0 && storeblu.blucarrytwo==6) || storeblu.blutwo>=6){
            setjumpaudio(true)
            let steps=storeblu.blucarrytwo+storeblu.blutwo
            setbluimgtwo(steps)
            if(steps<41 && Math.abs(steps-store.yelone)===18 && store.yelone!==0){
                setdeadaudio(true)
                setyelimgone(0)
                dispatch(diedoneyel)
            }
            if(steps<41 && Math.abs(steps-store.yeltwo)===18 && store.yeltwo!==0){
                setdeadaudio(true)
                setyelimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-store.yelthree)===18 && store.yelthree!==0){
                setdeadaudio(true)
                setyelimgthree(0)
                dispatch(diedthreeyel)
            }
            if(steps<41 && Math.abs(steps-store.yelfour)===18 && store.yelfour!==0){
                setdeadaudio(true)
                setyelimgfour(0)
                dispatch(diedfouryel)
            }
            if(storeblu.blucarrytwo!==6){
                handelbludice(false)
                handelyeldice(true)
                dispatch(carrytwobyblutwo(steps))
            }
            else{
            dispatch(carrytwobyblutwo(steps))

            }
        }
       
    }
    function handelbluethree(){
        if((storeblu.bluthree==0 && storeblu.blucarrythree==6) || storeblu.bluthree>=6 ){
            setjumpaudio(true)
            let steps=storeblu.blucarrythree+storeblu.bluthree
            setbluimgthree(steps)
            if(steps<41 && Math.abs(steps-store.yelone)===18 && store.yelone!==0){
                setdeadaudio(true)
                setyelimgone(0)
                dispatch(diedoneyel)
            }
            if(steps<41 && Math.abs(steps-store.yeltwo)===18 && store.yeltwo!==0){
                setdeadaudio(true)
                setyelimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-store.yelthree)===18 && store.yelthree!==0){
                setdeadaudio(true)
                setyelimgthree(0)
                dispatch(diedthreeyel)
            }
            if(steps<41 && Math.abs(steps-store.yelfour)===18 && store.yelfour!==0){
                setdeadaudio(true)
                setyelimgfour(0)
                dispatch(diedfouryel)
            }
            if(storeblu.blucarrythree!==6){
                handelbludice(false)
                handelyeldice(true)
                dispatch(carrythreebybluthree(steps))
            }
            else{
                dispatch(carrythreebybluthree(steps))
            }
        }
        
        
    }
    function handelbluefour(){
        if((storeblu.blufour==0 && storeblu.blucarryfour==6) || storeblu.blufour>=6 ){
            setjumpaudio(true)
            let steps=storeblu.blucarryfour+storeblu.blufour
            setbluimgfour(steps)
            if(steps<41 && Math.abs(steps-store.yelone)===18 && store.yelone!==0){
                setdeadaudio(true)
                setyelimgone(0)
                dispatch(diedoneyel)
            }
            if(steps<41 && Math.abs(steps-store.yeltwo)===18 && store.yeltwo!==0){
                setdeadaudio(true)
                setyelimgtwo(0)
                dispatch(diedtwoblu)
            }
            if(steps<41 && Math.abs(steps-store.yelthree)===18 && store.yelthree!==0){
                setdeadaudio(true)
                setyelimgthree(0)
                dispatch(diedthreeyel)
            }
            if(steps<41 && Math.abs(steps-store.yelfour)===18 && store.yelfour!==0){
                setdeadaudio(true)
                setyelimgfour(0)
                dispatch(diedfouryel)
            }
            if(storeblu.blucarryfour!==6){
                handelbludice(false)
                handelyeldice(true)
                dispatch(carryfourbyblufour(steps))
            }
            else{
                dispatch(carryfourbyblufour(steps))
            }

        }
        
    }
    // console.log(storeblu)
    // console.log(store)


    return <Box height={'100vh'} background={'linear-gradient(295deg, #3533CD, black)'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
        {jumpaudio?<Jumpplay/>:''}
        {deadaudio?<Deadplay/>:''}
        <Box
            w={'70%'}
            h={'95%'}
            // border={'2px solid yellow'} 
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'} >
            {startaudio ? <Startplay /> : ''}
            
            <Box w={'11%'} h={'35%'} position={'relative'} top={'-33%'} >
                <Box h={'50%'}>
                    <Image src={'https://th.bing.com/th/id/R.48ab7c928379bf8977e2e777a8a497a9?rik=Gh3BSTdyt0tMwA&riu=http%3a%2f%2fclipground.com%2fimages%2fbot-clipart-15.jpg&ehk=GuI7s9KxEO89qje4WERYOqLq6SrC67CXlLDoMT8dg9g%3d&risl=&pid=ImgRaw&r=0'} objectFit={'cover'} alt="" />
                </Box>
                <Box h={'42%'} backgroundColor={'#d8ba11'} borderRadius={'15px'} display={'flex'} alignItems={'center'} justifyContent={"center"}>
                    <Box h={'70%'} w={'75%'} borderRadius={'15px'} backgroundColor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box display={displaybludice?'flex':'none'} w={'100%'} h={'100%'} >
                            {displaybludice?<Diceblue handlediceblueone={handlediceblueone} handledicebluetwo={handledicebluetwo} handledicebluethree={handledicebluethree} handledicebluefour={handledicebluefour} handelyeldice={handelyeldice} handelbludice={handelbludice}/>:''}
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box w={'75%'} h={'99%'} border={'6px solid green'} >



                <Box w={'100%'} h={'100%'} border={'4px solid black'} backgroundColor={'white'} display={'grid'} gridTemplateColumns={'repeat(11,1fr)'} >
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===30?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice} />:''}
                    {yelimgtwo===30?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice} />:''}
                    {yelimgthree===30?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice} />:''}
                    {yelimgfour===30?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice} />:''}
                    {bluimgone===12?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===12?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===12?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===12?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===31?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice} />:''}
                    {yelimgtwo===31?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice} />:''}
                    {yelimgthree===31?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice} />:''}
                    {yelimgfour===31?<YellFourImg handelyellowfour={handelyellowfour}displayyelldice={displayyelldice} />:''}
                    {bluimgone===13?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===13?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===13?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===13?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===32?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice} />:''}
                    {yelimgtwo===32?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice} />:''}
                    {yelimgthree===32?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice} />:''}
                    {yelimgfour===32?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
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
                    {yelimgone===29?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===29?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===29?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===29?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===11?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===11?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===11?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===11?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}>
                    {yelimgone===33?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice} />:''}
                    {yelimgtwo===33?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===33?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===33?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
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
                    {yelimgone===28?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===28?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===28?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===28?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===10?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===10?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===10?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===10?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===34?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===34?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===34?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===34?<YellFourImg handelyellowfour={handelyellowfour}  displayyelldice={displayyelldice}  />:''}
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
                    {yelimgone===23?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===23?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===23?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===23?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {yelimgone===24?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===24?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===24?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===24?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===6?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===6?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===6?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===6?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===25?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===25?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===25?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===25?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===7?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===7?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===7?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===7?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===26?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===26?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===26?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===26?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===8?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===8?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===8?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===8?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} >
                    {yelimgone===27?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===27?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===27?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===27?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===9?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===9?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===9?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===9?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===35?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===35?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===35?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===35?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===17?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===17?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===17?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===17?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===36?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===36?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===36?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===36?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===18?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===18?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===18?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===18?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===37?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===37?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===37?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===37?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===19?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===19?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===19?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===19?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===38?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===38?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===38?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===38?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===20?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===20?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===20?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===20?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===39?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===39?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===39?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===39?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===21?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===21?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===21?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===21?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===22?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===22?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===22?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===22?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
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
                    {yelimgone===44?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}  
                    {yelimgtwo===44?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===44?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===44?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===43?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''} 
                    {yelimgtwo===43?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===43?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===43?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===42?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}  
                    {yelimgtwo===42?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===42?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===42?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===41?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===41?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===41?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===41?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===40?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===40?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===40?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===40?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===22?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===22?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===22?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===22?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===21?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===21?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===21?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===21?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===39?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===39?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===39?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===39?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===20?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===20?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===20?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===20?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===38?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===38?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===38?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===38?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===19?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===19?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===19?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===19?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===37?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===37?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===37?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===37?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===18?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===18?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===18?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===18?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===36?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===36?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===36?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===36?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===17?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===17?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===17?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===17?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===35?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===35?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===35?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===35?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===9?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===9?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===9?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===9?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===27?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===27?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===27?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===27?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===8?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===8?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===8?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===8?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===26?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===26?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===26?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===26?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} >
                    {yelimgone===7?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===7?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===7?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===7?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===25?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===25?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===25?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===25?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} backgroundColor={'yellow'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===6?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===6?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===6?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===6?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
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
                    {yelimgone===16?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===16?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===16?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===16?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===34?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===34?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===34?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===34?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===10?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===10?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===10?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===10?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
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
                    {yelimgone===15?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===15?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===15?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===15?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===33?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===33?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===33?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===33?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===11?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===11?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===11?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===11?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
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
                    {yelimgone===14?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===14?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===14?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===14?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===32?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===32?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===32?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===32?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===13?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===13?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===13?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===13?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===31?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===31?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===31?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===31?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===12?<YellOneImg handelyellowone={handelyellowone} displayyelldice={displayyelldice}/>:''}
                    {yelimgtwo===12?<YellTwoImg handelyellowtwo={handelyellowtwo} displayyelldice={displayyelldice}/>:''}
                    {yelimgthree===12?<YellThreeImg handelyellowthree={handelyellowthree} displayyelldice={displayyelldice}/>:''}
                    {yelimgfour===12?<YellFourImg handelyellowfour={handelyellowfour} displayyelldice={displayyelldice}/>:''}
                    {bluimgone===30?<BluOneImg handelblueone={handelblueone} displaybludice={displaybludice}/>:''}
                    {bluimgtwo===30?<BluTwoImg handelbluetwo={handelbluetwo} displaybludice={displaybludice}/>:''}
                    {bluimgthree===30?<BluThreeImg handelbluethree={handelbluethree} displaybludice={displaybludice}/>:''}
                    {bluimgfour===30?<BluFourImg handelbluefour={handelbluefour} displaybludice={displaybludice}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>



                    <Box h={'31%'} w={'18.7%'} position={'absolute'}  borderRight={'2px solid black'} borderBottom={'2px solid black'} backgroundColor={'#1E88E5'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                           <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image pointerEvents={displaybludice?'':'none'} onClick={handelblueone} display={bluimgone===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}}  w={'28%'} top={'19%'} position={'absolute'} left={'20%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'}  borderRadius={'50%'}>
                                <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluetwo} display={bluimgtwo===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={'28%'} top={'19%'} position={'absolute'} left={'52%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluethree} display={bluimgthree===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={'28%'} top={'49%'} position={'absolute'} left={'52%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image pointerEvents={displaybludice?'':'none'} onClick={handelbluefour} display={bluimgfour===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={'28%'} top={'49%'} position={'absolute'} left={'20%'} alt=""/>
                            </Box>
                        </Box>

                    </Box>
                    <Box h={'31%'} w={'18.7%'} position={'absolute'} right={'24%'} borderLeft={'2px solid black'} borderBottom={'2px solid black'} backgroundColor={'red'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'red'} borderRadius={'50%'}>
                                <Image src={redstar} w={'30%'} top={'15%'} position={'absolute'} left={'19%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}>
                                <Image src={redstar} w={'30%'} top={'15%'} position={'absolute'} left={'52%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}>
                                <Image src={redstar} w={'30%'} top={'45%'} position={'absolute'} left={'52%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}>
                                <Image src={redstar} w={'30%'} top={'45%'} position={'absolute'} left={'19%'} alt=""/>
                            </Box>
                        </Box>
                    </Box>
                    <Box h={'31%'} w={'18.7%'} position={'absolute'}  bottom={'4.2%'} borderRight={'2px solid black'} borderTop={'2px solid black'} background={'green'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'green'} borderRadius={'50%'}>
                                <Image src={greenstar} w={'32%'} top={'19%'} position={'absolute'} left={'18%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}>
                                <Image src={greenstar} w={'32%'} top={'19%'} position={'absolute'} left={'50%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}>
                                <Image src={greenstar} w={'32%'} top={'49%'} position={'absolute'} left={'50%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}>
                                <Image src={greenstar} w={'32%'} top={'49%'} position={'absolute'} left={'18%'} alt=""/>
                            </Box>
                        </Box>
                    </Box>
                    <Box h={'31%'} w={'18.7%'} position={'absolute'}  bottom={'4.2%'} right={'24%'} borderLeft={'2px solid black'} borderTop={'2px solid black'} backgroundColor={'yellow'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
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


                    <Box position={'absolute'} top={'41%'} left={'45.5%'} height={'17.5%'} w={'10%'} borderRadius={'50%'} backgroundColor={'#073864'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box borderRadius={'50%'} w={'80%'} h={'80%'} zIndex={'2'} display={'flex'} justifyContent={'center'} alignItems={'center'} background={'linear-gradient(305deg, rgba(237,66,31,1) 0%, rgba(253,248,45,1) 100%)'}>
                            <Heading display={'inline'}>LUDO</Heading>
                        </Box>
                    </Box>


                </Box>
            </Box>

            <Box w={'11%'} h={'30%'} position={'relative'} bottom={'-33%'} >
                <Box h={'55%'}>
                    <Image h={'100%'} w={'100%'} src={data.image} objectFit={'cover'} alt="" />
                </Box>
                <Box h={'45%'} backgroundColor={'#d8ba11'} borderRadius={'15px'} display={'flex'} alignItems={'center'} justifyContent={"center"}>
                    <Box h={'70%'} w={'75%'} borderRadius={'15px'}  backgroundColor={'white'}>
                        <Box display={displayyelldice?'flex':'none'} w={'100%'} h={'100%'}>
                      <Diceyellow  handlediceyellowone={handlediceyellowone} handlediceyellowtwo={handlediceyellowtwo} handlediceyellowthree={handlediceyellowthree} handlediceyellowfour={handlediceyellowfour} handelyeldice={handelyeldice} handelbludice={handelbludice}/>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}