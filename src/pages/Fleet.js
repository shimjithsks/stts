import React from 'react';
import bannerBg from '../assets/move_3.jpg';
import URVAN from '../assets/urvan.jpg';
import ToyotaCoaster from '../assets/toyota_coaster.jpg';
import Bus from '../assets/60_50_seat_bus.jpg';
import Hilux from '../assets/hilux.jpg';
import Trailor from '../assets/trailor.jpg';
import luxury from '../assets/luxury_cars.jpg';
import WaterTank from '../assets/water.jpg';
import DieselTank from '../assets/move_4.jpg';
import { Link } from 'react-router-dom';
import './Fleet.css';

export default function Fleet() {
  const fleetItems = [
  { img: URVAN, title: '12 Seater Urvan' },
  { img: ToyotaCoaster, title: '22 and 30 Seater Toyota Coasters' },
  { img: Bus, title: '26, 30, 50 & 65 Seater Buses' },
  { img: Hilux, title: 'Toyota Hilux and 3 Ton Pick Ups' },
  { img: luxury, title: 'Saloon and Luxury Cars' },
  { img: DieselTank, title: 'Fuel Tankers (Petrol & Diesel)' },
  { img: WaterTank, title: 'Water Tankers' },
  { img: Trailor, title: 'Chemical and Sewage Tankers' },
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
