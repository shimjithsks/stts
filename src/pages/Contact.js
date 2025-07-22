import React, { useState, useRef } from 'react';
import './Contact.css';
import bannerBg from '../assets/move_1.jpg';
import logo from '../assets/logo.png';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

const RECAPTCHA_SITE_KEY = '6LeI_4srAAAAAPpfWqat1OZ3RgHdGszX09u13Gd6';

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef(null);
  const formRef = useRef();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Please verify that you are not a robot.');
      return;
    }

    const form = formRef.current;

    // First email to admin
    emailjs.sendForm(
      'service_by699al',
      'template_7lvn30t',
      form,
      'WmS9GgLgEyRNePAdt'
    );

    // Second email: auto-reply to user
    emailjs.sendForm(
      'service_by699al',
      'template_yfm0oow',
      form,
      'WmS9GgLgEyRNePAdt'
    ).then(
      () => {
        alert('Successfully submitted.');
        form.reset();
        setCaptchaValue(null);
        captchaRef.current.reset(); // Reset CAPTCHA widget
      },
      (error) => {
        alert('Failed to send confirmation. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <>
      {/* Banner Section */}
      <header
        className="contact-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0,0,0,0.6)), url(${bannerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px'
        }}
      >
        <div>
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <h2 className="lead">We’re here to assist you with all your transportation needs</h2>
        </div>
      </header>

      {/* Quote Form Section */}
      <section className="contact-form-section py-5">
        <div className="container">
          <div className="row">
            {/* Left Side: Form */}
            <div className="col-lg-8 mb-4">
              <form ref={formRef} onSubmit={handleSubmit} className="quote-form bg-light p-4 rounded shadow">
                <h1 className="display-5 fw-bold">Get a Quote</h1>
                <p className="lead">
                  Thank you for your interest in Secret Trading And Transport Service. Please fill out the form
                  below so we can provide a tailored solution that meets your transportation needs in Qatar.
                </p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" name="first_name" className="form-control" placeholder="First Name *" required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="last_name" className="form-control" placeholder="Last Name *" required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="company" className="form-control" placeholder="Company" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" className="form-control" placeholder="Email Address *" required />
                  </div>
                  <div className="col-md-6">
                    <input type="tel" name="phone" className="form-control" placeholder="Phone Number *" required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="office_number" className="form-control" placeholder="Office Number" />
                  </div>
                </div>

                <hr className="my-4" />
                <h5>Transportation Requirements (Optional)</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="number" name="passengers" className="form-control" placeholder="No. of Passengers" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="hours" className="form-control" placeholder="Hours of Operation" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="routes" className="form-control" placeholder="No. of Routes" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="contract_period" className="form-control" placeholder="Contract Period" />
                  </div>
                  <div className="col-12">
                    <textarea name="description" className="form-control" placeholder="Description of Needs" rows={4}></textarea>
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="my-4 text-center">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                  />
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-danger px-5">Submit</button>
                </div>
              </form>
            </div>

            {/* Right Side: Contact Sidebar */}
            <div className="col-lg-4">
              <div className="contact-sidebar bg-dark text-white p-4 rounded shadow">
                <h5><i className="bi bi-telephone-fill me-2"></i>Call Us</h5>
                <div className="text-center mb-3">
                  <a href="tel:+97430800072" className="btn btn-danger btn-call-custom d-block mb-2">
                    (+974) 3080 0072
                  </a>
                  <a href="tel:+97477723298" className="btn btn-danger btn-call-custom d-block">
                    (+974) 7772 3298
                  </a>
                </div>

                <h5 className="mt-4"><i className="bi bi-envelope-fill me-2"></i>Email Us</h5>
                <div className="text-center mb-3">
                  <a href="mailto:info@stts.qa" className="btn btn-danger px-5 d-block">info@stts.qa</a>
                </div>

                <h5 className="mt-4"><i className="bi bi-geo-alt-fill me-2"></i>Our Headquarters</h5>
                <a
                  href="https://maps.google.com/?q=Industrial Area, Street #36 (545), Doha Qatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-underline d-block mb-3"
                >
                  Industrial Area, Street #36 (545), Doha Qatar
                </a>

                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?q=Industrial%20Area,%20Street%20%2336%20(545),%20Doha%20Qatar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
