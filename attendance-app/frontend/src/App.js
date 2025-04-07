import { useState, useEffect } from 'react';
import axios from './services/api';
import AttendanceList from './components/AttendanceList';
import DownloadButton from './components/DownloadButton';

function App() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await axios.get('/api/attendance');
      setAttendanceData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Class Attendance</h1>
      <AttendanceList data={attendanceData} onUpdate={fetchAttendance} />
      <DownloadButton />
    </div>
  );
}

export default App;