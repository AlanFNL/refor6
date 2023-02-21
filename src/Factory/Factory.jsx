import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import './Factory.css'
import { useTranslation } from "react-i18next";
import coins from '../assets/coins.png'
import key from '../assets/key.png'
import unlock from '../assets/padlock-unlock.png'
import loyalty from '../assets/loyalty.png'
import certificate from '../assets/certificate.png'
import token from '../assets/token.png'


function Factory() {
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
  
    const Ref_f = useRef()

    const Boton = () => {
        Ref_f.current.classList.add('show')
    }
    
    const BotonOff = () => {
        Ref_f.current.classList.remove('show')
    
    }
 
    return (
        <body id='nft-factory' className='body_factory'>
            
            <div className='picture_factory'>
                <div loading='lazy' className='pic_factory' >
                
                  <div className='container_factory'>
        <h2 className='h2_factory'>NFT FACTORY</h2>
        <p className='p_factory'>{t("factory.text")}</p>
           <div className='modal'>
        <a onClick={Boton} className='btn_factory'>{t("learn-btn.text")}</a>
           </div>
        <div ref={Ref_f} className='modal_container_f'>
            <div className='modal_f'>
          <div className='container_nfts'>
            <h1 className='h1_nfts'>{t("factory.bullet-header")}</h1>
            <div className='row_nfts'>
                <div className='service_nfts'>
                   <img src={key} className="img_nfts"></img>
                  <h2 className='h2_nfts'>{t("factory.bullet-1")}</h2>
                  <p className='p_nfts'>{t("factory.bullet-1-i")}</p>
                </div>
                <div className='service_nfts'>
                <img src={coins} className="img_nfts"></img>
                  <h2 className='h2_nfts'>{t("factory.bullet-2")}</h2>
                  <p className='p_nfts'>{t("factory.bullet-2-i")}</p>
                </div>
                <div className='service_nfts'>
                <img src={loyalty} className="img_nfts"></img>
                  <h2 className='h2_nfts'>{t("factory.bullet-3")}</h2>
                  <p className='p_nfts'>{t("factory.bullet-3-i")}</p>
                </div>
                <div className='service_nfts'>
                <img src={token} className="img_nfts"></img>
                  <h2 className='h2_nfts'>{t("factory.bullet-4")}</h2>
                  <p className='p_nfts'>{t("factory.bullet-4-i")}</p>

                </div>
                <div className='service_nfts'>
                <img src={unlock} className="img_nfts"></img>
                  <h2 className='h2_nfts'>{t("factory.bullet-5")}</h2>
                  <p className='p_nfts'>{t("factory.bullet-5-i")}</p>
                </div>
                <div className='service_nfts'>
                <img src={certificate} className="img_nfts"></img>
                  <h2 className='h2_nfts'>{t("factory.bullet-6")}</h2>
                  <p className='p_nfts'>{t("factory.bullet-6-i")}</p>
                </div>
                <div className='modal_close'>
                <a onClick={BotonOff} className='btn_factory2'>{t("factory.bullet-close")}</a>
                </div>
            </div>
          </div>
        </div>



        </div>
                </div>
        
                 </div>
                
            </div>
           
           </body>


         
          
        
            
    

    
    );
}


export default Factory;