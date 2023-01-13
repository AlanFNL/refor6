import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import Startup from '../assets/titulo.png'
import Startup2 from '../assets/2.png'
import Comercial from '../assets/1.png'
import { useTranslation } from "react-i18next";
import '../Process/Process.css'




function Process() {
    
    const [t, i18n] = useTranslation("global");
    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-200px"},
        { disconnectOnLeave: false},
        {}
    ); 

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);


    return (
        
    <body id='process' className='ror'>
        <h3 className='h1_verticals' style={{ transform: `translateX(${offsetY * 0.15}px`}}> {t("services.our-process1")}</h3>
        <h3 className='h2_verticals' style={{ transform: `translateX(${offsetY * -0.15}px`}}> {t("services.our-process2")}</h3>
     <div className='container_verticals' >
   
        <div className='card_verticals'>
       
          <div className='imgBx' data-text="Consult">
            <img className='img_verticals' src={Startup2} alt="Photo1"></img>
                </div>
                <div className='content_verticals'>
                    <div>
                        <h3 className='h3_verticals'>{t("services.service-1")}</h3>
                        <p className='p_verticals'>{t("services.service-1-text")}</p>
                        
                    </div>
                </div>
                
            </div>
            

            <div className='card_verticals'>
          <div className='imgBx' data-text="Design">
            <img className='img_verticals' src={Comercial} alt="Photo2"></img>
                </div>
                <div className='content_verticals'>
                    <div>
                        <h3 className='h3_verticals'>{t("services.service-2")}</h3>
                        <p className='p_verticals'>{t("services.service-2-text")}</p>
                        
                    </div>
                </div>
            </div>

            <div className='card_verticals'>
          <div className='imgBx' data-text="Launch">
            <img className='img_verticals' src={Startup} alt="Photo3"></img>
                </div>
                <div className='content_verticals'>
                    <div>
                        <h3 className='h3_verticals'>{t("services.service-3")}</h3>
                        <p  className='p_verticals'>{t("services.service-3-text")}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </body>  
    
        
    );
}

export default Process;