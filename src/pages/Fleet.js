import React from 'react';
import bannerBg from '../assets/move_3.jpg';
import schoolBus from '../assets/move_1.jpg';
import labourBus from '../assets/move_2.jpg';
import pickupDrop from '../assets/move_3.jpg';
import hotelService from '../assets/move_4.jpg';
import staffTransport from '../assets/move_2.jpg';
import carRental from '../assets/move_3.jpg';
import { Link } from 'react-router-dom';
import './Fleet.css';

export default function Fleet() {
  const fleetItems = [
    { img: schoolBus, title: '66 SEATER LEYLAND / EICHER BUSES' },
    { img: labourBus, title: '22 AND 30 SEATER TOYOTA COASTERS' },
    { img: pickupDrop, title: '12 SEATER TOYOTA HIACE / NISSAN URVAN' },
    { img: hotelService, title: 'TOYOTA HILUX AND 3 TON PICK UPS' },
    { img: staffTransport, title: 'SALOON AND LUXURY CARS' },
    { img: carRental, title: 'AWDS AND SUVS' },
    { img: pickupDrop, title: '12 SEATER TOYOTA HIACE / NISSAN URVAN' },
    { img: hotelService, title: 'TOYOTA HILUX AND 3 TON PICK UPS' },
    { img: staffTransport, title: 'SALOON AND LUXURY CARS' },
    { img: carRental, title: 'AWDS AND SUVS' },
    { img: staffTransport, title: 'SALOON AND LUXURY CARS' },
    { img: carRental, title: 'AWDS AND SUVS' },
  ];

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
          <h1 className="display-5 fw-bold">Our Fleet</h1>
          <h2 className="lead">
            At STTS, we take pride in maintaining a diverse and modern fleet tailored to meet every transportation need.
          </h2>
        </div>
      </header>

      {/* Services Section */}
      <section className="container py-5 speciality-section">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Fleet Services We Offer</h2>
          <p className="text-muted">
            At Secret Trading Transport Service (STTS), we maintain a modern, well-equipped, and versatile fleet. Whether for people or goods,
            our vehicles are maintained to the highest safety and quality standards to ensure reliable and efficient service.
          </p>
        </div>

        <div className="row g-4">
          {fleetItems.map((item, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="card h-100 border-0 shadow-sm red-border-card text-center">
                <div className="image-wrapper">
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
                  <div className="image-overlay">
                    <Link
                      to="/contact"
                      className="btn btn-danger get-quote-btn"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-black fw-bold">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
