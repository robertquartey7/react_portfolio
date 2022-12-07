import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact min__height container d-flex flex-column align-items-center justify-content-center gap-5 ">
      <h1>Contact</h1>
      <p className="text-center">
        Interested in hiring me for your project or just want to say hi? You can
        fill in the contact form below or send me an email to
        <a href=""> robertquartey7@gmail.com</a>
      </p>
      <h1>Get In Touch</h1>
      <div className="contact-form">
        <form action="/contact" className="">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" name="email" id="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="msg" className="form-label">
              Message
            </label>
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
