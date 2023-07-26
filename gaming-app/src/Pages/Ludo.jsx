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
import { carryfour, carryfourbyyelfour, carryone, carryonebyyelone, carrythree, carrythreebyyelthree, carrytwo, carrytwobyyeltwo } from "../Redux/Yellowludo/action"
import { YellTwoImg } from "../Components/YellImage/YellTwoImg"
import { YellThreeImg } from "../Components/YellImage/YellThreeImg"
import { YellFourImg } from "../Components/YellImage/YellFourImg"
import { Jumpplay } from "../Components/Audiojump"
import { carryfourblu, carryfourbyblufour, carryoneblu, carryonebybluone, carrythreeblu, carrythreebybluthree, carrytwoblu, carrytwobyblutwo } from "../Redux/BlueLudo/action"
import { BluOneImg } from "../Components/BluImage/BluOneImg"
import { BluTwoImg } from "../Components/BluImage/BluTwoImg"
import { BluThreeImg } from "../Components/BluImage/BluThreeImg"
import { BluFourImg } from "../Components/BluImage/BluFourImg"


export const Ludo = () => {
    
    const store=useSelector((store)=>store.yellreducer)
    const storeblu=useSelector((store)=>store.blureducer)
    const [data, setdata] = useState({})
    const [startaudio, setstartaudio] = useState(false)
    const [jumpaudio,setjumpaudio]=useState(false)
    const [dice,setdice]=useState(true)


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
    

    function handlediceblue(data){
        setdice(data)
    }






    function handlediceyellowone(data){
        dispatch(carryone(data))
        setjumpaudio(false)
    } 
    function handlediceyellowtwo(data){
        dispatch(carrytwo(data))
        setjumpaudio(false)
    }
    function handlediceyellowthree(data){
        dispatch(carrythree(data))
        setjumpaudio(false)
    }
    function handlediceyellowfour(data){
        dispatch(carryfour(data))
        setjumpaudio(false)
    }


    function handlediceblueone(data){
        dispatch(carryoneblu(data))
        setjumpaudio(false)
    }
    function handledicebluetwo(data){
        dispatch(carrytwoblu(data))
        setjumpaudio(false)
    }
    function handledicebluethree(data){
        dispatch(carrythreeblu(data))
        setjumpaudio(false)
    }
    function handledicebluefour(data){
        dispatch(carryfourblu(data))
        setjumpaudio(false)
    }




    

    function handelyellowone(){
        if((store.yelone==0 && store.carryone==6) || store.yelone>=6 ){
            setjumpaudio(true)
            let steps=store.carryone+store.yelone
            setyelimgone(steps)
            dispatch(carryonebyyelone(steps))
        }
        
        
    }

    function handelyellowtwo(){
        if((store.yeltwo==0 && store.carrytwo==6)  || store.yeltwo>=6){
            setjumpaudio(true)
            let steps=store.carrytwo+store.yeltwo
            setyelimgtwo(steps)
            dispatch(carrytwobyyeltwo(steps))
        }
        
        
    }
    function handelyellowthree(){
        if((store.yelthree==0 && store.carrythree==6) || store.yelthree>=6){
            setjumpaudio(true)
            let steps=store.carrythree+store.yelthree
            setyelimgthree(steps)
            dispatch(carrythreebyyelthree(steps))
        }
        
    }
    function handelyellowfour(){
 
        if((store.yelfour==0 && store.carryfour==6) || store.yelfour>=6){
            setjumpaudio(true)
            let steps=store.carryfour+store.yelfour
            setyelimgfour(steps)
            dispatch(carryfourbyyelfour(steps))
        }
      
        
    }




    function handelblueone(){
       
        if((storeblu.bluone==0 && storeblu.blucarryone==6) || storeblu.bluone>=6 ){
            setjumpaudio(true)
            let steps=storeblu.blucarryone+storeblu.bluone
            setbluimgone(steps)
            dispatch(carryonebybluone(steps))
        }
       
    }

    function handelbluetwo(){
        if((storeblu.blutwo==0 && storeblu.blucarrytwo==6) || storeblu.blutwo>=6){
            setjumpaudio(true)
            let steps=storeblu.blucarrytwo+storeblu.blutwo
            setbluimgtwo(steps)
            dispatch(carrytwobyblutwo(steps))
        }
       
    }
    function handelbluethree(){
        if((storeblu.bluthree==0 && storeblu.blucarrythree==6) || storeblu.bluthree>=6 ){
            setjumpaudio(true)
            let steps=storeblu.blucarrythree+storeblu.bluthree
            setbluimgthree(steps)
            dispatch(carrythreebybluthree(steps))
        }
        
        
    }
    function handelbluefour(){
        if((storeblu.blufour==0 && storeblu.blucarryfour==6) || storeblu.blufour>=6 ){
            setjumpaudio(true)
            let steps=storeblu.blucarryfour+storeblu.blufour
            setbluimgfour(steps)
            dispatch(carryfourbyblufour(steps))
        }
        
    }

    console.log(storeblu)


    return <Box height={'100vh'} background={'linear-gradient(295deg, #3533CD, black)'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
        {jumpaudio?<Jumpplay/>:''}
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
                        <Box w={'100%'} h={'100%'} >
                        <Diceblue handlediceblueone={handlediceblueone} handledicebluetwo={handledicebluetwo} handledicebluethree={handledicebluethree} handledicebluefour={handledicebluefour}/>
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
                    {yelimgone===30?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===30?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===30?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===30?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===12?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===12?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===12?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===12?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===31?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===31?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===31?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===31?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===13?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===13?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===13?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===13?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===32?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===32?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===32?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===32?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===14?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===14?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===14?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===14?<BluFourImg handelbluefour={handelbluefour}/>:''}
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
                    {yelimgone===29?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===29?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===29?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===29?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===11?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===11?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===11?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===11?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}>
                    {yelimgone===33?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===33?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===33?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===33?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===15?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===15?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===15?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===15?<BluFourImg handelbluefour={handelbluefour}/>:''}
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
                    {yelimgone===28?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===28?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===28?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===28?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===10?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===10?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===10?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===10?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===34?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===34?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===34?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===34?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===16?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===16?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===16?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===16?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===23?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===23?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===23?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===23?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {yelimgone===24?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===24?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===24?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===24?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===6?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===6?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===6?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===6?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===25?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===25?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===25?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===25?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===7?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===7?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===7?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===7?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===26?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===26?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===26?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===26?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===8?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===8?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===8?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===8?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} >
                    {yelimgone===27?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===27?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===27?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===27?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===9?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===9?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===9?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===9?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'red'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===35?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===35?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===35?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===35?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===17?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===17?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===17?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===17?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===36?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===36?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===36?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===36?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===18?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===18?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===18?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===18?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===37?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===37?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===37?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===37?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===19?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===19?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===19?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===19?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===38?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===38?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===38?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===38?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===20?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===20?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===20?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===20?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===39?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===39?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===39?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===39?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===21?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===21?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===21?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===21?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===22?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===22?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===22?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===22?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===40?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===40?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===40?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===40?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {bluimgone===41?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===41?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===41?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===41?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {bluimgone===42?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===42?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===42?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===42?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {bluimgone===43?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===43?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===43?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===43?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'#1E88E5'}>
                    {bluimgone===44?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===44?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===44?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===44?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===44?<YellOneImg handelyellowone={handelyellowone}/>:''}  
                    {yelimgtwo===44?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===44?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===44?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===43?<YellOneImg handelyellowone={handelyellowone}/>:''} 
                    {yelimgtwo===43?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===43?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===43?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===42?<YellOneImg handelyellowone={handelyellowone}/>:''}  
                    {yelimgtwo===42?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===42?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===42?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'yellow'}>
                    {yelimgone===41?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===41?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===41?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===41?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===40?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===40?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===40?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===40?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===22?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===22?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===22?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===22?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>





                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===21?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===21?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===21?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===21?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===39?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===39?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===39?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===39?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===20?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===20?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===20?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===20?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===38?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===38?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===38?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===38?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===19?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===19?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===19?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===19?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===37?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===37?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===37?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===37?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===18?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===18?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===18?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===18?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===36?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===36?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===36?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===36?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===17?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===17?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===17?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===17?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===35?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===35?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===35?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===35?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===9?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===9?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===9?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===9?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===27?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===27?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===27?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===27?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===8?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===8?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===8?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===8?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===26?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===26?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===26?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===26?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} >
                    {yelimgone===7?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===7?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===7?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===7?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===25?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===25?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===25?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===25?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} backgroundColor={'yellow'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===6?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===6?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===6?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===6?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===24?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===24?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===24?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===24?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {bluimgone===23?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===23?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===23?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===23?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>






                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===16?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===16?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===16?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===16?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===34?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===34?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===34?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===34?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===10?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===10?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===10?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===10?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===28?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===28?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===28?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===28?<BluFourImg handelbluefour={handelbluefour}/>:''}
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
                    {yelimgone===15?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===15?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===15?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===15?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===33?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===33?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===33?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===33?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'} backgroundColor={'green'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===11?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===11?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===11?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===11?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===29?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===29?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===29?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===29?<BluFourImg handelbluefour={handelbluefour}/>:''}
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
                    {yelimgone===14?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===14?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===14?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===14?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===32?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===32?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===32?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===32?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===13?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===13?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===13?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===13?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===31?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===31?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===31?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===31?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}>
                    {yelimgone===12?<YellOneImg handelyellowone={handelyellowone}/>:''}
                    {yelimgtwo===12?<YellTwoImg handelyellowtwo={handelyellowtwo}/>:''}
                    {yelimgthree===12?<YellThreeImg handelyellowthree={handelyellowthree}/>:''}
                    {yelimgfour===12?<YellFourImg handelyellowfour={handelyellowfour}/>:''}
                    {bluimgone===30?<BluOneImg handelblueone={handelblueone}/>:''}
                    {bluimgtwo===30?<BluTwoImg handelbluetwo={handelbluetwo}/>:''}
                    {bluimgthree===30?<BluThreeImg handelbluethree={handelbluethree}/>:''}
                    {bluimgfour===30?<BluFourImg handelbluefour={handelbluefour}/>:''}
                    </Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>
                    <Box border={'1px solid black'} overflow={'hidden'} padding={'5px'}></Box>



                    <Box h={'31%'} w={'18.7%'} position={'absolute'}  borderRight={'2px solid black'} borderBottom={'2px solid black'} backgroundColor={'#1E88E5'} display={'flex'} justifyContent={'center'} alignItems={'center'} zIndex={'3'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                           <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image onClick={handelblueone} display={bluimgone===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}}  w={'28%'} top={'19%'} position={'absolute'} left={'20%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'}  borderRadius={'50%'}>
                                <Image onClick={handelbluetwo} display={bluimgtwo===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={'28%'} top={'19%'} position={'absolute'} left={'52%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image onClick={handelbluethree} display={bluimgthree===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={'28%'} top={'49%'} position={'absolute'} left={'52%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}>
                                <Image onClick={handelbluefour} display={bluimgfour===0?'flex':'none'} src={bluestar} _hover={{cursor:'pointer'}} w={'28%'} top={'49%'} position={'absolute'} left={'20%'} alt=""/>
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
                                <Image onClick={handelyellowone} _hover={{cursor:'pointer'}} display={yelimgone===0?'flex':'none'} src={yellowstar} w={'25%'} top={'23%'} position={'absolute'} left={'25%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}>
                                <Image onClick={handelyellowtwo} _hover={{cursor:'pointer'}} display={yelimgtwo===0?'flex':'none'} src={yellowstar} w={'25%'} top={'23%'} position={'absolute'} left={'55%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}>
                                <Image onClick={handelyellowthree} _hover={{cursor:'pointer'}} display={yelimgthree===0?'flex':'none'} src={yellowstar} w={'25%'} top={'53%'} position={'absolute'} left={'55%'} alt=""/>
                            </Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}>
                                <Image onClick={handelyellowfour} _hover={{cursor:'pointer'}} display={yelimgfour===0?'flex':'none'} src={yellowstar} w={'25%'} top={'53%'} position={'absolute'} left={'25%'} alt=""/>
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
                        <Box w={'100%'} h={'100%'} display={dice?'flex':'none'}>
                      <Diceyellow  handlediceyellowone={handlediceyellowone} handlediceyellowtwo={handlediceyellowtwo} handlediceyellowthree={handlediceyellowthree} handlediceyellowfour={handlediceyellowfour}/>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}