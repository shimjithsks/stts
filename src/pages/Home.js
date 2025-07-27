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
import { Helmet } from 'react-helmet';

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
    <Helmet>
        <title>Home - Secret Trading and Transport Services | STTS Qatar</title>
        <meta
          name="description"
          content="Luxury, reliable, and safe transportation across Qatar. STTS offers a wide range of transport services, from staff transport to special events."
        />
        <meta
          name="keywords"
          content="transport Qatar, STTS, staff transport, luxury transport Qatar, school transport Doha, rental fleet, chauffeur service"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.stts.qa/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="STTS Qatar - Premium Transport Services" />
        <meta
          property="og:description"
          content="Your Journey, Our Responsibility. Explore STTS's safe and luxurious transportation services in Qatar."
        />
        <meta property="og:url" content="https://www.stts.qa/" />
        <meta property="og:image" content="https://www.stts.qa/assets/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STTS - Transport Excellence in Qatar" />
        <meta
          name="twitter:description"
          content="Book reliable transport services in Qatar. Safe, comfortable and professional."
        />
        <meta name="twitter:image" content="https://www.stts.qa/assets/og-image.jpg" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Secret Trading and Transport Services",
            "image": "https://www.stts.qa/assets/og-image.jpg",
            "url": "https://www.stts.qa",
            "telephone": "+97430800072",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Doha",
              "addressCountry": "QA"
            },
            "description": "Reliable and safe transport services in Qatar including staff transport, fleet rentals, and more.",
            "priceRange": "$$",
            "openingHours": "Mo-Sa 08:00-20:00",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.instagram.com/secrettransportation/?igsh=MTllM2FocGM2aWtnZw%3D%3D#",
              "https://www.linkedin.com/company/yourpage"
            ]
          }
        `}</script>
      </Helmet>

     {/* Hero Section */}
<section
  className="hero hero-small d-flex align-items-center justify-content-center text-center text-white position-relative overflow-hidden"
  role="banner"
  aria-label="STTS Transport Hero Section"
  style={{
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[currentImage]}) center center/cover no-repeat`,
    transition: 'background-image 1s ease-in-out',
  }}
>
  <div className="container">
    <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="display-4 fw-bold mb-4 animate-text text-white">
        Your Journey, Our Responsibility
        <br />
        Luxury &amp; Reliable Transport Across Qatar
      </h1>
      <p className="lead fs-4 animate-text-delay text-white">
        Your trusted partner for transportation in Qatar
      </p>
      <Link
        to="/contact"
        className="btn btn-danger btn-lg mt-4 animate-btn"
        aria-label="Request transport services"
      >
        Request Our Services
      </Link>
    </div>
  </div>
</section>


    {/* Commitment & Approach */}
<section className="solution-section py-5 bg-white text-dark" aria-labelledby="commitment-heading">
  <div className="container">
    <div className="row text-center text-lg-start align-items-center">
      
      {/* Commitment Column */}
      <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
        <h2 id="commitment-heading" className="fw-bold mb-3">
          Our Commitment
        </h2>
        <p className="lead">
          We strive to redefine transportation excellence by combining luxury, safety, and comfort.
        </p>
        <ul className="list-unstyled mt-3">
          <li>
            <i className="bi bi-check-circle-fill text-danger me-2" aria-hidden="true"></i>
            <span>Experienced, professional drivers</span>
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-danger me-2" aria-hidden="true"></i>
            <span>Modern, well-maintained vehicles</span>
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-danger me-2" aria-hidden="true"></i>
            <span>Unparalleled customer support</span>
          </li>
        </ul>
        <Link to="/why-choose-us" className="btn btn-danger btn-lg mt-4" aria-label="Read more about why to choose STTS">
          Read More
        </Link>
      </div>

      {/* Approach Column */}
      <div className="col-lg-6" data-aos="fade-left">
        <h2 className="fw-bold mb-3">
          Our Approach
        </h2>
        <p className="lead">
          Tailored solutions for every transportation need—corporate, personal, or event-based.
        </p>
        <ul className="list-unstyled mt-3">
          <li>
            <i className="bi bi-lightning-charge-fill text-danger me-2" aria-hidden="true"></i>
            <span>Fast & flexible booking</span>
          </li>
          <li>
            <i className="bi bi-people-fill text-danger me-2" aria-hidden="true"></i>
            <span>Personalized service packages</span>
          </li>
          <li>
            <i className="bi bi-shield-check text-danger me-2" aria-hidden="true"></i>
            <span>Dedicated account managers</span>
          </li>
        </ul>
        <Link to="/contact" className="btn btn-danger btn-lg mt-4" aria-label="Get a transport quote from STTS">
          Get a Quote
        </Link>
      </div>
    </div>
  </div>
