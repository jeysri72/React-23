import React from 'react';

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <div>
              <h3>{student.name}</h3>
              <p>Email: {student.email}</p>
              <p>DOB: {student.dob}</p>
              <p>Course: {student.course}</p>
              {student.profilePicture && <img src={student.profilePicture} alt="Profile" width="50" height="50" />}
            </div>
            <button onClick={() => onEdit(student)}>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
