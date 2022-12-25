import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container x-content">
        <h2>Contact</h2>
        <div className="content">
          <div className="x-left">
            <div className="box-info">
              <i className="uil uil-envelope"></i>
              <h3>Email</h3>
              <h4>misbahx.id@gmail.com</h4>
              <a href="">send message</a>
            </div>

            <div className="box-info">
              <i className="uil uil-facebook-messenger"></i>
              <h3>Messenger</h3>
              <h4>Misbah Mv</h4>
              <a href="">send message</a>
            </div>

            <div className="box-info">
              <i className="uil uil-whatsapp"></i>
              <h3>WhatsApp</h3>
              <h4>+62 856 4105 4319</h4>
              <a href="">send message</a>
            </div>
          </div>
          <div className="x-right">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Your name..."
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
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
