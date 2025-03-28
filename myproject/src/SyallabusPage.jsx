import { useState } from "react";

const syllabusData = {
  "Semester 1": [
    { code: "CS101", name: "Computer Science Basics", credits: 3 },
    { code: "MTH101", name: "Mathematics I", credits: 4 },
    { code: "PHY101", name: "Physics", credits: 3 },
  ],
  "Semester 2": [
    { code: "CS102", name: "Data Structures", credits: 4 },
    { code: "MTH102", name: "Mathematics II", credits: 4 },
    { code: "CHE101", name: "Chemistry", credits: 3 },
  ],
};

export default function SyllabusPage() {
  const [semester, setSemester] = useState("Semester 1");
  const [search, setSearch] = useState("");

  const filteredSyllabus = syllabusData[semester].filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Syllabus</h1>
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
        <select
          className="border p-2 rounded w-full md:w-auto"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          {Object.keys(syllabusData).map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search subject..."
          className="border p-2 rounded w-full md:w-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Course Code</th>
              <th className="p-3">Subject Name</th>
              <th className="p-3">Credits</th>
            </tr>
          </thead>
          <tbody>
            {filteredSyllabus.length > 0 ? (
              filteredSyllabus.map((subject) => (
                <tr key={subject.code} className="border-t">
                  <td className="p-3">{subject.code}</td>
                  <td className="p-3">{subject.name}</td>
                  <td className="p-3">{subject.credits}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-3 text-center">
                  No subjects found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
