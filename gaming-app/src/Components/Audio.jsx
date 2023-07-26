import React, { useEffect, useRef } from "react";
import audio from "../Audio/LUDO KING - BGM.mp3";
import { useDispatch, useSelector } from "react-redux";
import { toggel } from "../Redux/Audiored/action";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const isMuted = useSelector((store)=> store.audioreducer.audio)
  const dispatch=useDispatch()
  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play().catch((error) => {
        // Autoplay failed, handle the error here
        console.log("Autoplay failed:", error);
      });
    };

    const handleComponentMount = () => {
      document.removeEventListener("click", handleComponentMount);
      playAudio();
    };

    document.addEventListener("click", handleComponentMount);

    return () => {
      document.removeEventListener("click", handleComponentMount);
    };
  }, []);

  useEffect(() => {
    audioRef.current.muted = isMuted;
  }, [isMuted]);

 

  return (
    <div > 
      <audio ref={audioRef} autoPlay loop>
        <source src={audio} />
      </audio>
      
    </div>
  );
};

export default AudioPlayer;