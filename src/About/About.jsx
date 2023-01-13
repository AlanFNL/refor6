import React, { useRef, useState } from 'react'
import { useInViewport } from 'react-in-viewport'
import { useTranslation } from "react-i18next";
import '../About/About.css'

function AboutUs() {

    const [t, i18n] = useTranslation("global");

    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-100px"},
        { disconnectOnLeave: false},
        {}
    );

   return (
      <body className='body_about'>
        <div className='div_about'>
            <div className='text_about'>
            <h2 className='h2_about'>{t("header.about-us")}</h2>
            <p className='p_about'>{t("header.about-us-text")}</p>
            </div>
        </div>
      </body>
   )

}

export default AboutUs