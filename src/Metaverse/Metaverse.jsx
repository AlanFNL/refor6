import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import { useTranslation } from "react-i18next";
import reel from '../assets/metaverse.mp4'
import './Metaverse.css'




function Metaverse() {
    const [t, i18n] = useTranslation("global");
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-200px"},
        { disconnectOnLeave: false},
        {}
    );
  
    const btn_meta = document.querySelector('.btn_metaverse');

const videoContainer = document.querySelector('.video_container');

const close = document.querySelector('.close');

const video = document.querySelector('video');

const myRef = useRef()

const Boton = () => {
    myRef.current.classList.add('show')
}

const BotonOff = () => {
    myRef.current.classList.remove('show')
    video.pause();
    video.currentTime = 0;
}



 
    return (

        


        <body id='metaverse-studio' className='body_metaverse'>
            
            <div   className='picture_metaverse'>
                <div loading="lazy" className='pic' >
                
                <div className='container_metaverse'>
        <h2 className='h2_metaverse'>METAVERSE STUDIO</h2>
        <p className='p_metaverse'>{t("metaverse.text")}</p>
         
        <div className='modal'>
        <a  onClick={Boton}  className='btn_metaverse'>{t("learn-btn.text")}</a>

          <div ref={myRef} className='video_container'>
            <span onClick={BotonOff} className='close'>&#10006;</span>
            <video src={reel} controls></video>
          </div>
        </div>
        
                </div>
       
                </div>
        
            </div>
           
        </body>


         
          
        
            
    

    
    );
}


export default Metaverse;