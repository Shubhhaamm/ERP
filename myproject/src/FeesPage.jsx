import { useState } from "react";

const feesData = {
  "Semester 1": { tuition: 50000, exam: 5000, misc: 2000 },
  "Semester 2": { tuition: 52000, exam: 5000, misc: 2500 },
};

export default function FeesPage() {
  const [semester, setSemester] = useState("Semester 1");

  const fees = feesData[semester];
  const totalFees = fees.tuition + fees.exam + fees.misc;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fees Structure</h1>
      <div className="mb-4">
        <select
          className="border p-2 rounded"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          {Object.keys(feesData).map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>
      <div className="border rounded-lg shadow-lg p-4">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Fee Type</th>
              <th className="p-3">Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Tuition Fees</td>
              <td className="p-3">₹{fees.tuition}</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Exam Fees</td>
              <td className="p-3">₹{fees.exam}</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Miscellaneous Fees</td>
              <td className="p-3">₹{fees.misc}</td>
            </tr>
            <tr className="border-t font-bold">
              <td className="p-3">Total Fees</td>
              <td className="p-3">₹{totalFees}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
