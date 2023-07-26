import { useEffect, useState } from "react";

import "../CSS/login.css"

import { useToast } from "@chakra-ui/react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const imgarray=[

  "https://pre00.deviantart.net/bcc9/th/pre/i/2017/039/b/d/profile_pic_by_a_series_of_blunders-dayds12.png",
  "https://i.pinimg.com/originals/31/ff/38/31ff38e9e11161c93fb46840993e5cfe.png",
  "https://cdn1.iconfinder.com/data/icons/character-2/176/22-512.png",
  "https://i.pinimg.com/originals/92/a4/8a/92a48ab70a4028b6c7ef34d7dda5b3af.png",
  "https://rocketmen.com.ua/images/team/55aeb85d2034.png",
  "https://png.pngtree.com/png-clipart/20230307/ourmid/pngtree-hand-draw-cute-chef-hijab-cakes-png-image_6636789.png",
  "https://orig00.deviantart.net/a88f/f/2013/158/6/d/judal_by_crescentriku-d685jlv.gif",
  "https://images.vexels.com/media/users/3/196018/isolated/preview/cd3ef4c0a1dc2eb20afcf988e7442d1f-cute-south-korean-man-with-hanbok-character.png",
  "https://visaliaceramictile.com/wp-content/uploads/2016/03/avatar_smart_guy-512.png",

  "https://t00.deviantart.net/8N7fgjzBOPMKAkD_whIhcROF0k8=/300x200/filters:fixed_height(100,100):origin()/pre00/126e/th/pre/f/2016/181/9/f/9fd4f66e9602ca243028669e58a95b05-da86h46.png",
  "https://db4sgowjqfwig.cloudfront.net/images/3228946/Keena_icon_by_Giovana_Stiliano.png",
  "https://th.bing.com/th/id/R.09a9efa15d74be857a886959238d1d5a?rik=bNU5%2bzEFNbheYg&riu=http%3a%2f%2fwww.goodmorningimagesdownload.com%2fwp-content%2fuploads%2f2021%2f02%2fCute-Cartoon-Dp-Images-For-Fcebook.jpg&ehk=MConVtncGFTsefnZH%2bPYTHQ5FuPgv7ljZzC3aLK2AjU%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.mtsCg3moO9nzJVwjOJE7EwHaJj?pid=ImgDet&rs=1",
  "https://1.bp.blogspot.com/-w5FsoqMwzjo/WcLKU8X7NnI/AAAAAAAAB8A/hE5C_G6tFlwsN70G6TrKUnBDWF0qLOzZgCEwYBhgL/s1600/thumbs%2Bup.jpg",
  "https://i.pinimg.com/originals/dd/20/ce/dd20ce26a04a83d634ed6ec57aee36a1.jpg",
  "https://th.bing.com/th/id/OIP.zqpKQxEeK-ILz7WLp9qQegHaHa?pid=ImgDet&rs=1",
  "https://i.pinimg.com/originals/51/93/a4/5193a4e5aa50648c1e23a54c9fef35bc.jpg",
  "https://th.bing.com/th/id/R.678c4742069b84484afc8da8de926dfa?rik=OkW64OYl1jELRQ&riu=http%3a%2f%2fi.imgur.com%2f9KOP4iI.jpg&ehk=H2xUzLp9jZH4h3c2QNeJRhlvUcNchZ5auwWnajWK6Oo%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.IvY3J3MlzL30xZlNOhu8XwHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.3",
  "https://i.pinimg.com/280x280_RS/9f/2a/13/9f2a13fe517e6e5802bbc74ace53a5e0.jpg",
  "https://th.bing.com/th/id/OIP.LQ_liNIjZVMWI7Dlhg7DgwHaHa?pid=ImgDet&w=650&h=650&rs=1"
]
export const Register = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [img,setimg]=useState("https://th.bing.com/th/id/OIP.Cv-h688qgzkxFf7m6E84agAAAA?pid=ImgDet&w=300&h=300&rs=1")
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const navigate=useNavigate("")
  const toast=useToast()
  
  const token=localStorage.getItem("token")
  const emaillocal=localStorage.getItem("email")
  
 

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
      let obj={
        country:selectedCountry,
        image:img,
        name:name,
        email
      }
      
      axios.post("http://localhost:4500/user/register",obj)
      .then((res)=>{
        console.log(res)
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("email",res.data.email)

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

 

  return (<div id="logincontainer" style={{display:'flex',flexDirection:'column',padding:'7% 0%'}}>
      <div style={{  width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <div id="details" style={{ width: '35%',height:'100%', color: 'white', fontFamily: 'serif', fontSize: '20px' }}>
          <p>*Your country name & Flag will be shown to other</p>
          <p>players when you play online multiplayer*</p>
          <select value={selectedCountry}  style={{ padding: '2% 2%', marginTop: '8%', fontSize: '23px', borderRadius: '8px', backgroundColor: '#565454', color: 'white',width:'90%' }} onChange={(e)=>setSelectedCountry(e.target.value)}>
            <option value="" >🌍  Select your country</option>
            <option value="USA"> USA</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Thailand">Thailand</option>
            <option value="Taiwan">Taiwan</option>
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
            <div style={{width:'38%',textAlign:'left'}}>
              <img style={{objectFit:'cover',width:'100%',textAlign:'left',height:'100%'}} src={img} alt="" />
            </div>
            <div style={{width:'62%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <p>Enter your name:</p>
              
              <input value={name} type="text" onChange={(e)=>setname(e.target.value)} style={{width:'85%',padding:'6px 5px',fontSize:'26px',borderRadius:'10px'}} placeholder="Guest" />
              <p>Enter your Email:</p>
              
              <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} style={{width:'85%',padding:'6px 5px',fontSize:'26px',borderRadius:'10px'}} placeholder="Email" />
            </div>
          </div>
        </div>
        <div id="profilepic" style={{ border: '5px solid yellow',padding:'9px 0px', width: '35%' ,borderRadius:'10px',backgroundColor:'#283593'}}>
          <h1 style={{color:'yellow',fontSize:'20px',fontFamily:'serif'}}><b>Select Your Profile Picture</b></h1>
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

    </div>
  );
}