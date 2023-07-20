import { Box, Divider, Image } from "@chakra-ui/react"
import { Startplay } from "../Components/Startaudio"
import axios from "axios"
import { useEffect, useState } from "react"




export const Ludo = () => {

    const [data, setdata] = useState({})
    const [startaudio, setstartaudio] = useState(false)

    const email = localStorage.getItem("email")
    function getdata() {

        axios("http://localhost:4500/user")
            .then((res) => {
                res.data.msg.forEach((el) => {
                    if (el.email == email) {
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


    return <Box height={'100vh'} background={'linear-gradient(295deg, #3533CD, black)'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
        <Box
            w={'70%'}
            h={'95%'}
            // border={'2px solid yellow'} 
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'} >
            {setstartaudio ? <Startplay /> : ''}

            <Box w={'11%'} h={'35%'} position={'relative'} top={'-33%'} >
                <Box h={'50%'}>
                    <Image src={'https://th.bing.com/th/id/R.48ab7c928379bf8977e2e777a8a497a9?rik=Gh3BSTdyt0tMwA&riu=http%3a%2f%2fclipground.com%2fimages%2fbot-clipart-15.jpg&ehk=GuI7s9KxEO89qje4WERYOqLq6SrC67CXlLDoMT8dg9g%3d&risl=&pid=ImgRaw&r=0'} objectFit={'cover'} alt="" />
                </Box>
                <Box h={'42%'} backgroundColor={'#d8ba11'} borderRadius={'15px'} display={'flex'} alignItems={'center'} justifyContent={"center"}>
                    <Box h={'70%'} w={'75%'} borderRadius={'15px'} backgroundColor={'white'}>

                    </Box>
                </Box>
            </Box>


            <Box w={'75%'} h={'100%'} border={'6px solid green'} >
                <Box w={'100%'} h={'100%'} border={'4px solid black'} backgroundColor={'white'}  >
                    <Box h={'31%'} w={'18%'} position={'absolute'} borderRadius={'0px 0px 15px 0px'} borderRight={'2px solid black'} borderBottom={'2px solid black'} backgroundColor={'#1E88E5'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'#1E88E5'} borderRadius={'50%'}></Box>
                        </Box>

                    </Box>
                    <Box h={'31%'} w={'18%'} position={'absolute'} right={'24%'} borderRadius={'0px 0px 0px 15px'} borderLeft={'2px solid black'} borderBottom={'2px solid black'} backgroundColor={'red'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'red'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'red'} borderRadius={'50%'}></Box>
                        </Box>
                    </Box>
                    <Box h={'31%'} w={'18%'} position={'absolute'} borderRadius={'0px 15px 0px 0px'} bottom={'3.5%'} borderRight={'2px solid black'} borderTop={'2px solid black'} background={'green'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'green'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'green'} borderRadius={'50%'}></Box>
                        </Box>
                    </Box>
                    <Box h={'31%'} w={'18%'} position={'absolute'} borderRadius={'15px 0px 0px 0px'} bottom={'3.5%'} right={'24%'} borderLeft={'2px solid black'} borderTop={'2px solid black'} backgroundColor={'yellow'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box backgroundColor={'white'} w={'70%'} h={'70%'} borderRadius={'15px'} padding={'7%'} gap={'12%'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'}>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}></Box>
                            <Box backgroundColor={'yellow'} borderRadius={'50%'}></Box>
                        </Box>
                    </Box>


                    <Box h={'93.5%'} w={'51.5%'} position={'absolute'} border={'2px solid black'} top={'3%'} right={'24%'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} >
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} />
                        </Box>
                    </Box>




                    <Box h={'93.5%'} w={'51.5%'} transform={'rotate(90deg)'} position={'absolute'} border={'2px solid black'} top={'3%'} right={'24%'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} >
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                        <Box>
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} />
                        </Box>
                    </Box>






                    <Box position={'absolute'} top={'43%'} left={'46.3%'} height={'15%'} w={'8%'} borderRadius={'50%'} backgroundColor={'#073864'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box borderRadius={'50%'} w={'80%'} h={'80%'} zIndex={'2'} display={'flex'} justifyContent={'center'} alignItems={'center'} background={'linear-gradient(305deg, rgba(237,66,31,1) 0%, rgba(253,248,45,1) 100%)'}>
                            <Divider color={'black'} orientation='horizontal' border={'1px solid black'} position={'absolute'} transform='rotate(45deg)' width={'90%'} />
                            <Divider color={'black'} orientation='vertical' border={'1px solid black'} position={'absolute'} transform='rotate(45deg)' />
                        </Box>

                    </Box>


                </Box>
            </Box>

            <Box w={'11%'} h={'30%'} position={'relative'} bottom={'-33%'} >
                <Box h={'55%'}>
                    <Image h={'100%'} w={'100%'} src={data.image} objectFit={'cover'} alt="" />
                </Box>
                <Box h={'45%'} backgroundColor={'#d8ba11'} borderRadius={'15px'} display={'flex'} alignItems={'center'} justifyContent={"center"}>
                    <Box h={'70%'} w={'75%'} borderRadius={'15px'} backgroundColor={'white'}>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}