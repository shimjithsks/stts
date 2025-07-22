import React, { useState } from 'react';
import './Gallery.css';
import bannerBg from '../assets/move_3.jpg';

import bus1 from '../assets/60_50_seat_bus.jpg';
import bus2 from '../assets/move_1.jpg';
import bus3 from '../assets/labour.jpg';
import bus4 from '../assets/school.jpg';
import truck1 from '../assets/truck.jpg';
import truck2 from '../assets/trailor.jpg';
import car1 from '../assets/hilux.jpg';
import car2 from '../assets/pick_drop.jpg';
import car3 from '../assets/staff.jpg';
import car4 from '../assets/toyota_coaster.jpg';
import car5 from '../assets/urvan.jpg';
import car6 from '../assets/luxury_cars.jpg';
import tanker1 from '../assets/move_4.jpg';
import tanker2 from '../assets/water.jpg';

const fleetTabs = {
  bus: {
    title: 'Buses',
    items: [
      { img: bus1, title: '50 Seater Bus' },
      { img: bus2, title: '60 Seater Bus' },
      { img: bus3, title: 'Labour Bus' },
      { img: bus4, title: 'School Bus' },
    ],
  },
  truck: {
    title: 'Trucks',
    items: [
      { img: truck1, title: 'Heavy-Duty Trucks' },
      { img: truck2, title: 'Flatbed Trucks for Industrial Use' },
  ],
  },
  tanker: {
    title: 'Tankers',
    items: [
      { img: tanker1, title: 'Fuel Tankers - Compliant and Safe' },
      { img: tanker2, title: 'Water Tankers for Construction' },
    ],
  },
  car: {
    title: 'Cars',
    items: [
      { img: car1, title: 'Toyota Hilux and 3 Ton Pick Ups' },
      { img: car2, title: 'Pickup and Drop Services' },
      { img: car3, title: 'Labour Transportation' },
      { img: car4, title: '22 and 30 Seater Toyota Coasters' },
      { img: car5, title: '12 Seater Urvan' },
      { img: car6, title: 'Saloon and Luxury Cars' },
    ],
  },
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('bus');
  const [selectedImage, setSelectedImage] = useState(null);

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
          <h1 className="display-5 fw-bold">Gallery</h1>
          <h2 className="lead">
            Explore Our Wide Range of Vehicles Across Categories
          </h2>
        </div>
      </header>

      {/* Tabs */}
      <section className="container py-5 speciality-section">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Fleet</h2>
          <p className="text-muted">
            Choose a category below to view the range of vehicles available under each type.
          </p>
        </div>

        <ul className="nav nav-tabs mb-4 justify-content-center" role="tablist">
          {Object.keys(fleetTabs).map((key) => (
            <li className="nav-item" key={key} role="presentation">
              <button
                className={`nav-link ${activeTab === key ? 'active text-white bg-danger' : ''}`}
                onClick={() => setActiveTab(key)}
                type="button"
              >
                {fleetTabs[key].title}
              </button>
            </li>
          ))}
        </ul>

        <div className="row g-4">
          {fleetTabs[activeTab].items.map((item, index) => (
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
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedImage(item)}
                />
                <div className="card-body">
                  <h5 className="card-title text-black fw-bold">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="preview-modal" onClick={() => setSelectedImage(null)}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close btn-close-white" onClick={() => setSelectedImage(null)} />
            <img src={selectedImage.img} alt={selectedImage.title} className="img-fluid" />
            <p className="text-white mt-2">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
