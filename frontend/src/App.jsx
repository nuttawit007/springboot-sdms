import { useEffect, useState } from "react";
import { getAllStudents } from "./api/sutdentApi.js";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllStudents().then((data) => {
        console.log("Fetched data:", data);
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        <h1>Student List</h1>
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <ul>
            {students.map((student) => (
              <li key={student.studentCode}>
                {student.studentCode} - {student.firstName} {student.lastName}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
