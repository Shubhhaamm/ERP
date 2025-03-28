import React from "react";

const StudentProfile = () => {
  const student = {
    name: "John Doe",
    id: "2025CS101",
    course: "B.Tech Computer Science",
    year: "Third Year",
    dob: "15 Aug 2003",
    contact: "9876543210",
    address: "123, College Road, City",
    photo: "https://via.placeholder.com/100", // Replace with actual student photo URL
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-college-bg.jpg')" }}>
      <div className="bg-white shadow-lg rounded-lg p-6 w-64 border-4 border-blue-600 text-center flex flex-col items-center">
        <img src={student.photo} alt="Student" className="w-24 h-24 rounded-full border-4 border-blue-500" />
        <h2 className="text-xl font-bold mt-4">{student.name}</h2>
        <p className="text-gray-700">ID: {student.id}</p>
        <p className="text-gray-700">{student.course}</p>
        <p className="text-gray-700">Year: {student.year}</p>
        <p className="text-gray-700">DOB: {student.dob}</p>
        <p className="text-gray-700">Contact: {student.contact}</p>
        <p className="text-gray-700">Address: {student.address}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
