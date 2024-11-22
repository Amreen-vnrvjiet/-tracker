import React, { useState } from 'react';
import { UserCircle2, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: (type: 'student' | 'teacher') => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              className={`px-6 py-2 rounded-full ${
                userType === 'student'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setUserType('student')}
            >
              Student
            </button>
            <button
              className={`px-6 py-2 rounded-full ${
                userType === 'teacher'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setUserType('teacher')}
            >
              Teacher
            </button>
          </div>

          <div className="relative">
            <UserCircle2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={() => onLogin(userType)}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
