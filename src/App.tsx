import React, { useState } from 'react';
import { UserCircle2, BookOpen, Calendar } from 'lucide-react';
import Login from './components/Login';
import AttendanceSheet from './components/AttendanceSheet';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'student' | 'teacher' | null>(null);

  const handleLogin = (type: 'student' | 'teacher') => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">EduTrack</span>
            </div>
            {isLoggedIn && (
              <div className="flex items-center space-x-4">
                <UserCircle2 className="h-6 w-6 text-gray-600" />
                <span className="text-gray-600 capitalize">{userType}</span>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <AttendanceSheet userType={userType} />
        )}
      </main>
    </div>
  );
}

export default App;