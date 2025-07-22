import React, { useState, useEffect } from 'react';
import './Home.css';
import move1 from '../assets/move_1.jpg';
import move2 from '../assets/move_2.jpg';
import move3 from '../assets/move_3.jpg';
import move4 from '../assets/move_4.jpg';
import truck from '../assets/truck.jpg';

import CountUp from 'react-countup';
import { Link } from 'react-router-dom'; 

export default function Home() {
  const images = [move1, move2, move3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero section */}
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

      {/* Dual-column aim/solution section */}
<section className="solution-section py-5 bg-white text-dark">
  <div className="container">
    <div className="row text-center text-lg-start align-items-center">
      {/* Our Commitment */}
      <div
        className="col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-center align-items-center align-items-lg-start"
        data-aos="fade-right"
      >
        <h2 className="fw-bold mb-3">Our Commitment</h2>
        <p className="lead">
          We strive to redefine transportation excellence by combining luxury, safety, and comfort.
          Our fully-licensed and insured fleet ensures peace of mind for every journey.
        </p>
        <ul className="list-unstyled mt-3">
          <li className="mb-2 d-flex align-items-center">
            <i className="bi bi-check-circle-fill text-danger me-2 fs-4"></i>
            Experienced, professional drivers
          </li>
          <li className="mb-2 d-flex align-items-center">
            <i className="bi bi-check-circle-fill text-danger me-2 fs-4"></i>
            Modern, well-maintained vehicles
          </li>
          <li className="mb-2 d-flex align-items-center">
            <i className="bi bi-check-circle-fill text-danger me-2 fs-4"></i>
            Unparalleled customer support
          </li>
        </ul>
      <Link to="/why-choose-us" className="btn btn-danger btn-lg mt-4">Read More</Link>
      </div>

      {/* Our Approach */}
      <div
        className="col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start"
        data-aos="fade-left"
      >
        <h2 className="fw-bold mb-3">Our Approach</h2>
        <p className="lead">
          Tailored solutions for every transportation need—whether corporate, personal, or event-based. We help you optimize your travel costs without compromising on quality.
        </p>
        <ul className="list-unstyled mt-3">
          <li className="mb-2 d-flex align-items-center">
            <i className="bi bi-lightning-charge-fill text-danger me-2 fs-4"></i>
            Fast & flexible booking
          </li>
          <li className="mb-2 d-flex align-items-center">
            <i className="bi bi-people-fill text-danger me-2 fs-4"></i>
            Personalized service packages
          </li>
          <li className="mb-2 d-flex align-items-center">
            <i className="bi bi-shield-check text-danger me-2 fs-4"></i>
            Dedicated account managers
          </li>
        </ul>
      <Link to="/contact" className="btn btn-danger btn-lg mt-4">Get a Quote</Link>
      </div>
    </div>
  </div>
</section>

      {/* Our Vision section */}
      <section
        className="our-vision-section position-relative text-white text-center py-5"
        style={{
          background: `linear-gradient(rgba(178, 143, 143, 0.6), rgba(0,0,0,0.6)), url(${move2}) center center/cover no-repeat`,
        }}
      >
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Our Vision</h2>
          <p className="lead mx-auto" style={{ maxWidth: '900px' }}>
Our mission is to deliver unmatched customer service, establishing ourselves as Qatar’s leading transportation provider.
          </p>
          <div className="row mt-5 g-4">
            <div className="col-6 col-md-3">
              <div className="text-center">
                <i className="bi bi-patch-check-fill display-4 mb-3 text-white"></i>
                <h6 className="fw-bold">Best Services</h6>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="text-center">
                <i className="bi bi-person-bounding-box display-4 mb-3 text-white"></i>
                <h6 className="fw-bold">Skilled Drivers</h6>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="text-center">
                <i className="bi bi-car-front-fill display-4 mb-3 text-white"></i>
                <h6 className="fw-bold">Quality Vehicles</h6>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="text-center">
                <i className="bi bi-stars display-4 mb-3 text-white"></i>
                <h6 className="fw-bold">Customer Satisfaction</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer section */}
      <section className="what-we-offer-section py-5 bg-light">
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">Our Services</h2>
            <p className="lead text-muted">
              Comprehensive transport & rental solutions designed for comfort, safety, and reliability.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className="offer-card bg-white p-4 h-100 shadow rounded text-center">
                <i className="bi bi-bus-front display-4 text-danger mb-3"></i>
                <h5 className="fw-bold mb-2">Staff & School Transport</h5>
                <p className="text-muted">
                  Safe, punctual daily transportation for employees and students across Qatar.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
              <div className="offer-card bg-white p-4 h-100 shadow rounded text-center">
                <i className="bi bi-person-badge display-4 text-danger mb-3"></i>
                <h5 className="fw-bold mb-2">Executive Chauffeur</h5>
                <p className="text-muted">
                  Premium vehicles with professional drivers for VIPs and corporate needs.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
              <div className="offer-card bg-white p-4 h-100 shadow rounded text-center">
                <i className="bi bi-calendar2-check display-4 text-danger mb-3"></i>
                <h5 className="fw-bold mb-2">Contract Rentals</h5>
                <p className="text-muted">
                  Flexible long-term vehicle solutions for businesses, government, and more.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
              <div className="offer-card bg-white p-4 h-100 shadow rounded text-center">
                <i className="bi bi-gem display-4 text-danger mb-3"></i>
                <h5 className="fw-bold mb-2">Special Events</h5>
                <p className="text-muted">
                  Customized transport plans for weddings, conferences, and group travel.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
      <Link to="/services" className="btn btn-danger btn-lg">Explore All Services</Link>
          </div>
        </div>
      </section>