</section>


     {/* Vision */}
<section
  className="our-vision-section text-white text-center py-5"
  aria-labelledby="vision-heading"
  style={{
    background: `linear-gradient(rgba(178,143,143,0.6), rgba(0,0,0,0.6)), url(${move2}) center/cover no-repeat`,
  }}
>
  <div className="container" data-aos="fade-up">
    <h2 id="vision-heading" className="fw-bold display-5 mb-4">
      Our Vision
    </h2>
    <p className="lead mx-auto" style={{ maxWidth: '900px' }}>
      Our mission is to deliver unmatched customer service, establishing ourselves as Qatar’s leading transportation provider.
    </p>
    <div className="row mt-5 g-4" role="list">
      {[
        { icon: "bi-patch-check-fill", label: "Best Services" },
        { icon: "bi-person-bounding-box", label: "Skilled Drivers" },
        { icon: "bi-car-front-fill", label: "Quality Vehicles" },
        { icon: "bi-stars", label: "Customer Satisfaction" },
      ].map((item, i) => (
        <div className="col-6 col-md-3" role="listitem" key={i}>
          <div className="text-center">
            <i className={`bi ${item.icon} display-4 mb-3 text-white`} aria-hidden="true"></i>
            <h3 className="h6 fw-bold text-white">{item.label}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Services */}
<section
  className="what-we-offer-section py-5 bg-light"
  aria-labelledby="services-heading"
>
  <div className="container" data-aos="fade-up">
    <div className="text-center mb-5">
      <h2 id="services-heading" className="fw-bold display-5">
        Our Services
      </h2>
      <p className="lead text-muted">
        Comprehensive transport & rental solutions designed for comfort, safety, and reliability.
      </p>
    </div>

    <div className="row g-4" role="list">
      {[
        { icon: "bi-bus-front", title: "Staff & School Transport", desc: "Safe and punctual daily transport for employees and students." },
        { icon: "bi-person-badge", title: "Executive Chauffeur", desc: "Professional, private chauffeur service for business or VIPs." },
        { icon: "bi-calendar2-check", title: "Contract Rentals", desc: "Flexible rental contracts tailored to long-term requirements." },
        { icon: "bi-gem", title: "Special Events", desc: "Reliable transportation for weddings, events, and special occasions." }
      ].map(({ icon, title, desc }, i) => (
        <div
          className="col-md-6 col-lg-3"
          role="listitem"
          key={i}
          data-aos="zoom-in"
          data-aos-delay={100 * (i + 1)}
        >
          <div className="offer-card bg-white p-4 h-100 shadow rounded text-center">
            <i className={`bi ${icon} display-4 text-danger mb-3`} aria-hidden="true"></i>
            <h3 className="h5 fw-bold mb-2">{title}</h3>
            <p className="text-muted">{desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-4">
      <Link to="/services" className="btn btn-danger btn-lg" aria-label="View all our transport services">
        Explore All Services
      </Link>
    </div>
  </div>
</section>


{/* Contact Prompt */}
<section
  className="contact-prompt-section text-white text-center py-5"
  style={{
    background: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${move1}) center/cover no-repeat`
  }}
  aria-labelledby="contact-prompt-heading"
>
  <div className="container" data-aos="fade-up">
    <h2 id="contact-prompt-heading" className="fw-bold display-5 mb-4">
      Need Assistance?
    </h2>
    <p className="lead mx-auto mb-4" style={{ maxWidth: '800px' }}>
      Have questions, need a quote, or looking for a tailored transportation solution?
    </p>
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
      <a
        href="tel:+97430800072"
        className="btn btn-danger px-4 py-3 text-white fw-bold shadow"
        aria-label="Call STTS Qatar at 974 3080 0072"
      >
        (+974) 3080 0072
      </a>
      <a
        href="tel:+97477723298"
        className="btn btn-danger px-4 py-3 text-white fw-bold shadow"
        aria-label="Call STTS Qatar at 974 7772 3298"
      >
        (+974) 7772 3298
      </a>
    </div>
  </div>
</section>


 {/* Vehicles */}
<section
  className="our-vehicles-section py-5 bg-light"
  aria-labelledby="our-vehicles-heading"
>
  <div className="container" data-aos="fade-up">
    <div className="text-center mb-5">
      <h2 id="our-vehicles-heading" className="fw-bold display-5">
        Our Vehicles
      </h2>
      <p className="lead text-muted">
        Explore our diverse fleet designed for safety, efficiency, and luxury across Qatar.
      </p>
    </div>

    <div className="row g-4">
      {[
        {
          src: move1,
          title: 'Bus',
          desc: 'Spacious and air-conditioned buses ideal for staff and school transport.',
        },
        {
          src: truck,
          title: 'Truck',
          desc: 'Reliable trucks for logistics and industrial needs across Qatar.',
        },
        {
          src: move4,
          title: 'Tanker',
          desc: 'Well-maintained tankers for safe and compliant fuel/water transport.',
        },
        {
          src: move3,
          title: 'Cars',
          desc: 'Executive cars for corporate, personal, and luxury rides.',
        },
      ].map(({ src, title, desc }, i) => (
        <div
          className="col-md-6 col-lg-3"
          key={i}
          data-aos="zoom-in"
          data-aos-delay={100 * (i + 1)}
        >
          <div className="vehicle-card bg-white p-4 h-100 shadow rounded text-center">
            <img
              src={src}
              alt={`STTS ${title} - ${desc}`}
              className="vehicle-image mb-3"
              loading="lazy"
            />
            <h5 className="fw-bold mb-2">{title}</h5>
            <p className="text-muted">{desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-4">
      <Link
        to="/fleet"
        className="btn btn-danger btn-lg"
        aria-label="View full fleet of STTS Qatar"
      >
        View Full Fleet
      </Link>
    </div>
  </div>
</section>


    {/* Achievements */}
<section
  className="our-achievements-section text-white text-center py-5"
  aria-labelledby="our-achievements-heading"
  style={{
    background: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${move3}) center/cover no-repeat`
  }}
>
  <div className="container" data-aos="fade-up">
    <h2 id="our-achievements-heading" className="fw-bold display-5 mb-4">
      Our Achievements
    </h2>

    <div className="row mt-5 g-4 justify-content-center">
      {[
        { icon: "bi-clock-history", value: 10, label: "Years in Operation", suffix: "+" },
        { icon: "bi-card-checklist", value: 7, label: "Types of Services", suffix: "" },
        { icon: "bi-person-fill", value: 100, label: "Skilled Staff", suffix: "+" },
        { icon: "bi-truck-front", value: 100, label: "Fleet Vehicles", suffix: "+" },
        { icon: "bi-people", value: 20, label: "Satisfied Clients", suffix: "+" }
      ].map(({ icon, value, label, suffix }, i) => (
        <div className="col-6 col-md-2" key={i}>
          <i className={`bi ${icon} display-4 mb-3 text-white`} aria-hidden="true"></i>
          <h3 className="fw-bold">
            <CountUp end={value} duration={2.5} suffix={suffix} />
          </h3>
          <p className="mb-0">{label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Clients */}
<section
  className="trusted-clients py-5 bg-white"
  aria-labelledby="clients-heading"
>
  <div className="container" data-aos="fade-up">
    <div className="text-center mb-5">
      <h2 id="clients-heading" className="fw-bold display-5 text-black">
        Our Valued Clients
      </h2>
      <p className="lead text-muted">
        We Promised. They Trusted. We Delivered.
      </p>
    </div>

    <div className="clients-carousel-wrapper overflow-hidden">
      <div
        className="clients-carousel d-flex flex-wrap align-items-center justify-content-center"
        role="list"
        aria-label="Trusted clients logos"
      >
        {[
          { logo: Act, name: "ACT" },
          { logo: Emkan, name: "Emkan" },
          { logo: Infra, name: "Infraroad" },
          { logo: Talabat, name: "Talabat" },
          { logo: Kentzo, name: "Kentz" }
        ].map((client, i) => (
          <div
            className="client-logo-wrapper text-center px-4 mb-4"
            key={i}
            role="listitem"
          >
            <img
              src={client.logo}
              alt={`${client.name} client logo`}
              className="client-logo mb-2"
              width="120"
              height="auto"
            />
            <div className="client-name text-muted fw-semibold">
              {client.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


    </>
  );
}
