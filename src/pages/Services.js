import React from 'react';
import './Services.css';
import bannerBg from '../assets/move_3.jpg';
import schoolBus from '../assets/school.png';
import labourBus from '../assets/labour.png';
import pickupDrop from '../assets/pick_drop.png';
import hotelService from '../assets/star_hotel.png';
import staffTransport from '../assets/staff.png';
import carRental from '../assets/move_3.jpg';
import { Link } from 'react-router-dom'; 

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
          <h1 className="display-5 fw-bold">Our Services</h1>
          <h2 className="lead">
            Focused on Providing Reliable and High-Quality Transport Solutions Tailored to Meet Every Customer’s Needs
          </h2>
        </div>
      </header>

      {/* Services Section */}
      <section className="container py-5 speciality-section">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Services We Provide</h2>
          <p className="text-muted">
            We offer a broad selection of commercial and private vehicles, including mini and large buses, pickups,
            economy cars, SUVs, and four-wheel drives—available for both short and long-term rentals.
          </p>
        </div>

        <div className="row g-4">
          {[
              { img: staffTransport, title: 'STAFF TRANSPORTATION' },
            { img: labourBus, title: 'LABOUR TRANSPORTATION' },
            { img: pickupDrop, title: 'PICKUP AND DROP SERVICES' },
            { img: hotelService, title: 'STAR HOTEL SERVICES' },
            { img: carRental, title: 'CAR RENTALS' },
            { img: schoolBus, title: 'SCHOOL TRANSPORTATION' },

          ].map((item, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="card h-100 border-0 shadow-sm red-border-card text-center">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  style={{
                    height: 200,
                    objectFit: 'cover',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title text-black fw-bold">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


{/* Contact Us Prompt Section - Vision Style */}
<section
  className="contact-prompt-section position-relative text-white text-center py-5"
  style={{
    background: `linear-gradient(rgba(168, 110, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${schoolBus}) center center/cover no-repeat`,
  }}
>
  <div className="container" data-aos="fade-up">
      <h2 className="fw-bold display-5 mb-4">Customised Transport Solutions</h2>
    <p className="lead mx-auto mb-4" style={{ maxWidth: '800px' }}>
STTS offers tailored shuttle solutions designed exclusively for your employees. No matter what your transportation needs are, STTS provides reliable fixed-route services to ensure your team reaches their destinations on time, every time. Flexible pricing options are available on a daily, weekly, monthly, or annual contract basis.</p>
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">

      <Link to="/contact" className="btn btn-danger btn-lg mt-4">Get a Quote</Link>

</div>

    <div className="mt-5">
    </div>
  </div>
</section>

     {/* Why Choose Us Section */}
<section className="py-5 bg-light text-dark">
  <div className="container">
    {/* <h2 className="text-center fw-bold mb-5">WHY CHOOSE US</h2> */}
    <div className="row g-4 text-center">
      {/* Safe & Reliable */}
      <div className="col-md-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
          <div className="mb-3">
            <div
              className="rounded-circle d-inline-flex justify-content-center align-items-center"
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#dc3545',
              }}
            >
              <i className="bi bi-shield-check text-white fs-2"></i>
            </div>
          </div>
          <h5 className="fw-bold text-dark">SAFE & RELIABLE</h5>
          <p className="text-muted">
            We pride ourselves on providing a safe and punctual transportation service to our clients;
            where we can adapt our services to fit our clients' needs.
          </p>
        </div>
      </div>

      {/* Great Value */}
      <div className="col-md-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
          <div className="mb-3">
            <div
              className="rounded-circle d-inline-flex justify-content-center align-items-center"
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#dc3545',
              }}
            >
              <i className="bi bi-currency-dollar text-white fs-2"></i>
            </div>
          </div>
          <h5 className="fw-bold text-dark">GREAT VALUE</h5>
          <p className="text-muted">
            The service is inclusive of fuel, driver and vehicle with comprehensive insurance even
            for our passengers to ensure peace of mind.
          </p>
        </div>
      </div>
      

      {/* Quality Assurance */}
      <div className="col-md-4">
        <div className="p-4 bg-white rounded shadow-sm h-100">
          <div className="mb-3">
            <div
              className="rounded-circle d-inline-flex justify-content-center align-items-center"
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#dc3545',
              }}
            >
              <i className="bi bi-clipboard-check text-white fs-2"></i>
            </div>
          </div>
          <h5 className="fw-bold text-dark">QUALITY ASSURANCE</h5>
          <p className="text-muted">
            Our buses are equipped with GPS tracking to provide continuous monitoring of our buses and drivers — 
            reassuring our clients that our service is tracked for location, time and performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