{/* Contact Us Prompt Section - Vision Style */}
<section
  className="contact-prompt-section position-relative text-white text-center py-5"
  style={{
    background: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${move1}) center center/cover no-repeat`,
  }}
>
  <div className="container" data-aos="fade-up">
    <h2 className="fw-bold display-5 mb-4">Need Assistance?</h2>
    <p className="lead mx-auto mb-4" style={{ maxWidth: '800px' }}>
Have questions, need a quote, or looking for a tailored transportation solution?
Our dedicated team is here to assist you — with reliable, efficient service across Qatar.</p>
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
  <a href="tel:+97430800072" className="d-flex align-items-center bg-danger px-4 py-3 rounded shadow text-white text-decoration-none">
    <i className="bi bi-telephone-fill fs-3 me-3"></i>
    <span className="fs-5 fw-bold">(+974) 3080 0072</span>
  </a>

  <a href="tel:+97477723298" className="d-flex align-items-center bg-danger px-4 py-3 rounded shadow text-white text-decoration-none">
    <i className="bi bi-telephone-fill fs-3 me-3"></i>
    <span className="fs-5 fw-bold">(+974) 7772 3298</span>
  </a>
</div>

    <div className="mt-5">
    </div>
  </div>
</section>

{/* Our Vehicles section */}
<section className="our-vehicles-section py-5 bg-light">
  <div className="container" data-aos="fade-up">
    <div className="text-center mb-5">
      <h2 className="fw-bold display-5">Our Vehicles</h2>
      <p className="lead text-muted">
        Explore our diverse fleet designed for safety, efficiency, and luxury across Qatar.
      </p>
    </div>

    <div className="row g-4">
      <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
        <div className="vehicle-card bg-white p-4 h-100 shadow rounded text-center">
          <img src={move1} alt="Bus" className="vehicle-image mb-3"  />
          <h5 className="fw-bold mb-2">Bus</h5>
          <p className="text-muted">
            Spacious, air-conditioned buses suitable for staff, schools, and large group transport.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
        <div className="vehicle-card bg-white p-4 h-100 shadow rounded text-center">
          <img src={truck} alt="Truck" className="vehicle-image mb-3" />
          <h5 className="fw-bold mb-2">Truck</h5>
          <p className="text-muted">
            Heavy-duty trucks for logistics, supply chain, and construction needs across the region.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
        <div className="vehicle-card bg-white p-4 h-100 shadow rounded text-center">
            <img src={move4} alt="Tanker" className="vehicle-image mb-3" />
              <h5 className="fw-bold mb-2">Tanker</h5>
          <p className="text-muted">
            Safe and certified tankers for transporting fuel, water, and other industrial liquids.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
        <div className="vehicle-card bg-white p-4 h-100 shadow rounded text-center">
          <img src={move3} alt="Cars" className="vehicle-image mb-3" />
          <h5 className="fw-bold mb-2">Cars</h5>
          <p className="text-muted">
            Well-maintained executive and economy cars tailored for VIP transport and daily rentals.
          </p>
        </div>
      </div>
    </div>

    <div className="text-center mt-4">
            <Link to="/fleet" className="btn btn-danger btn-lg">View Full Fleet</Link>
    </div>
  </div>
</section>

{/* Our Achievements Section (Vision-style background) */}
<section
  className="our-achievements-section position-relative text-white text-center py-5"
   style={{
    background: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${move3}) center center/cover no-repeat`,
  }}
