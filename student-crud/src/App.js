import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  // Initialize state to store the list of students
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null); // For handling edits

  // Function to add or update student
  const handleSaveStudent = (student) => {
    if (editingStudent) {
      // Update an existing student if editing
      setStudents(students.map((s) => (s.id === student.id ? student : s)));
    } else {
      // Add a new student
      setStudents([...students, { ...student, id: Date.now() }]);
    }
    setEditingStudent(null); // Reset editing state after save
  };

  // Function to edit a student
  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  // Function to delete a student
  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter((s) => s.id !== studentId));
  };

  return (
    <div className="App">
      <h1>Student Management</h1>
      {/* Student form for adding/editing students */}
      <StudentForm onSave={handleSaveStudent} editingStudent={editingStudent} />
      {/* Displaying the list of students */}
      <StudentList students={students} onEdit={handleEditStudent} onDelete={handleDeleteStudent} />
    </div>
  );
}

export default App;
