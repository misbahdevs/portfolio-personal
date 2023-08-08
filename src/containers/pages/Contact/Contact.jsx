import React, { useRef, useState } from "react";
import Box from "./Child/Box";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const clearForm = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0bcb14u",
        "template_kiw438y",
        form.current,
        "6W_gbIQFTx5BFczlk"
      )
      .then(
        (result) => {
          alert("pesan berhasil dikirim");
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const icon = [
    <i className="uil uil-envelope"></i>,
    <i className="uil uil-facebook-messenger"></i>,
    <i className="uil uil-whatsapp"></i>,
  ];

  return (
    <section id="contact">
      <div className="container x-content">
        <h2>Contact</h2>
        <div className="content">
          <div className="x-left">
            <Box
              icon={icon[0]}
              title="Email"
              desc="misbahx.id@gmail.com"
              link="mailto:misbahx.id@gmail.com"
            />
            <Box icon={icon[1]} title="Messenger" desc="Misbah Mv" link="#" />
            <Box
              icon={icon[2]}
              title="WhatsApp"
              desc="+62 856 4105 4319"
              link="https://wa.me/6285641054319"
            />
          </div>
          <div className="x-right">
            <form ref={form} className="" onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Your name..."
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email..."
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="form-control"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-more">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
