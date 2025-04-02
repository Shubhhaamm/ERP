import React, { useState } from 'react';
import { Users, BookOpen, Clock, Calendar, Search } from 'lucide-react';

const Teacher = () => {
  const [activeTab, setActiveTab] = useState('classroom');
  const [searchTerm, setSearchTerm] = useState('');

  const teacherData = {
    name: "Virat Kohli",
    subject: "Mathematics",
    department: "Science & Technology",
    email: "john.doe@school.edu",
    phone: "(555) 123-4567",
    joinDate: "August 15, 2020",
    education: "M.Sc. Applied Mathematics",
    profileImage: "https://c.ndtvimg.com/2024-05/mkr6o77g_virat-kohli-bcci_625x300_27_May_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
  };

  const classroomData = {
    name: "INDIAN Cricket Team",
    grade: "Grade 9",
    section: "A",
    room: "Room 203",
    students: 15
  };

  const studentData = [
    { rollNo: "2023001", name: "Alice Johnson" },
    { rollNo: "2023002", name: "Bob Smith" },
    { rollNo: "2023003", name: "Carol Williams" },
    { rollNo: "2023004", name: "David Brown" },
    { rollNo: "2023005", name: "Emma Davis" },
    { rollNo: "2023006", name: "Frank Miller" },
    { rollNo: "2023007", name: "Grace Wilson" },
    { rollNo: "2023008", name: "Henry Moore" },
    { rollNo: "2023009", name: "Isabella Taylor" },
    { rollNo: "2023010", name: "Jack Anderson" },
    { rollNo: "2023011", name: "Kate Thomas" },
    { rollNo: "2023012", name: "Leo Martinez" },
    { rollNo: "2023013", name: "Mia Garcia" },
    { rollNo: "2023014", name: "Noah Robinson" },
    { rollNo: "2023015", name: "Olivia White" }
  ];

  const filteredStudents = studentData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.includes(searchTerm)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Teacher Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <img 
            src={teacherData.profileImage} 
            alt="Teacher Profile" 
            className="rounded-full w-24 h-24 object-cover border-4 border-blue-100"
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{teacherData.name}</h2>
          <p className="text-gray-600">{teacherData.subject} | {teacherData.department}</p>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">@</span>
              <span>{teacherData.email}</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">☎</span>
              <span>{teacherData.phone}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-blue-500 mr-2" />
              <span>Joined: {teacherData.joinDate}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 text-blue-500 mr-2" />
              <span>{teacherData.education}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('classroom')}
            className={`pb-4 font-medium text-sm ${activeTab === 'classroom' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Classroom
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`pb-4 font-medium text-sm ${activeTab === 'schedule' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Schedule
          </button>
        </nav>
      </div>
      {activeTab === 'classroom' && (
        <div>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 sticky top-0 z-10 border border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{classroomData.name}</h3>
              <p className="text-gray-600">{classroomData.grade} {classroomData.section} | {classroomData.room}</p>
            </div>
            <div className="mt-3 md:mt-0 flex items-center">
              <Users className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-600 font-medium">Total Students: {classroomData.students}</span>
            </div>
            <div className="relative mt-3 md:mt-0">
              <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search students..."
                className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium text-gray-700">Roll Number</div>
                <div className="font-medium text-gray-700">Student Name</div>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredStudents.map((student, index) => (
                <div key={student.rollNo} className={`px-4 py-3 grid grid-cols-2 gap-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
                  <div className="text-gray-600">{student.rollNo}</div>
                  <div className="font-medium text-gray-800">{student.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacher;
