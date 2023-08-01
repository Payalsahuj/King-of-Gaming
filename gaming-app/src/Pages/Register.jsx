import { useEffect, useState } from "react";

import "../CSS/login.css"

import { Box, useToast } from "@chakra-ui/react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";

const imgarray=[

  "https://pre00.deviantart.net/bcc9/th/pre/i/2017/039/b/d/profile_pic_by_a_series_of_blunders-dayds12.png",
  "https://c.tenor.com/8G_LVHIqGJ8AAAAj/kirby-hi-there.gif",
  "https://i.pinimg.com/originals/31/ff/38/31ff38e9e11161c93fb46840993e5cfe.png",
  // "https://cdn1.iconfinder.com/data/icons/character-2/176/22-512.png",
  "https://i.pinimg.com/originals/68/30/42/68304296bac6ab2b8841872c5936bd5c.gif",
  "https://i.pinimg.com/originals/92/a4/8a/92a48ab70a4028b6c7ef34d7dda5b3af.png",
  "https://gere720.weebly.com/uploads/1/1/6/9/116940787/nicolaugh_orig.gif",
  "https://rocketmen.com.ua/images/team/55aeb85d2034.png",
  "https://i.pinimg.com/originals/64/9f/5b/649f5b3746ec384fb62ee04005872a06.gif",
  "https://png.pngtree.com/png-clipart/20230307/ourmid/pngtree-hand-draw-cute-chef-hijab-cakes-png-image_6636789.png",
  "https://orig00.deviantart.net/a88f/f/2013/158/6/d/judal_by_crescentriku-d685jlv.gif",
  "https://images.vexels.com/media/users/3/196018/isolated/preview/cd3ef4c0a1dc2eb20afcf988e7442d1f-cute-south-korean-man-with-hanbok-character.png",
  "https://visaliaceramictile.com/wp-content/uploads/2016/03/avatar_smart_guy-512.png",


  "https://66.media.tumblr.com/b4ebf0d22ae6e61f85d47b1939ba6811/tumblr_oqsaud7oxr1shacfvo1_250.gif",

  "https://static-cdn.jtvnw.net/jtv_user_pictures/72947707-ea8c-40e3-9b70-f66f81b501ea-profile_image-300x300.png",
  "https://1.bp.blogspot.com/-w5FsoqMwzjo/WcLKU8X7NnI/AAAAAAAAB8A/hE5C_G6tFlwsN70G6TrKUnBDWF0qLOzZgCEwYBhgL/s1600/thumbs%2Bup.jpg",
  "https://th.bing.com/th/id/R.56dd551515bcea72eee446d9317e62f6?rik=WZbf1PJxPnigEA&riu=http%3a%2f%2fgere720.weebly.com%2fuploads%2f1%2f1%2f6%2f9%2f116940787%2frinwave_orig.gif&ehk=oie%2bKiEPM1jAQPesOL%2bGz4RiQrwzYMJb7RUyOZFK2to%3d&risl=&pid=ImgRaw&r=0",
  "https://static-cdn.jtvnw.net/jtv_user_pictures/cd7bdd35-dccb-47f6-a7a9-f0f18bc650f2-profile_image-300x300.png",
  "https://s3.us-west-2.amazonaws.com/cdn.lnk.bio/uploads/2870175-1024.png?lu=2022-02-27+07:22:36",
  "https://th.bing.com/th/id/R.168fa6b0c66325e246bcb6314099df87?rik=hiX5mbFWwjI%2flQ&riu=http%3a%2f%2femotestwitch.com%2fwp-content%2fuploads%2f2018%2f08%2f003.gif&ehk=y64PlxGsJhPz0HaWRnaga2famFcbmXZRvId3j553UzI%3d&risl=&pid=ImgRaw&r=0",
  "https://freetwitchemotes.com/wp-content/uploads/2021/02/Donate-Anime-Twitch-Emotes-ft.png",
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/364c2b84b5c2eaf057f323dab342522e-1598451658/TEST20/animate-twitch-notification-alerts-with-your-oc.gif",
  "https://i.pinimg.com/originals/f0/7a/ec/f07aecdfa05ec45dfec39e17cc9126e1.png",
]
export const Register = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [img,setimg]=useState("https://th.bing.com/th/id/OIP.Cv-h688qgzkxFf7m6E84agAAAA?pid=ImgDet&w=300&h=300&rs=1")
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const navigate=useNavigate("")
  const toast=useToast()
  const [loading,setloading]=useState(false)
  const token=localStorage.getItem("ludotoken")
  const emaillocal=localStorage.getItem("ludoemail")
  
 

  useEffect(()=>{
    if(token && emaillocal){
      navigate("/home")
    }
  },[])
  function register(){
    if(selectedCountry==="" || name==="" || email===""){
        toast({
          position: 'top-right',
          title: 'Please fill all the credentials',
          status: 'success',
          duration: 9000,
          isClosable: true,
        }) 
    }
    else if(img==="https://th.bing.com/th/id/OIP.Cv-h688qgzkxFf7m6E84agAAAA?pid=ImgDet&w=300&h=300&rs=1"){
        toast({
          position: 'top-right',
          title: 'Recommending you to select any character',
          status: 'success',
          duration: 9000,
          isClosable: true,
        }) 
      }
    else{
      setloading(true)
      let obj={
        country:selectedCountry,
        image:img,
        name:name,
        email,
        coin:0
      }
      
      axios.post("https://ludo-0qj0.onrender.com/user/register",obj)
      .then((res)=>{
        console.log(res)
        setloading(false)
        localStorage.setItem("ludotoken",res.data.token)
        localStorage.setItem("ludoemail",res.data.email)
       
        toast({
          position: 'top-right',
          title: res.data.msg,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate("/home")
      })
      .catch((err)=> {
        toast({
          position: 'top-right',
          title: "Internal Issue, Please try again Later",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
    }
    
    
  }

 

  return (<>{loading?<Loading/>:<div id="logincontainer"  style={{display:'flex',flexDirection:'column',padding:'7% 0%'}}>
      <div id='conatin' >
        <div id="details" >
          <p  className="paragra">*Your country name & Flag will be shown to other</p>
          <p className="paragra">players when you play online multiplayer*</p>
          <select className="select" value={selectedCountry}  style={{ padding: '2% 2%', marginTop: '8%', borderRadius: '8px', backgroundColor: '#565454', color: 'white',width:'90%' }} onChange={(e)=>setSelectedCountry(e.target.value)}>
            <option value="" >🌍  Select your country</option>
            <option value="USA"> USA</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Thailand">Thailand</option>
            <option value="Taiwan">Taiwan</option>z
            <option value="Switzerland">Switzerland</option>
            <option value="Sweden">Sweden</option>
            <option value="Spain">Spain</option>
            <option value="South Korea">South Korea</option>
            <option value="Sinapore">Sinapore</option>
            <option value="Philippines">Philippines</option>
            <option value="Norway">Norway</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Mexico">Mexico</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="Ireland">Ireland</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Finland">Finland</option>
            <option value="Denmark">Denmark</option>
            <option value="Canada">Canada</option>
            <option value="Brazil">Brazil</option>
            <option value="Belgium">Belgium</option>
            <option value="Austria">Austria</option>
            <option value="Australia">Australia</option>
            <option value="Argentina">Argentina</option>
          </select>
          <br/>
          <br/>
          <br/>
          <div style={{display:'flex',width:'90%',margin:'auto'}}>
            <Box w={{base:'50%',md:'38%'}} style={{textAlign:'left'}}>
              <img style={{objectFit:'cover',width:'100%',textAlign:'left',height:'100%'}} src={img} alt="" />
            </Box>
            <Box fontSize={{base:'12px',sm:'17px',md:'25px'}} w={{base:'50%',md:'62%'}} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <p>Enter your name:</p>
             
              <input value={name} type="text" onChange={(e)=>setname(e.target.value)} style={{width:'85%',padding:'6px 5px',borderRadius:'10px',color:'black'}} placeholder="Guest" />
              
              <p id="email">Enter your Email:</p>
              
              <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} style={{width:'85%',padding:'6px 5px',borderRadius:'10px',color:'black'}} placeholder="Email" />
            </Box>
          </div>
        </div>
        <br/>
        <br/>
        <div id="profilepic" >
          <h1 style={{color:'yellow',fontFamily:'serif'}}><b>Select Your Profile Picture</b></h1>
          <br/>
          <div style={{width:'90%',height:'330px',marginBottom:'10px',margin:'auto',display:'grid',padding:'6px 6px',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',backgroundColor:'#455A64'}} id="scrollbody">
            { imgarray.map((image)=><div key={image}><img onClick={(e)=>setimg(image)} style={{objectFit:'cover',width:'100%',height:'100%',borderRadius:'10px'}}  src={image} alt=""/></div>)
            }

          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <button id="continue" onClick={register} ><b>Continue</b></button>
      
    </div>}</>
  );
}