import React, { useRef} from 'react'
import { useInViewport } from 'react-in-viewport'
import './Footer.css';
import instagramLogo from '../assets/logo-instagram.svg'
import linkedinLogo from '../assets/logo-linkedin.svg'
import twitterLogo from '../assets/logo-twitter.svg'
import '../assets/wave.png'
import reforceLogo from '../assets/refor.png' 

function Footer() {

   

    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-200px"},
        { disconnectOnLeave: false},
        {}
    );


    return (
         
            <body className='body_footer'>

                
                <footer id='contact'>
                    <div className='waves'>
                        <div loading='lazy' className='wave' id='wave1'></div>
                        <div loading='lazy' className='wave' id='wave2'></div>
                        <div loading='lazy' className='wave' id='wave3'></div>
                        <div loading='lazy' className='wave' id='wave4'></div>
                    </div>
                    <div className='footer_part1'>
                        <div className='footer_box'>
                           <figure>
                            <img src={reforceLogo}></img>
                           </figure>
                        </div>
                        <div className='footer_box'>
                            <h2>CONTACT INFO</h2>
                            <p>reforce@gmail.com</p>
                            <p>+549123456</p>
                            <p>Based in Buenos Aires, Argentina</p>
                        </div>
                          <div className='footer_box'>
                            <h2>FOLLOW US</h2>
                            <ul className='social_icon'>
                              <li className='li_social'><a className='a_social' href='https://www.instagram.com/reforcecommunity/'><img className='ig' loading='lazy' alt='instagram' src={instagramLogo}/></a></li>
                              <li className='li_social'><a className='a_social' href='https://www.linkedin.com/company/reforce-infinity/'><img className='ig' loading='lazy' alt='linkedin' src={linkedinLogo}/></a></li>
                              <li className='li_social'><a className='a_social' href='https://twitter.com/reforceinfinity'><img className='ig' loading='lazy' alt='twitter' src={twitterLogo}/></a></li>
                           </ul>
                        </div>
                    </div>
                    
                    
                    <p className='p_footer'>Powered by Reforce</p>
                </footer>
               
            </body>


         
          
        
            
    

    
    );
}


export default Footer;