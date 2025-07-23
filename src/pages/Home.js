import React, { useState, useEffect } from 'react';
import './Home.css';
import move1 from '../assets/move_1.jpg';
import move2 from '../assets/move_2.jpg';
import move3 from '../assets/move_3.jpg';
import move4 from '../assets/move_4.jpg';
import truck from '../assets/truck.jpg';
import Act from '../assets/actlogo1.png';
import Emkan from '../assets/emkan_engineering.jpg';
import Infra from '../assets/infraroad_trading_logo.jpg';
import Talabat from '../assets/talabath_logo.png';
import Kentzo from '../assets/Kentzlogo.png';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

export default function Home() {
  const images = [move1, move2, move3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero Section */}
      <header
        className="hero hero-small d-flex align-items-center justify-content-center text-center text-white position-relative overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[currentImage]}) center center/cover no-repeat`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="container">
          <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="display-4 fw-bold mb-4 animate-text" style={{ color: '#fff' }}>
              Your Journey, Our Responsibility<br />
              Luxury & Reliable Transport Across Qatar
            </h1>
            <p className="lead fs-4 animate-text-delay" style={{ color: '#fff' }}>
              Your trusted partner for transportation in Qatar
            </p>
            <Link to="/contact" className="btn btn-danger btn-lg mt-4 animate-btn">Request Our Services</Link>
          </div>
        </div>
      </header>

      {/* Commitment & Approach Section */}
      <section className="solution-section py-5 bg-white text-dark">
        <div className="container">
          <div className="row text-center text-lg-start align-items-center">
            {/* Commitment */}
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <h2 className="fw-bold mb-3">Our Commitment</h2>
              <p className="lead">
                We strive to redefine transportation excellence by combining luxury, safety, and comfort.
              </p>
              <ul className="list-unstyled mt-3">
                <li><i className="bi bi-check-circle-fill text-danger me-2"></i> Experienced, professional drivers</li>
                <li><i className="bi bi-check-circle-fill text-danger me-2"></i> Modern, well-maintained vehicles</li>
                <li><i className="bi bi-check-circle-fill text-danger me-2"></i> Unparalleled customer support</li>
              </ul>
              <Link to="/why-choose-us" className="btn btn-danger btn-lg mt-4">Read More</Link>
            </div>

            {/* Approach */}
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="fw-bold mb-3">Our Approach</h2>
              <p className="lead">
                Tailored solutions for every transportation need—corporate, personal, or event-based.
              </p>
              <ul className="list-unstyled mt-3">
                <li><i className="bi bi-lightning-charge-fill text-danger me-2"></i> Fast & flexible booking</li>
                <li><i className="bi bi-people-fill text-danger me-2"></i> Personalized service packages</li>
                <li><i className="bi bi-shield-check text-danger me-2"></i> Dedicated account managers</li>
              </ul>
              <Link to="/contact" className="btn btn-danger btn-lg mt-4">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="our-vision-section text-white text-center py-5"
        style={{ background: `linear-gradient(rgba(178,143,143,0.6), rgba(0,0,0,0.6)), url(${move2}) center/cover no-repeat` }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Our Vision</h2>
          <p className="lead mx-auto" style={{ maxWidth: '900px' }}>
            Our mission is to deliver unmatched customer service, establishing ourselves as Qatar’s leading transportation provider.
          </p>
          <div className="row mt-5 g-4">
            {["Best Services", "Skilled Drivers", "Quality Vehicles", "Customer Satisfaction"].map((text, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="text-center">
                  <i className={`bi ${["bi-patch-check-fill", "bi-person-bounding-box", "bi-car-front-fill", "bi-stars"][i]} display-4 mb-3 text-white`}></i>
                  <h6 className="fw-bold">{text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="what-we-offer-section py-5 bg-light">
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">Our Services</h2>
            <p className="lead text-muted">Comprehensive transport & rental solutions designed for comfort, safety, and reliability.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: "bi-bus-front", title: "Staff & School Transport" },
              { icon: "bi-person-badge", title: "Executive Chauffeur" },
              { icon: "bi-calendar2-check", title: "Contract Rentals" },
              { icon: "bi-gem", title: "Special Events" },
            ].map(({ icon, title }, i) => (
              <div className="col-md-6 col-lg-3" key={i} data-aos="zoom-in" data-aos-delay={100 * (i + 1)}>
                <div className="offer-card bg-white p-4 h-100 shadow rounded text-center">
                  <i className={`bi ${icon} display-4 text-danger mb-3`}></i>
                  <h5 className="fw-bold mb-2">{title}</h5>
                  <p className="text-muted">Description for {title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-danger btn-lg">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="contact-prompt-section text-white text-center py-5"
        style={{ background: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${move1}) center/cover no-repeat` }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Need Assistance?</h2>
          <p className="lead mx-auto mb-4" style={{ maxWidth: '800px' }}>
            Have questions, need a quote, or looking for a tailored transportation solution?
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <a href="tel:+97430800072" className="btn btn-danger px-4 py-3 text-white fw-bold shadow">(+974) 3080 0072</a>
            <a href="tel:+97477723298" className="btn btn-danger px-4 py-3 text-white fw-bold shadow">(+974) 7772 3298</a>
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="our-vehicles-section py-5 bg-light">
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">Our Vehicles</h2>
            <p className="lead text-muted">Explore our diverse fleet designed for safety, efficiency, and luxury across Qatar.</p>
          </div>
          <div className="row g-4">
            {[{ src: move1, title: 'Bus' }, { src: truck, title: 'Truck' }, { src: move4, title: 'Tanker' }, { src: move3, title: 'Cars' }].map(({ src, title }, i) => (
              <div className="col-md-6 col-lg-3" key={i} data-aos="zoom-in" data-aos-delay={100 * (i + 1)}>
                <div className="vehicle-card bg-white p-4 h-100 shadow rounded text-center">
                  <img src={src} alt={title} className="vehicle-image mb-3" />
                  <h5 className="fw-bold mb-2">{title}</h5>
                  <p className="text-muted">Description for {title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/fleet" className="btn btn-danger btn-lg">View Full Fleet</Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="our-achievements-section text-white text-center py-5"
        style={{ background: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${move3}) center/cover no-repeat` }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Our Achievements</h2>
          <div className="row mt-5 g-4 justify-content-center">
            {[{ icon: "bi-clock-history", value: 10, label: "Years" },
              { icon: "bi-card-checklist", value: 7, label: "Services" },
              { icon: "bi-person-fill", value: 100, label: "Staff" },
              { icon: "bi-truck-front", value: 100, label: "Fleet" },
              { icon: "bi-people", value: 20, label: "Clients" }].map(({ icon, value, label }, i) => (
              <div className="col-6 col-md-2" key={i}>
                <i className={`bi ${icon} display-4 mb-3 text-white`}></i>
                <h3 className="fw-bold"><CountUp end={value} duration={3} suffix={value > 10 ? "+" : ""} /></h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Trusted Clients */}
<section className="trusted-clients py-5 bg-white">
  <div className="container" data-aos="fade-up">
    <div className="text-center mb-5">
      <h2 className="fw-bold display-5 text-black">Our Valued Clients</h2>
      <p className="lead text-muted">We Promised. They Trusted. We Delivered.</p>
    </div>
    <div className="clients-carousel-wrapper overflow-hidden">
      <div className="clients-carousel d-flex flex-nowrap align-items-center">
        {[
          { logo: Act, name: "Advanced Construction Technologies" },
          { logo: Emkan, name: "Emkan Engineering" },
          { logo: Infra, name: "Infraroad" },
          { logo: Talabat, name: "Talabat" },
          { logo: Kentzo, name: "Kentz" },
        ].map((client, i) => (
          <div className="client-logo-wrapper text-center flex-shrink-0 px-3" key={i}>
            <img src={client.logo} alt={client.name} className="client-logo" />
            <div className="client-name">{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </>
  );
}
