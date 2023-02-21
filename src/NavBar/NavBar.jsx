import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInViewport } from "react-in-viewport";
import { HashLink as Links } from "react-router-hash-link";
import "./NavBar.css";
import reforceLogo from "../assets/reforceLogo.png";
import { useNavigate } from "react-router-dom";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 0;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const [t, i18n] = useTranslation("global");
  const [active, setActive] = useState("menu_navbar");
  const [icon, setIcon] = useState("toggler_navbar");

  const ToggleNavbar = () => {
    active === "menu_navbar"
      ? setActive("menu_navbar active_navbar")
      : setActive("menu_navbar");

    if (icon === "toggler_navbar") {
      setIcon("toggler_navbar toggle");
    } else setIcon("toggler_navbar");
  };

  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 0) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ref = useRef(null);

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "100px" },
    { disconnectOnLeave: false },
    {}
  );

  const navigate = useNavigate();

  const handleBlogClick = () => {
    // Call navigate inside a useEffect hook
    useEffect(() => {
      navigate("/blog");
    }, []);
  };
  return (
    <div ref={ref} className="div_nav">
      <img className="img_nav" src={reforceLogo} onClick={scrollUp}></img>
      <nav className="nav">
        <ul className={active}>
          <Links to="#about" smooth scroll={(el) => scrollWithOffset(el)}>
            <a className="a_navbar" href="#about">
              {t("nav.1")}
            </a>
          </Links>
          <Links
            className="link"
            to="#process"
            smooth
            scroll={(el) => scrollWithOffset(el)}
          >
            <a className="a_navbar" href="#process">
              {t("nav.2")}
            </a>
          </Links>

          <Links
            to="#metaverse-studio"
            smooth
            scroll={(el) => scrollWithOffset(el)}
          >
            <a className="a_navbar" href="#metaverse-studio">
              METAVERSE STUDIO
            </a>
          </Links>

          <Links to="#nft-factory" smooth scroll={(el) => scrollWithOffset(el)}>
            <a className="a_navbar" href="#nft-factory">
              NFT FACTORY
            </a>
          </Links>

          <Links to="/blog" smooth scroll={(el) => scrollWithOffset(el)}>
            <a className="a_navbar" onClick={handleBlogClick}>
              BLOG
            </a>
          </Links>

          <Links to="#partners" smooth scroll={(el) => scrollWithOffset(el)}>
            <a className="a_navbar" href="#partners">
              {t("nav.5")}
            </a>
          </Links>

          <Links to="#contact" smooth scroll={(el) => scrollWithOffset(el)}>
            <a className="a_navbar" href="#contact">
              {t("nav.6")}
            </a>
          </Links>

          {isConnected ? (
            <a className="btn_connected">{t("nav.8")}</a>
          ) : (
            <a className="btn_connect" onClick={connectAccount}>
              {t("nav.7")}
            </a>
          )}
        </ul>
        <div onClick={ToggleNavbar} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="div_language">
          <a className="btn_language" onClick={() => i18n.changeLanguage("en")}>
            EN
          </a>
          <hr className="hr_btn"></hr>
          <a className="btn_language" onClick={() => i18n.changeLanguage("es")}>
            ES
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
