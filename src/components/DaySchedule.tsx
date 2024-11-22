import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Period } from '../types';

interface DayScheduleProps {
  day: string;
  schedule: Period[];
  attendance: Record<string, boolean>;
  userType: 'student' | 'teacher' | null;
  onToggleAttendance: (day: string, subject: string) => void;
}

const DaySchedule: React.FC<DayScheduleProps> = ({
  day,
  schedule,
  attendance,
  userType,
  onToggleAttendance,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn">
      <div className="p-6">
        <div className="grid gap-4">
          {schedule.map((period, index) => (
            <div
              key={`${day}-${index}`}
              className={`flex items-center justify-between p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${
                period.type === 'lab' ? 'bg-blue-50' : 
                period.type === 'free' ? 'bg-gray-50' : 'bg-green-50'
              }`}
            >
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{period.subject}</h4>
                {period.type === 'lab' && (
                  <span className="text-sm text-gray-600">({period.spans} hours)</span>
                )}
              </div>
              {period.type !== 'free' && (
                <button
                  onClick={() => onToggleAttendance(day, period.subject)}
                  disabled={userType === 'student'}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    attendance[period.subject]
                      ? 'text-green-600 bg-green-100 hover:bg-green-200'
                      : 'text-red-600 bg-red-100 hover:bg-red-200'
                  } ${userType === 'student' ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {attendance[period.subject] ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Present</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5" />
                      <span>Absent</span>
                    </>
                  )}
                </button>
              )}
              {period.type === 'free' && (
                <span className="text-gray-400">-</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaySchedule;