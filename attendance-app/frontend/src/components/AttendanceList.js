import { useState } from 'react';

const AttendanceList = ({ data, onUpdate }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Student</th>
            <th className="px-4 py-2 text-center">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {data.map(record => (
            <tr key={record._id}>
              <td className="border px-4 py-2">{record.studentName}</td>
              <td className="text-center px-4 py-2">
                <button 
                  className={`px-3 py-1 rounded 
                    ${record.attended ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                  onClick={() => toggleAttendance(record._id, !record.attended)}
                >
                  {record.attended ? 'Present' : 'Absent'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const toggleAttendance = async (id, newStatus) => {
    try {
      await axios.put(`/api/attendance/${id}`, { attended: newStatus });
      onUpdate(); // Refresh data
    } catch (error) {
      console.error('Toggle error:', error);
    }
  };
};

export default AttendanceList;