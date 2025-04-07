const DownloadButton = () => {
  return (
    <button 
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => window.location.href = '/api/export/csv'}
    >
      Download Attendance (CSV)
    </button>
  );
};

export default DownloadButton;