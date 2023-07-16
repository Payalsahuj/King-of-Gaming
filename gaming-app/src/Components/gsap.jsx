import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import '../CSS/gsap.css'


export const Gsap=()=>{
    const timeline=gsap.timeline({
        repeat:false,
        defaults:{duration:1,ease:'caseInOut'}
    })

    const e1Ref=useRef()
    const e2Ref=useRef()
    const e3Ref=useRef()
    const e4Ref=useRef()

    const lineRef=useRef()
    const DATA=[
        {id:1,letter:"L",name:'Lively',color:'lightgreen',ref:e1Ref},
        {id:2,letter:"U",name:'Universal',color:'yellow',ref:e2Ref},
        {id:3,letter:"D",name:'Dice',color:'skyblue',ref:e3Ref},
        {id:4,letter:"O",name:'Operation',color:'red',ref:e4Ref}


    ]
    useEffect(()=>{
        timeline.from(e1Ref.current,{autoAlpha:0,x:-100,duration:.6})
        .from(e2Ref.current,{autoAlpha:0,x:-100,duration:.6})
        .from(e3Ref.current,{autoAlpha:0,x:-100,duration:.6})
        .from(e4Ref.current,{autoAlpha:0,x:-100,duration:.6})

        // .from(e1Ref.current,{autoAlpha:0,x:-100,duration:.5,delay:1})
        // .from(e2Ref.current,{autoAlpha:0,x:-100,duration:.5})
        // .from(e3Ref.current,{autoAlpha:0,x:-100,duration:.5})
        .from(lineRef.current,{opacity:0,duration:1})
    },[])

    return(
        <div className="mainBox">
            <div className="wrapper">
                {DATA.map(el=>{
                    return(
                        <div key={el.id} style={{color:el.color}} ref={el.ref}>
                            <h1><b>{el.letter}</b></h1>
                            <p><b>{el.name}</b></p>
                            </div>
                    )
                })}
            </div>
            <div className="line" ref={lineRef}></div>
        </div>
    )
}