>
  <div className="container" data-aos="fade-up">
    <h2 className="fw-bold display-5 mb-4">Our Achievements</h2>
    <p className="lead mx-auto" style={{ maxWidth: '900px' }}>
      Discover the scale and excellence of our transportation solutions across Qatar.
    </p>
    <div className="row mt-5 g-4 justify-content-center">
      <div className="col-6 col-md-2">
        <div className="text-center">
          <i className="bi bi-clock-history display-4 mb-3 text-white"></i>
          <h3 className="fw-bold text-white">
            <CountUp end={10} duration={3} />
          </h3>
          <p className="text-white">Years</p>
        </div>
      </div>
      <div className="col-6 col-md-2">
        <div className="text-center">
          <i className="bi bi-card-checklist display-4 mb-3 text-white"></i>
          <h3 className="fw-bold text-white">
            <CountUp end={7} duration={3} />
          </h3>
          <p className="text-white">Services</p>
        </div>
      </div>
      <div className="col-6 col-md-2">
        <div className="text-center">
          <i className="bi bi-person-fill display-4 mb-3 text-white"></i>
          <h3 className="fw-bold text-white">
            <CountUp end={100} duration={3} separator="," suffix="+" />
          </h3>
          <p className="text-white">Staff</p>
        </div>
      </div>
      <div className="col-6 col-md-2">
        <div className="text-center">
          <i className="bi bi-truck-front display-4 mb-3 text-white"></i>
          <h3 className="fw-bold text-white">
            <CountUp end={100} duration={3} suffix="+" />
          </h3>
          <p className="text-white">Fleet</p>
        </div>
      </div>
      <div className="col-6 col-md-2">
        <div className="text-center">
          <i className="bi bi-people display-4 mb-3 text-white"></i>
          <h3 className="fw-bold text-white">
            <CountUp end={20} duration={3} separator="," suffix="+" />
          </h3>
          <p className="text-white">Clients</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Trusted Clients Section */}
<section className="trusted-clients py-5 bg-white">
  <div className="container" data-aos="fade-up">
    <div className="text-center mb-5">
      <h2 className="fw-bold display-5 text-black">Our Valued Clients</h2>
      <p className="lead text-muted">We Promised. They Trusted. We Delivered.</p>
    </div>

    <div className="clients-carousel-wrapper overflow-hidden">
      <div className="clients-carousel d-flex flex-nowrap align-items-center">
        {[
          { logo: move1, name: "Client One" },
          { logo: move2, name: "Client Two" },
          { logo: move3, name: "Client Three" },
          { logo: move4, name: "Client Four" },
          { logo: move1, name: "Client Five" },
          { logo: move2, name: "Client Six" },
        ].map((client, index) => (
       <div className="client-logo-wrapper text-center flex-shrink-0 px-3" key={index}>
  <img
    src={client.logo}
    alt={client.name}
    className="client-logo"
  />
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
