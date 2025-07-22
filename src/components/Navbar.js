import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse.show');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <>
      {/* Floating Contact Bar */}
      <div
        className="floating-contact-bar"
        onMouseEnter={() => document.querySelector(".floating-contact-bar").classList.add("expanded")}
        onMouseLeave={() => document.querySelector(".floating-contact-bar").classList.remove("expanded")}
      >
        <div className="toggle-btn">
          <i className="bi bi-arrow-left text-white"></i>
        </div>
        <a
          href="https://wa.me/97430800072?text=Hi%20SecretTTS%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          className="contact-icon whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="tel:+97430800072" className="contact-icon phone">
          <i className="bi bi-telephone"></i>
        </a>
      </div>

      {/* Top Bar */}
      <div className="top-bar text-white py-2">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <span className="welcome-text">Welcome To Secret Trading And Transport Service</span>
          <div className="social-icons d-flex align-items-center gap-3">
            <a onClick={() => window.open('https://www.facebook.com', '_blank')} className="social-icon"><i className="bi bi-facebook"></i></a>
            <a onClick={() => window.open('https://www.instagram.com', '_blank')} className="social-icon"><i className="bi bi-instagram"></i></a>
            <a onClick={() => window.open('https://www.twitter.com', '_blank')} className="social-icon"><i className="bi bi-twitter"></i></a>
            <a
              href={`${process.env.PUBLIC_URL}/files/secret_profile.pdf`}
              className="download-profile-icon"
              download
            >
              DOWNLOAD PROFILE
            </a>
          </div>
        </div>
      </div>

      {/* Logo + Menu */}
      <div className="menu-bar px-4 py-2">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="logo d-flex align-items-center">
            <img src={logo} alt="SecretTTS" height="60" />
            <h2 className="m-0 fw-bold text-white ms-2 position-relative logo-with-icon">
              Secret
              <span className="tt-highlight position-relative">
                TT
                <i className="bi bi-gem diamond-icon"></i>
              </span>
              Service
            </h2>
          </div>

          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
                {[
                  { path: '/', label: 'HOME' },
                  { path: '/why-choose-us', label: 'WHY CHOOSE US' },
                  { path: '/services', label: 'OUR SERVICES' },
                  { path: '/fleet', label: 'OUR FLEET' },
                  { path: '/gallery', label: 'GALLERY' },
                  { path: '/contact', label: 'CONTACT US' },
                ].map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <NavLink className="nav-link menu-link" to={item.path} onClick={handleNavLinkClick}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
