import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import DaySchedule from './DaySchedule';
import { timetableData } from '../data/timetable';

interface AttendanceSheetProps {
  userType: 'student' | 'teacher' | null;
}

const AttendanceSheet: React.FC<AttendanceSheetProps> = ({ userType }) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [currentWeekDates, setCurrentWeekDates] = useState<Date[]>([]);
  const [attendance, setAttendance] = useState<Record<string, Record<string, boolean>>>({});
  const days = Object.keys(timetableData);

  useEffect(() => {
    // Calculate dates for the current week
    const today = new Date();
    const currentDay = today.getDay();
    const diff = currentDay === 0 ? -6 : 1 - currentDay; // Adjust for Sunday
    
    const monday = new Date(today);
    monday.setDate(today.getDate() + diff);
    
    const weekDates = Array.from({ length: 6 }, (_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return date;
    });
    
    setCurrentWeekDates(weekDates);
  }, []);

  useEffect(() => {
    // Generate random initial attendance
    const randomAttendance: Record<string, Record<string, boolean>> = {};
    days.forEach(day => {
      randomAttendance[day] = {};
      timetableData[day as keyof typeof timetableData].forEach(period => {
        if (period.type !== 'free') {
          randomAttendance[day][period.subject] = Math.random() > 0.3;
        }
      });
    });
    setAttendance(randomAttendance);
  }, []);

  const toggleAttendance = (day: string, subject: string) => {
    if (userType === 'student') return;
    
    setAttendance(prev => ({
      ...prev,
      [day]: {
        ...(prev[day] || {}),
        [subject]: !(prev[day]?.[subject] ?? false)
      }
    }));
  };

  const navigateDay = (direction: 'prev' | 'next') => {
    setCurrentDayIndex(prev => {
      const newIndex = direction === 'next' ? prev + 1 : prev - 1;
      if (newIndex < 0) return days.length - 1;
      if (newIndex >= days.length) return 0;
      return newIndex;
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Weekly Attendance Sheet</h2>
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="h-5 w-5" />
          <span>{currentWeekDates[0]?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateDay('prev')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700">{days[currentDayIndex]}</h3>
            <p className="text-sm text-gray-500">
              {currentWeekDates[currentDayIndex] && formatDate(currentWeekDates[currentDayIndex])}
            </p>
          </div>
          <button
            onClick={() => navigateDay('next')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="transform transition-all duration-300 ease-in-out">
          <DaySchedule
            day={days[currentDayIndex]}
            schedule={timetableData[days[currentDayIndex] as keyof typeof timetableData]}
            attendance={attendance[days[currentDayIndex]] || {}}
            userType={userType}
            onToggleAttendance={toggleAttendance}
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-6 gap-4">
          {days.map((day, index) => (
            <button
              key={day}
              onClick={() => setCurrentDayIndex(index)}
              className={`p-3 rounded-lg text-center transition-colors ${
                currentDayIndex === index
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className="text-sm font-medium">{day}</div>
              <div className="text-xs text-gray-500">
                {currentWeekDates[index] && formatDate(currentWeekDates[index])}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceSheet;