import React, { useEffect, useRef } from 'react';
import audioSrc from "../Audio/jump.wav"
export const Jumpplay = () => {
  const audioRef = useRef(null);
  useEffect(()=>{
    audioRef.current.play()
  },[])
 

  return (
    <div> 
      {/* Hidden audio element */}
      <audio ref={audioRef} controls={false}>
        <source src={audioSrc} />
        {/* Add additional source elements for different audio formats (if needed) */}
      </audio>
    </div>
  );
};

