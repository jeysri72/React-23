import React from 'react';

const ServicesPortlet = () => {
  return (
    <section className="services">
      <div className="container text-center">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">
          We provide a variety of services tailored to meet your needs.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <h3>Web Development</h3>
              <p>We design and develop modern, responsive, and dynamic websites.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h3>Digital Marketing</h3>
              <p>Boost your business with our tailored marketing strategies.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h3>UI/UX Design</h3>
              <p>Create intuitive user experiences with stunning designs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPortlet;
