import React, { useState, useRef, useEffect } from "react";
import { useInViewport } from "react-in-viewport";
import "../Form/Form.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function Form() {
  const [t, i18n] = useTranslation("global");
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ot3hpfi",
        "template_c30ggqn",
        form.current,
        "8n4JZmIrLp0snawq_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  function messages() {
    var Name = document.getElementById("name");
    var email = document.getElementById("email");
    var msg = document.getElementById("msg");
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");

    if (Name.value === "" || email.value === "" || msg.value === "") {
      danger.style.display = "block";
    } else {
      setTimeout(() => {
        Name.value = "";
        email.value = "";
        msg.value = "";
      }, 2000);

      success.style.display = "block";
    }

    setTimeout(() => {
      danger.style.display = "none";
      success.style.display = "none";
    }, 2000);
  }

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
    <body className="body_form">
      <div ref={sectionRef} className="container_form">
        <div className="text_form">{t("form.contact")}</div>
        <div className="text_form">Contact us</div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="row_form">
            <div className="input_data">
              <input type="text" name="from_name" id="name" required />
              <div className="underline"></div>
              <label>{t("form.name")}</label>
            </div>
          </div>
          <div className="row_form">
            <div className="input_data">
              <input type="text" name="mail" id="email" required></input>
              <div className="underline"></div>
              <label>{t("form.mail")}</label>
            </div>
          </div>
          <div className="row_form">
            <div className="input_data textarea">
              <textarea
                cols="30"
                rows="10"
                name="message"
                id="msg"
                required
              ></textarea>
              <div className="underline"></div>
              <label>{t("form.msg")}</label>
            </div>
          </div>
          <div className="row_form submit_btn">
            <div className="input_data">
              <div className="inner_form"></div>
              <input
                type="submit"
                value={t("form.submit")}
                onClick={messages}
              />
            </div>
            <div className="message_form">
              <div className="success_form" id="success">
                {t("form.submit-good")}
              </div>
              <div className="danger_form" id="danger">
                {t("form.submit-bad")}
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Form;
