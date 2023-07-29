import { Box, Button, Icon, Image} from "@chakra-ui/react"
import logo from "../Image/ludoblue.webp"


import {FaShareAlt,FaMusic} from 'react-icons/fa'
import {FaStaffSnake} from "react-icons/fa6"
import ludo from "../Image/rgBH9F-.png"
import { Gsap } from "../Components/gsap"
import server from "../Image/512x512bb.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { stopaudio, toggel } from "../Redux/Audiored/action"
import {TbMusicOff} from "react-icons/tb"
import { useLocation, useNavigate } from "react-router-dom"



export const Home=()=>{
    const location=useLocation()
    const isMuted = useSelector((store)=> store.audioreducer.audio)
    const dispatch=useDispatch()
    const [data,setdata]=useState({})
    const navigate=useNavigate()
    const email=localStorage.getItem("email")
    function getdata(){
        
        axios("http://localhost:4500/user")
        .then((res)=>{
            res.data.msg.forEach((el)=>{
                if(el.email==email){
                    setdata(el)
                }
            })
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getdata()
    },[])

    console.log(location)
    function handleaudio(){
        dispatch(toggel)
    }

    function handleplaywithserver(){
        dispatch(stopaudio)
        navigate("/ludo")
    }

    console.log(data)
    return<Box fontFamily={'serif'} background={'linear-gradient(295deg, #3533CD, black)'}  p={'10% 0%'}>
        <Box style={{position:'fixed',top:'0',borderBottom:'4px solid yellow',borderTop:'2px solid transparent',width:'100%',borderRadius:'0% 0% 10% 10%',zIndex:'6'}} background={'linear-gradient(295deg, #3533CD, black)'}>
                <Box style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems: 'center' }}>
                    <Box display={'flex'} >
                    <Image src={logo} width={{base:'3%',md:'8%'}} m={'15px'} alt='' />
                    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=23&pause=1000&color=FFEB3B&repeat=false&width=445&lines=Lodo+the+Rising+Star." alt="Typing SVG" style={{marginTop:'2%'}} />
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Image src={data.image} pr={'3%'} borderRadius={'10px'} w={'18%'}  alt=''/>
                    </Box>

                </Box>
        </Box>
        <br/>
        <Box  display={'flex'} flexDirection={{base:'column',sm:'column',md:'column',lg:'row'}} gap={'2%'} justifyContent={'center'} alignItems={'center'} >
        <Box w={{base:'100%',lg:'37%'}} padding={'0% 5%'} borderRadius={'20px'} >
        <img src={ludo} style={{margin:'auto'}} alt="" />
        <Gsap/>
        </Box>
        <Box w={{base:'100%',lg:'47%'}} fontSize={'29px'} p={'2%'} >
            <Box color={'yellow'}>
            <h1><b>Hello, {data.name}</b></h1>
            <h1><b>Welcome to the ludo World</b></h1>
            <br/>
            <Box display={'flex'}  flexDirection={{base:'column',sm:'column',md:'column',lg:'row'}}>
            <Box onClick={handleplaywithserver}  w={{base:'70%',md:'55%',lg:'35%'}} color={'yellow'} m='auto'  fontSize={'25px'} borderRadius={'18px'}  border={'6px solid yellow'} _hover={{cursor:'pointer',transform:'scale(1.1)'}}>
                <Image src={server} w={'100%'} h={'150px'} borderBottom={'6px solid yellow'} borderRadius={'18px 18px 0px 0px'} alt=''/>
                <p><b>Play With Server</b></p>
            </Box>
            <br/>
            <br/>
            <Box w={{base:'70%',md:'55%',lg:'35%'}} color={'yellow'} m='auto'  fontSize={'25px'} borderRadius={'18px'}  border={'6px solid yellow'} _hover={{cursor:'pointer',transform:'scale(1.1)'}}>
                <Image src={'https://play-lh.googleusercontent.com/DE3Pnn2lQ0vrudHmK8gKC_WKzXHNjUJ6mU1B76fX3hHQAhaVTtHL50a3AUrdbOZNaJWG'} w={'100%'} h={'150px'} borderBottom={'6px solid yellow'} borderRadius={'18px 18px 0px 0px'} alt=''/>
                <p><b>Local Multiplayer</b></p>
            </Box>
            </Box>
            </Box>

        </Box>
        </Box>
        <br/>
        <br/>
        <Box w={'40%'} m={'auto'}   display={'grid'} gap={'19%'} gridTemplateColumns={'repeat(3,1fr)'}>
            <Box >
            <Box border={'4px solid yellow'} _hover={{cursor:'pointer',transform:'scale(1.1)'}}  borderRadius={'15px'} >
            <Icon as={FaShareAlt} p={'3% 3%'} w='50%' h='50%' color={'yellow'} />
            </Box>
            </Box>
            <Box >
                <Box  border={'4px solid yellow'} _hover={{cursor:'pointer',transform:'scale(1.1)'}} borderRadius={'15px'}  >
            <Icon as={FaMusic} display={isMuted?'flex':'none'} onClick={handleaudio} p={'3% 3%'} w='50%' h='50%' color={'yellow'} m={'auto'}/>
            <Icon as={TbMusicOff} display={isMuted?'none':'flex'} onClick={handleaudio} p={'3% 3%'} w='50%' h='50%' color={'yellow'} m={'auto'}/>

            </Box>
            </Box>
            <Box>
            <Box border={'4px solid yellow'} _hover={{cursor:'pointer',transform:'scale(1.1)'}} borderRadius={'15px'} >
            <Icon as={FaStaffSnake} p={'3% 3%'}  w='50%' h='50%' color={'yellow'} />
            </Box>
            </Box>
        </Box>
    </Box>
}