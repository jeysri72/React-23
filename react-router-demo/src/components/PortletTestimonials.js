import React from 'react';

const PortletTestimonials = () => {
  return (
    <section className="testimonials">
      <div className="container text-center">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-description">
          See why people love working with us.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>
                "The team provided excellent service and helped grow our business online!"
              </p>
              <h4>- John Doe</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>
                "Their designs were creative, modern, and exactly what we needed."
              </p>
              <h4>- Jane Smith</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>
                "Highly professional and responsive. I recommend them to everyone."
              </p>
              <h4>- Michael Brown</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortletTestimonials;
