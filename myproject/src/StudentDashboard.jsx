import React, { useState, useEffect } from 'react';
import AttendanceDemo from './AttendanceDemo'; // Adjust path if needed


import { 
  Bell, ChevronDown, Menu, X, Users, DollarSign, 
  Book, Computer, UserCircle, FileText, 
  CreditCard, Calendar, Download, Search,
  Mail, Phone, MapPin, Settings, LogOut, Home, 
  BarChart2, AlertCircle, CheckCircle, AlertTriangle
} from 'lucide-react';
import SyllabusPage from './SyallabusPage';
import FeesPage from './FeesPage';
import StudentProfile from './StudentProfile ';

// Responsive Utility Hook
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

// Bar Chart Component (from previous dashboard)
const BarChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transform transition-all hover:scale-105">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex space-x-2 items-end h-32">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full transition-all duration-300 ease-in-out hover:opacity-80 rounded-t-md"
              style={{ 
                height: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color 
              }}
            />
            <span className="text-xs mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dashboard Component
const DashboardSection = () => {
  const syllabusStatusData = [
    { label: 'DM-2019', value: 40.48, color: '#3b82f6' },
    { label: 'FOC-19', value: 53.13, color: '#10b981' },
    { label: 'MC-2019', value: 38.46, color: '#f59e0b' },
    { label: 'DBM-2019', value: 35.71, color: '#ef4444' },
    { label: 'IE-2019', value: 16.67, color: '#a855f7' }
  ];

  const attendanceData = [
    { label: 'DBM-2019', value: 100, color: '#10b981' },
    { label: 'DM-2019', value: 50, color: '#f59e0b' },
    { label: 'FOC-19', value: 0, color: '#ef4444' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: CheckCircle, color: 'green', title: 'Success', count: 0 },
          { icon: AlertCircle, color: 'blue', title: 'Info', count: 0 },
          { icon: AlertTriangle, color: 'yellow', title: 'Warnings', count: 0 },
          { icon: Bell, color: 'purple', title: 'Approvals', count: 0 }
        ].map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition-all"
          >
            <card.icon className={`text-${card.color}-500`} />
            <div>
              <h3 className="font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.count} Notifications</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChart data={syllabusStatusData} title="Subject Syllabus Status" />
        <BarChart data={attendanceData} title="Subject Attendance" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: BarChart2, title: 'Business Analytics' },
          { icon: FileText, title: 'Semester Result Analysis' },
          { icon: Book, title: 'Videos' },
          { icon: Calendar, title: 'Gallery' }
        ].map((section, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:bg-gray-50 cursor-pointer"
          >
            <section.icon className="text-blue-500" />
            <h3 className="font-semibold">{section.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
// ... after DashboardSection component ...

const AttendanceChart = () => {
  // Sample data for the charts
  const pieData = [
    { name: 'Present', value: 85 },
    { name: 'Absent', value: 15 }
  ];

  const barData = [
    { name: 'Jan', present: 22, absent: 3 },
    { name: 'Feb', present: 20, absent: 2 },
    { name: 'Mar', present: 23, absent: 1 },
    { name: 'Apr', present: 21, absent: 4 }
  ];

  const COLORS = ['#10B981', '#EF4444'];

  return (
    <div className="space-y-6">
      {/* ... keep the entire AttendanceChart JSX from previous example ... */}
    </div>
  );
};

// ... continue with your existing code ...

// Main Student Portal Component
const StudentPortal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useResponsive();

  const sidebarMenuItems = [
    { icon: Home, label: 'Dashboard', section: 'Dashboard' },
    { icon: Book, label: 'Attendance', section: 'Attendance' },
    { icon: FileText, label: 'Syllabus', section: 'Syllabus' },
    { icon: DollarSign, label: 'Fees', section: 'Fees' },
    { icon: UserCircle, label: 'Profile', section: 'Profile' },
    { icon: Computer, label: 'E-Learning', section: 'E-Learning' }
  ];

  // Logout Handler
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logging out...');
    // Typically would include clearing session, redirecting to login, etc.
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isMenuOpen) {
        // Check if the click is outside the sidebar
        const sidebar = document.querySelector('.sidebar');
        const menuButton = document.querySelector('.menu-toggle');
        
        if (
          sidebar && 
          menuButton && 
          !sidebar.contains(event.target) && 
          !menuButton.contains(event.target)
        ) {
          setIsMenuOpen(false);
        }
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isMenuOpen]);
  

  // Render active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'Dashboard':
        return <DashboardSection />;
      case 'Attendance':
        return <AttendanceDemo />; // Ensure this component is defined
      case 'Syllabus':
          return <SyllabusPage />;  
      case 'Fees':
        return <FeesPage />;       
      case 'Profile':
        return <StudentProfile />;
      case 'E-Learning':
        return <div className="bg-white p-6 rounded-lg">E-Learning Portal</div>;
      default:
        return <div className="bg-white p-6 rounded-lg">Section Content</div>;
    }
  };
  
  return (
    
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - Only visible when menu is open */}
      {isMenuOpen && (
        <div  
          className={`
            sidebar fixed inset-y-0 left-0 w-64 bg-blue-900 text-white z-50 shadow-lg 
            ${isMobile ? 'translate-x-0' : 'translate-x-0'}
            transition-transform duration-300 ease-in-out
          `}
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold flex items-center">
                <Users className="mr-2" /> Student Portal
              </h2>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="hover:text-gray-300"
              >
                <X size={24} />
              </button>
            </div>
            <nav>
              {sidebarMenuItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`
                    py-2 px-3 flex items-center space-x-2 
                    ${activeSection === item.section 
                      ? 'bg-blue-700 text-white' 
                      : 'hover:bg-blue-800 text-gray-300'}
                    rounded transition-colors cursor-pointer
                  `}
                  onClick={() => {
                    setActiveSection(item.section);
                    setIsMenuOpen(false);
                  }}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </div>
              ))}
              {/* Logout Option */}
              <div 
                onClick={handleLogout}
                className="mt-4 py-2 px-3 flex items-center space-x-2 hover:bg-red-700 text-red-300 hover:text-white rounded transition-colors cursor-pointer"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${isMenuOpen && !isMobile ? 'ml-64' : ''} transition-all duration-300`}>
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-40">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button 
                className="menu-toggle text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-xl font-bold text-gray-800">
                {activeSection}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search Input */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-2 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div> 
              
              
                
              {/* Notifications */}
              <div className="relative">
                <Bell className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
              </div>
              
              {/* Profile */}
              <img 
                src="/api/placeholder/40/40" 
                alt="Profile" 
                className="rounded-full w-10 h-10 border-2 border-gray-300" 
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6 flex-1 overflow-y-auto">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};

export default StudentPortal;