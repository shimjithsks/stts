import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer-section bg-dark py-5 text-white">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-lg-4">
            <div className="mb-3 d-flex align-items-center gap-2">
              <img src={logo} alt="SecretTTS Logo" height="60" />
              <h4 className="fw-bold m-0">SecretTTS</h4>
            </div>
            <p>
              Secret Trading And Transport Service has earned a reputation for excellence in Qatar’s transportation industry, built on respect, integrity, and efficiency.
            </p>
           <div className="social-icons d-flex gap-3 mt-3">
  <div
    className="social-icon"
    style={{ cursor: 'pointer' }}
    onClick={() => window.open('https://www.facebook.com', '_blank')}
  >
    <i className="bi bi-facebook fs-4"></i>
  </div>
  <div
    className="social-icon"
    style={{ cursor: 'pointer' }}
    onClick={() => window.open('https://www.instagram.com', '_blank')}
  >
    <i className="bi bi-instagram fs-4"></i>
  </div>
  <div
    className="social-icon"
    style={{ cursor: 'pointer' }}
    onClick={() => window.open('https://twitter.com', '_blank')}
  >
    <i className="bi bi-twitter fs-4"></i>
  </div>
</div>

          </div>

          {/* Quick Links */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/why-choose-us">Why Choose Us</a></li>
              <li><a href="/services">What We Offer</a></li>
              <li><a href="/fleet">Our Fleet</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt-fill text-danger me-2 fs-5"></i>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Industrial+Area+Street+36+Doha+Qatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Industrial Area, Street #36 (545), Doha Qatar
                </a>
              </li>
             <li className="mb-3 d-flex align-items-start">
  <i className="bi bi-telephone-fill text-danger me-2 fs-5"></i>
  <div className="d-flex flex-column">
    <a
      href="tel:+97430800072"
      className="text-white text-decoration-none mb-1"
    >
      (+974) 3080 0072
    </a>
    <a
      href="tel:+97477723298"
      className="text-white text-decoration-none"
    >
      (+974) 7772 3298
    </a>
  </div>
</li>

              <li className="d-flex align-items-start">
                <i className="bi bi-envelope-fill text-danger me-2 fs-5"></i>
                <a
                  href="mailto:info@stts.qa"
                  className="text-white text-decoration-none"
                >
                  info@stts.qa
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top mt-4 pt-3 text-center small">
          &copy; {new Date().getFullYear()} Secret Trading And Transport Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
