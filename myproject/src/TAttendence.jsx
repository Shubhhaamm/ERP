import React, { useState } from 'react';
import { Search, Calendar } from 'lucide-react';

const TAttendence = () => {
  const [selectedClassroom, setSelectedClassroom] = useState('4th A Mathematics');
  const [searchTerm, setSearchTerm] = useState('');
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showPopup, setShowPopup] = useState(false);

  const classrooms = ['4th A Mathematics', '4th B Mathematics', '4th C Mathematics'];

  const studentData = {
    '4th A Mathematics': [
      { rollNo: "2023001", name: "Alice Johnson" },
      { rollNo: "2023002", name: "Bob Smith" }
    ],
    '4th B Mathematics': [
      { rollNo: "2024001", name: "Charlie Brown" },
      { rollNo: "2024002", name: "Diana Prince" },
      { rollNo: "2024003", name: "Ethan Hunt" },
      { rollNo: "2024004", name: "Felicity Jones" },
      { rollNo: "2024005", name: "George Lucas" },
      { rollNo: "2024006", name: "Hannah Montana" },
      { rollNo: "2024007", name: "Ian McKellen" },
      { rollNo: "2024008", name: "Jessica Alba" },
      { rollNo: "2024009", name: "Kevin Hart" },
      { rollNo: "2024010", name: "Liam Neeson" }
    ],
    '4th C Mathematics': [
      { rollNo: "2025001", name: "Edward Norton" },
      { rollNo: "2025002", name: "Fiona Gallagher" },
      { rollNo: "2025003", name: "Michael Fassbender" },
      { rollNo: "2025004", name: "Natalie Portman" },
      { rollNo: "2025005", name: "Oscar Isaac" },
      { rollNo: "2025006", name: "Penelope Cruz" },
      { rollNo: "2025007", name: "Quentin Tarantino" },
      { rollNo: "2025008", name: "Rachel McAdams" },
      { rollNo: "2025009", name: "Samuel L. Jackson" },
      { rollNo: "2025010", name: "Tessa Thompson" },
      { rollNo: "2025011", name: "Uma Thurman" },
      { rollNo: "2025012", name: "Vin Diesel" },
      { rollNo: "2025013", name: "Will Smith" }
    ]
  };

  const filteredStudents = studentData[selectedClassroom].filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.includes(searchTerm)
  );

  const toggleAttendance = (rollNo) => {
    setAttendance((prev) => ({
      ...prev,
      [rollNo]: !prev[rollNo]
    }));
  };

  const handleSubmit = () => {
    console.log("Attendance submitted:", attendance);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Attendance</h2>
        <select 
          className="border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-500" 
          value={selectedClassroom} 
          onChange={(e) => setSelectedClassroom(e.target.value)}
        >
          {classrooms.map((cls) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <label className="font-medium text-gray-700 flex items-center">
          <Calendar className="w-5 h-5 text-gray-500 mr-2" />
          Select Date:
        </label>
        <input 
          type="date" 
          className="border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-500" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search students..."
          className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 grid grid-cols-3 gap-4">
          <div className="font-medium text-gray-700">Roll Number</div>
          <div className="font-medium text-gray-700">Student Name</div>
          <div className="font-medium text-gray-700">Present</div>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {filteredStudents.map((student, index) => (
            <div key={student.rollNo} className={`px-4 py-3 grid grid-cols-3 gap-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
              <div className="text-gray-600">{student.rollNo}</div>
              <div className="font-medium text-gray-800">{student.name}</div>
              <input
                type="checkbox"
                checked={attendance[student.rollNo] || false}
                onChange={() => toggleAttendance(student.rollNo)}
              />
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={handleSubmit} 
        className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
      >
        Submit Attendance
      </button>

      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50">
          Attendance Submitted Successfully!
        </div>
      )}
    </div>
  );
};

export default TAttendence;
