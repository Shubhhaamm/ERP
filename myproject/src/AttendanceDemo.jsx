const AttendanceDemo = () => {
    const attendanceData = [
      { subject: 'Mathematics', present: 18, total: 20 },
      { subject: 'Physics', present: 16, total: 20 },
      { subject: 'Chemistry', present: 19, total: 20 },
      { subject: 'Computer Science', present: 17, total: 20 }
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Attendance Summary</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Present</th>
              <th className="p-2 border">Total Classes</th>
              <th className="p-2 border">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{item.subject}</td>
                <td className="p-2 border">{item.present}</td>
                <td className="p-2 border">{item.total}</td>
                <td className="p-2 border">
                  {((item.present / item.total) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default AttendanceDemo ;