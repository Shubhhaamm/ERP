import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios: npm install axios

function LoginPage() {
  const [isStudent, setIsStudent] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message

    try {
      const response = await axios.post('https://erp-be-gnrp.onrender.com/api/auth/signin', {
        username,
        password
      });

      // Successful login
      console.log('Login successful', response.data);
      
      // Store the token in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
      
      // Navigate based on role (you might want to adjust this logic)
      if (response.data.roles.includes('ROLE_USER')) {
        navigate('/student-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      // Handle login error
      console.error('Login failed', err);
      setError('Invalid credentials. Please try again.');
      
      // Optional: more detailed error handling
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response', err.response.data);
        setError(err.response.data.message || 'Login failed');
      } else if (err.request) {
        // The request was made but no response was received
        console.error('No response received', err.request);
        setError('No response from server. Please check your connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', err.message);
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsStudent(true)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                isStudent 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-300'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setIsStudent(false)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                !isStudent 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-300'
              }`}
            >
              Teacher
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            {isStudent ? 'Student Login' : 'Teacher Login'}
          </h2>
          
          {error && (
            <div className="mb-4 text-red-600 text-center">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label 
              htmlFor="username" 
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input 
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={`Enter ${isStudent ? 'student' : 'teacher'} username`}
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-6">
            <label 
              htmlFor="password" 
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {isStudent ? 'Student Login' : 'Teacher Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;