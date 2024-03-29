import React, { useRef, useEffect } from "react";
import { useInViewport } from "react-in-viewport";
import { useTranslation } from "react-i18next";
import Spline from "@splinetool/react-spline";
import "../About/About.css";

function AboutUs() {
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
    <body id="about" className="body_about">
      <div className="div_about">
        <div ref={sectionRef} className="text_about">
          <h2 className="h2_about">{t("header.about-us")}</h2>
          <p className="p_about">{t("header.about-us-text")}</p>
        </div>
        <div className="spline_model">
          <Spline scene="https://prod.spline.design/MTGt6-GeQPy0x6H2/scene.splinecode" />
        </div>
      </div>
    </body>
  );
}

export default AboutUs;
