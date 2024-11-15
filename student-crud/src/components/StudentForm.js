import React, { useState, useEffect } from 'react';

function StudentForm({ onSave, editingStudent }) {
  // Initialize state for each field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  // Populate form with editing student data if in edit mode
  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setPassword(editingStudent.password);
      setDob(editingStudent.dob);
      setCourse(editingStudent.course);
      setProfilePicture(editingStudent.profilePicture);
    } else {
      // Reset form when not editing
      setName('');
      setEmail('');
      setPassword('');
      setDob('');
      setCourse('');
      setProfilePicture(null);
    }
  }, [editingStudent]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: editingStudent?.id,
      name,
      email,
      password,
      dob,
      course,
      profilePicture,
    });
  };

  // Handle profile picture change
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file)); // Set a preview URL
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingStudent ? 'Edit Student' : 'Add Student'}</h2>
      
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label>Date of Birth:</label>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

      <label>Course:</label>
      <select value={course} onChange={(e) => setCourse(e.target.value)} required>
        <option value="">Select Course</option>
        <option value="Science">Science</option>
        <option value="Arts">Arts</option>
        <option value="Commerce">Commerce</option>
      </select>

      <label>Profile Picture:</label>
      <input type="file" onChange={handlePictureChange} />
      {profilePicture && <img src={profilePicture} alt="Profile Preview" width="100" height="100" />}

      <button type="submit">{editingStudent ? 'Update' : 'Add'} Student</button>
    </form>
  );
}

export default StudentForm;
