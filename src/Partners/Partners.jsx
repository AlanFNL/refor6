import React, { useRef, useEffect } from "react";
import { useInViewport } from "react-in-viewport";
import { useTranslation } from "react-i18next";
import myco from "../assets/1-08.png";
import unaje from "../assets/1-03.png";
import milenium from "../assets/1-05.png";
import sandbox from "../assets/sand_white_2.png";
import fije from "../assets/1-06.png";
import uala from "../assets/1-02.png";
import pepsi from "../assets/1-04-04.png";
import hrztl from "../assets/1-07.png";
import "./Partners.css";

function Partners() {
  const [t, i18n] = useTranslation("global");
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade");
          } else {
            entry.target.classList.remove("fade");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sectionElement = sectionRef.current;

    if (sectionElement) {
      const liElements = sectionElement.querySelectorAll("li");

      liElements.forEach((liElement) => {
        sectionObserver.observe(liElement);
      });
    }

    return () => {
      if (sectionElement) {
        const liElements = sectionElement.querySelectorAll("li");

        liElements.forEach((liElement) => {
          sectionObserver.unobserve(liElement);
        });
      }
    };
  }, []);

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

    const sectionElement = sectionRef2.current;

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
    <body className="body-p">
      <div id="partners" className="client-wrap">
        <h1 ref={sectionRef2} className="h1-p">
          {t("partners.header")}
        </h1>
        <hr className="hr-p" />
        <div className="client-in">
          <ul ref={sectionRef} className="ul-p">
            <li className="li-p">
              <img loading="lazy" className="img-p" src={uala} alt="" />
            </li>
            <li className="li-p">
              <img loading="lazy" className="img-p" src={sandbox} alt="" />
            </li>
            <li className="li-p">
              <img loading="lazy" className="img-p" src={pepsi} alt="" />
            </li>
            <li className="li-p">
              <img loading="lazy" className="img-p" src={milenium} alt="" />
            </li>
            <li className="li-p">
              <img loading="lazy" className="img-p" src={unaje} alt="" />
            </li>
            <li className="li-p">
              <img loading="lazy" className="img-p" src={fije} alt="" />
            </li>
            <li className="li-p">
              <img loading="lazy" className="img-p" src={hrztl} alt="" />
            </li>
            <li className="li-p">
              <img loading="lazy" className="img-p" src={myco} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
}

export default Partners;
