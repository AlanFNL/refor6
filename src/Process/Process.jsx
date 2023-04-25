import React, { useState, useRef, useEffect } from "react";
import { useInViewport } from "react-in-viewport";
import Startup from "../assets/titulo.png";
import Startup2 from "../assets/2.png";
import Comercial from "../assets/1.png";
import { useTranslation } from "react-i18next";
import "../Process/Process.css";

function Process() {
  const [t, i18n] = useTranslation("global");
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const leftTextEl = leftTextRef.current;
    const rightTextEl = rightTextRef.current;
    const initialOffsetLeft = 50; // Set the initial offset value
    const maxOffsetLeft = 400; // Set the maximum offset value
    const scrollOffsetFactor = 0.1; // Set the scroll offset factor

    function handleScroll() {
      // Calculate the new offset value based on the scroll position
      const scrollPosition = window.pageYOffset;
      const newOffsetLeft =
        initialOffsetLeft + scrollPosition * scrollOffsetFactor;

      // Set the new offset value within the allowed range
      const offsetLeft = Math.min(
        maxOffsetLeft,
        Math.max(initialOffsetLeft, newOffsetLeft)
      );
      leftTextEl.style.transform = `translateX(${offsetLeft}px)`;
      rightTextEl.style.transform = `translateX(-${offsetLeft}px)`;
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        threshold: 0.1, // trigger the callback when the target element is at least 50% visible
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
    <body id="process" className="ror">
      <h3 className="h1_verticals" ref={leftTextRef}>
        {" "}
        {t("services.our-process1")}
      </h3>
      <h3 className="h2_verticals" ref={rightTextRef}>
        {" "}
        {t("services.our-process2")}
      </h3>
      <div ref={sectionRef} className="container_verticals">
        <div className="card_verticals">
          <div className="imgBx" data-text="Consult">
            <img className="img_verticals" src={Startup2} alt="Photo1"></img>
          </div>
          <div className="content_verticals">
            <div>
              <h3 className="h3_verticals">{t("services.service-1")}</h3>
              <p className="p_verticals">{t("services.service-1-text")}</p>
            </div>
          </div>
        </div>

        <div className="card_verticals">
          <div className="imgBx" data-text="Design">
            <img className="img_verticals" src={Comercial} alt="Photo2"></img>
          </div>
          <div className="content_verticals">
            <div>
              <h3 className="h3_verticals">{t("services.service-2")}</h3>
              <p className="p_verticals">{t("services.service-2-text")}</p>
            </div>
          </div>
        </div>

        <div className="card_verticals">
          <div className="imgBx" data-text="Launch">
            <img className="img_verticals" src={Startup} alt="Photo3"></img>
          </div>
          <div className="content_verticals">
            <div>
              <h3 className="h3_verticals">{t("services.service-3")}</h3>
              <p className="p_verticals">{t("services.service-3-text")}</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Process;
