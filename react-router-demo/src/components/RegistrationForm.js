import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    hobbies: '',
    availability: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:8000/api/v1/contacts', formData);
      setResponseMessage('Registration successful!');
      console.log(response.data);
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="row">
          {/* Firstname */}
          <div className="col-md-6 mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          {/* Lastname */}
          <div className="col-md-6 mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Hobbies */}
        <div className="mb-3">
          <label htmlFor="hobbies" className="form-label">Hobbies</label>
          <input
            type="text"
            className="form-control"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="e.g., Reading, Coding, Sports"
          />
        </div>
        {/* Availability */}
        <div className="mb-3">
          <label htmlFor="availability" className="form-label">Availability</label>
          <select
            className="form-select"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Availability</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {responseMessage && <div className="mt-4 alert alert-info">{responseMessage}</div>}
    </div>
  );
};

export default RegistrationForm;
