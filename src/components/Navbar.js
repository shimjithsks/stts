import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      {/* WhatsApp Floating Icon */}
      <div
        className="whatsapp-float"
        onClick={() =>
          window.open(
            'https://wa.me/97430800072?text=Hi%20SecretTTS%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.',
            '_blank'
          )
        }
      >
        <i className="bi bi-whatsapp fs-4"></i>
      </div>


      {/* Top bar */}
      <div className="top-bar text-white py-2">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <span className="welcome-text">Welcome To Secret Trading And Transport Service</span>
          <div className="social-icons d-flex align-items-center gap-3">
            <div className="social-icon" onClick={() => window.open('https://www.facebook.com', '_blank')}>
              <i className="bi bi-facebook"></i>
            </div>
            <div className="social-icon" onClick={() => window.open('https://www.instagram.com', '_blank')}>
              <i className="bi bi-instagram"></i>
            </div>
            <div className="social-icon" onClick={() => window.open('https://twitter.com', '_blank')}>
              <i className="bi bi-twitter"></i>
            </div>
            <a href="/Secret_Profile.pdf" className="download-btn" download>
              DOWNLOAD PROFILE
            </a>
          </div>
        </div>
      </div>

      {/* Middle section */}
      <div className="middle-bar py-3 position-relative">
        <div className="container d-flex flex-column gap-2">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4">
            <div className="logo d-flex align-items-center gap-2">
              <img src={logo} alt="SecretTTS" height="100" />
              <h2 className="m-0 fw-bold">SecretTTS</h2>
            </div>

            <div className="contact-info d-flex justify-content-end flex-grow-1 flex-wrap gap-4">
              <div
                className="contact-item"
                onClick={() => window.open('https://maps.google.com/?q=Industrial Area, Street #36 (545), Doha Qatar', '_blank')}
              >
                <i className="bi bi-geo-alt-fill me-2"></i>
                <div>
                  <strong>Locate Us:</strong> Industrial Area, Street #36 (545), Doha Qatar
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone-fill me-2"></i>
                <div className="d-flex flex-column">
                  <span onClick={() => (window.location.href = 'tel:+97430800072')}>
                    <strong>Call Us:</strong> (+974) 3080 0072
                  </span>
                  <span onClick={() => (window.location.href = 'tel:+97477723298')}>
                    (+974) 7772 3298
                  </span>
                </div>
              </div>

              <div className="contact-item" onClick={() => (window.location.href = 'mailto:info@stts.qa')}>
                <i className="bi bi-envelope-fill me-2"></i>
                <div>
                  <strong>Mail Us:</strong> info@stts.qa
                </div>
              </div>
            </div>
          </div>

          {/* Navigation menu */}
          <nav className="navbar navbar-expand-lg py-2 w-100" style={{ backgroundColor: 'transparent' }}>
            <div className="container px-0">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/">HOME</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/why-choose-us">WHY CHOOSE US</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/services">WHAT WE OFFER</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/fleet">OUR FLEET</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/gallery">GALLERY</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu-link" to="/contact">CONTACT US</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
