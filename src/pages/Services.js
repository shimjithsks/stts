import React from 'react';

export default function Services() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4" data-aos="fade-up">What We Offer</h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="zoom-in">
            <img src="https://picsum.photos/600/400?random=3" alt="Vehicle Rentals" className="img-fluid rounded mb-3"/>
            <h5>Vehicle Rentals</h5>
            <p>Short and long-term rentals of cars, SUVs, pickups, and buses.</p>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <img src="https://picsum.photos/600/400?random=4" alt="School Transport" className="img-fluid rounded mb-3"/>
            <h5>School & Staff Transport</h5>
            <p>Reliable solutions for student and corporate transportation.</p>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
            <img src="https://picsum.photos/600/400?random=5" alt="Airport Transfers" className="img-fluid rounded mb-3"/>
            <h5>Airport Transfers</h5>
            <p>Seamless pick-up and drop-off services.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
