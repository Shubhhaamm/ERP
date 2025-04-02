import React, { useState, useEffect } from 'react'; 
import {
  Menu, X, Users, Home, Book, FileText, LogOut
} from 'lucide-react';

// Import the Teacher component
import Teacher from './Teacher';  
import TAttendence from './TAttendence';

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isMobile;
};

const TeacherDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useResponsive();
  const [activeSection, setActiveSection] = useState('Teacher - Make the World Better Place');
  
  const sidebarMenuItems = [
    { icon: Home, label: 'Teacher', section: 'Teacher - Make the World Better Place' },
    { icon: Book, label: 'Attendance', section: 'Attendance' },
    { icon: Book, label: 'Classroom', section: 'Classroom' },
    { icon: Book, label: 'Student Info', section: 'Student Info' },
    { icon: FileText, label: 'Examination', section: 'Examination' }
  ];
  
  const handleLogout = () => {
    alert('Logging out...');
  };

  // Function to render the appropriate component based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 'Teacher - Make the World Better Place':
        return <Teacher />;
      case 'Attendance':
        return <TAttendence/>;
      case 'Classroom':
        return <div className="p-6">Classroom content goes here</div>;
      case 'Student Info':
        return <div className="p-6">Student Info content goes here</div>;
      case 'Examination':
        return <div className="p-6">Examination content goes here</div>;
      default:
        return <div className="p-6">Select a section from the sidebar</div>;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {isMenuOpen && (
        <div className="sidebar fixed inset-y-0 left-0 w-64 bg-blue-900 text-white z-50 shadow-lg transition-transform duration-300 ease-in-out">
          <div className="p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold flex items-center">
                <Users className="mr-2" /> Teacher Dashboard
              </h2>
              <button onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">
                <X size={24} />
              </button>
            </div>
            <nav>
              {sidebarMenuItems.map((item, index) => (
                <div
                  key={index}
                  className={`py-2 px-3 flex items-center space-x-2 ${activeSection === item.section ? 'bg-blue-700 text-white' : 'hover:bg-blue-800 text-gray-300'} rounded transition-colors cursor-pointer`}
                  onClick={() => {
                    setActiveSection(item.section);
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </div>
              ))}
              <div onClick={handleLogout} className="mt-4 py-2 px-3 flex items-center space-x-2 hover:bg-red-700 text-red-300 hover:text-white rounded transition-colors cursor-pointer">
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </nav>
          </div>
        </div>
      )}
      
      <div className={`flex-1 flex flex-col ${isMenuOpen && !isMobile ? 'ml-64' : ''} transition-all duration-300`}>
        <header className="bg-white shadow-md sticky top-0 z-40">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button className="menu-toggle text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-xl font-bold text-gray-800">{activeSection}</h1>
            </div>
          </div>
        </header>
        
        {/* Content Area */}
        <main className="flex-1 p-4">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;