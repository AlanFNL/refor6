import React, { useRef, useState, useEffect } from "react";
import { useInViewport } from "react-in-viewport";
import { useTranslation } from "react-i18next";
import { PopupButton, PopupWidget } from "react-calendly";

import "../Consult/Consult.css";

function Consult() {
  const [t, i18n] = useTranslation("global");

  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false },
    {}
  );

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade"); // add the "fade-in" class to the target element
          } else {
            entry.target.classList.remove("fade"); // remove the "fade-in" class from the target element
          }
        });
      },
      {
        threshold: 0.5, // trigger the callback when the target element is at least 50% visible
      }
    );

    const sectionElement = sectionRef.current;

    if (sectionElement) {
      sectionObserver.observe(sectionElement); // observe the target element
    }

    return () => {
      if (sectionElement) {
        sectionObserver.unobserve(sectionElement); // stop observing the target element when the component unmounts
      }
    };
  }, []);

  return (
    <body id="about" className="body_consult">
      <div className="div_consult">
        <div ref={sectionRef} className="text_consult">
          <h2 className="h2_consult">Discovery Meeting</h2>
          <p className="p_2">Limited time offer:</p>
          <p className="p_consult">
            We’re gifting a 30 minute consultation during March, where you’ll
            have the opportunity to access to personalized digital marketing
            advice with our experts, to get more info click the button below!
          </p>
          <PopupButton
            className="a_consult"
            text="Get Started"
            url="https://calendly.com/reforce/30min"
            rootElement={document.getElementById("root")}
          />
          ;
        </div>
      </div>
    </body>
  );
}

export default Consult;
