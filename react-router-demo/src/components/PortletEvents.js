import React from 'react';

const Events = () => {
  return (
    <section className="events">
      <div className="container text-center">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-description">
          Join us at our latest events and connect with like-minded professionals.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="event-box">
              <h3>React Workshop</h3>
              <p>Learn React from scratch. <br /> Date: Dec 5, 2024</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="event-box">
              <h3>Tech Conference 2024</h3>
              <p>Explore the latest in tech. <br /> Date: Jan 15, 2025</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="event-box">
              <h3>Startup Pitch Day</h3>
              <p>Present your ideas to investors. <br /> Date: Feb 20, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
