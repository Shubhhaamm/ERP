import React, { useState } from 'react';

const TeacherDashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Emma Johnson', standard:"12th", grade: 'A', attendance: 95, behavior: 'Excellent' },
    { id: 2, name: 'Liam Smith',  standard:"12th", grade: 'B+', attendance: 88, behavior: 'Good' },
    { id: 3, name: 'Olivia Williams', standard:"12th", grade: 'A-', attendance: 92, behavior: 'Very Good' }
  ]);

  // State for new student form
  const [newStudent, setNewStudent] = useState({
    name: '',
    standard :'',
    grade: '',
    attendance: '',
    behavior: ''
  });

  // Function to handle input changes in new student form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prev => ({
      ...prev,
      [name]: value
    }));
  };    

  // Function to add a new student
  const addStudent = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!newStudent.name || !newStudent.standard || !newStudent.grade  ) {
      alert('Please enter at least name and grade');
      return;
    }

    // Create new student object with a unique ID
    const studentToAdd = {
      ...newStudent,
      id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
      attendance: newStudent.attendance || 0,
      behavior: newStudent.behavior || 'Not Rated'
    };

    // Add student to the list
    setStudents([...students, studentToAdd]);

    // Reset the form
    setNewStudent({
      name: '',
      standard: '',
      grade: '',
      attendance: '',
      behavior: ''
    });
  };

  // Function to remove a student
  const removeStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const renderStudentList = () => (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold flex items-center">
          👥 Student List
        </h2>
        
        {/* Add Student Form */}
        <form onSubmit={addStudent} className="flex space-x-2">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={handleInputChange}
            className="border p-1 rounded"
          />
          <input
            type="text"
            name="standard"
            placeholder="standard"
            value={newStudent.standard}
            onChange={handleInputChange}
            className="border p-1 rounded w-20"
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={newStudent.grade}
            onChange={handleInputChange}
            className="border p-1 rounded w-20"
          />
          <button 
            type="submit" 
            className="bg-green-500 text-white p-1 rounded"
          >
            + Add Student
          </button>
        </form>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-4 text-left">standard</th>

            <th className="p-2 text-center">Grade</th>
            <th className="p-2 text-center">Attendance</th>
            <th className="p-2 text-center">Behavior</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.standard}</td>
              <td className="p-2 text-center">{student.grade}</td>
              <td className="p-2 text-center">{student.attendance}%</td>
              <td className="p-2 text-center">{student.behavior}</td>
              <td className="p-2 text-center">
                <button 
                  onClick={() => removeStudent(student.id)}
                  className="bg-red-500 text-white p-1 rounded text-xs"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Teacher Dashboard</h1>
        
        {/* Assuming previous navigation remains the same */}
        <div className="mt-6">
          {renderStudentList()}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
