import React from 'react';
import bannerBg from '../assets/move_1.jpg';
import carImage from '../assets/move_2.jpg';
import visionBg from '../assets/move_3.jpg';

export default function WhyChooseUs() {
  return (
    <>
      {/* Banner Header */}
      <header
        className="contact-banner d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0,0,0,0.6)), url(${bannerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <div>
          <h1 className="display-5 fw-bold">Why Choose Us</h1>
          <h2 className="lead">Your journey, Our priority</h2>
        </div>
      </header>

      {/* Speciality Section */}
      <section className="speciality-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
              <h2 className="fw-bold mb-3">Our Speciality</h2>
              <p className="text-muted fs-5">
                We offer comprehensive assistance for all your transportation-related inquiries. Our commitment is to deliver high-quality services through thoroughly maintained, clean, and regularly inspected vehicles, ensuring a smooth and worry-free experience for our clients.
              </p>
              <img
                src={carImage}
                alt="Luxury Car"
                className="img-fluid mt-4"
              />
            </div>

            {/* Right Icon List */}
            <div className="col-lg-6">
              <ul className="list-unstyled">
                {[
                  { icon: 'bi-cash-coin', text: 'Competitive Pricing Without Sacrificing Quality' },
                  { icon: 'bi-calendar-check-fill', text: 'Seamless Rental Choices for Both Short-Term and Long-Term Needs' },
                  { icon: 'bi-person-badge-fill', text: 'Trained, Professional, and Courteous Drivers' },
                  { icon: 'bi-check2-circle', text: 'Well-Maintained, Spotless, and Thoroughly Checked Vehicles' },
                  { icon: 'bi-clock-history', text: '24/7 Emergency Roadside Support' },
                ].map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-4">
                    <div
                      className="d-flex justify-content-center align-items-center rounded-circle me-3 text-white"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#dc3545',
                        fontSize: '1.5rem',
                      }}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <span className="fs-5 fw-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

 {/* Our Commitment & Our Approach Section */}
<section className="py-5 bg-white text-dark">
  <div className="container">
    <div className="row gy-5 align-items-start">
      
      {/* Our Commitment */}
      <div className="col-md-6">
        <h3 className="fw-bold mb-3">Our Commitment</h3>
        <p className="mb-4 fs-5 text-muted">
          We strive to redefine transportation excellence by combining luxury, safety, and comfort. Our fully-licensed and insured fleet ensures peace of mind for every journey.
        </p>
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-3">
            <span className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '32px', height: '32px' }}>
              <i className="bi bi-check-lg"></i>
            </span>
            <span className="fs-6 fw-medium">Experienced, professional drivers</span>
          </li>
          <li className="d-flex align-items-center mb-3">
            <span className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '32px', height: '32px' }}>
              <i className="bi bi-check-lg"></i>
            </span>
            <span className="fs-6 fw-medium">Modern, well-maintained vehicles</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '32px', height: '32px' }}>
              <i className="bi bi-check-lg"></i>
            </span>
            <span className="fs-6 fw-medium">Unparalleled customer support</span>
          </li>
        </ul>
      </div>

      {/* Our Approach */}
      <div className="col-md-6">
        <h3 className="fw-bold mb-3">Our Approach</h3>
        <p className="mb-4 fs-5 text-muted">
          Tailored solutions for every transportation need—whether corporate, personal, or event-based. We help you optimize your travel costs without compromising on quality.
        </p>
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-3">
            <span className="text-danger d-flex justify-content-center align-items-center me-3 fs-5">
              <i className="bi bi-lightning-fill"></i>
            </span>
            <span className="fs-6 fw-medium">Fast &amp; flexible booking</span>
          </li>
          <li className="d-flex align-items-center mb-3">
            <span className="text-danger d-flex justify-content-center align-items-center me-3 fs-5">
              <i className="bi bi-people-fill"></i>
            </span>
            <span className="fs-6 fw-medium">Personalized service packages</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="text-danger d-flex justify-content-center align-items-center me-3 fs-5">
              <i className="bi bi-shield-check"></i>
            </span>
            <span className="fs-6 fw-medium">Dedicated account managers</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


  <section className="py-5 bg-white text-dark">
  <div className="container text-center">
    <h2 className="mb-5 fw-bold text-black">WHAT WE STAND FOR</h2>
    <div className="row g-4">
      {[
        {
          title: 'PUNCTUALITY',
          desc: 'We value your time. Every ride is scheduled with precision and delivered on time — always.',
          icon: 'bi-clock-fill',
        },
        {
          title: 'QUALITY SERVICE',
          desc: 'Every trip is backed by clean vehicles, courteous drivers, and a seamless experience from start to finish.',
          icon: 'bi-award-fill',
        },
        {
          title: 'SAFETY FIRST',
          desc: 'Our team ensures each journey meets strict safety protocols for a secure and worry-free ride.',
          icon: 'bi-shield-lock-fill',
        },
        {
          title: 'FLEXIBILITY',
          desc: 'Whether it’s a one-time trip or recurring transport, our services adapt to your needs.',
          icon: 'bi-arrow-repeat',
        },
        {
          title: 'CUSTOMER FOCUS',
          desc: 'From inquiries to drop-off, we put you first — with responsive support and dedicated service.',
          icon: 'bi-person-check-fill',
        },
        {
          title: 'RELIABILITY',
          desc: 'Count on us anytime. Our professional team and vehicles are ready 24/7, rain or shine.',
          icon: 'bi-check-circle-fill',
        },
      ].map((item, index) => (
        <div className="col-sm-6 col-lg-4" key={index}>
          <div className="p-4 bg-light border h-100 rounded shadow-sm">
            <div className="mb-3 text-danger" style={{ fontSize: '2rem' }}>
              <i className={`bi ${item.icon}`}></i>
            </div>
            <h5 className="fw-bold text-black mb-2">{item.title}</h5>
            <p className="mb-3 text-muted">{item.desc}</p>
            {/* <h4 className="fw-bold text-black">0{index + 1}</h4> */}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        </>
  );
}
