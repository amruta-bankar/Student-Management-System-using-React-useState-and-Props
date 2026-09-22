import { useState } from "react";
import "./App.css";

function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <div className="student-icon">🎓</div>

      <div className="student-info">
        <h3>{student.name}</h3>
        <p><strong>Roll No:</strong> {student.rollNo}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Year:</strong> {student.year}</p>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(student.id)}
      >
        Delete
      </button>
    </div>
  );
}


function App() {
  // useState to store student data
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      rollNo: "101",
      course: "Computer Engineering",
      year: "2nd Year",
    },
    {
      id: 2,
      name: "Priya Patil",
      rollNo: "102",
      course: "Information Technology",
      year: "2nd Year",
    },
  ]);

  // useState for form data
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");


  // Add student
  const addStudent = (e) => {
    e.preventDefault();

    if (!name || !rollNo || !course || !year) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      rollNo,
      course,
      year,
    };

    setStudents([...students, newStudent]);

    // Clear form
    setName("");
    setRollNo("");
    setCourse("");
    setYear("");
  };


  // Delete student
  const deleteStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };


  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>🎓 Student Management System</h1>
        <p>React Props & useState Example</p>
      </header>


      {/* Student Form */}
      <div className="form-card">

        <h2>Add Student</h2>

        <form onSubmit={addStudent}>

          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter roll number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <button type="submit">
            + Add Student
          </button>

        </form>
      </div>


      {/* Student Count */}
      <div className="count-card">
        <h2>Total Students</h2>
        <div className="count">
          {students.length}
        </div>
      </div>


      {/* Student List */}
      <div className="students-section">

        <h2>Student Details</h2>

        {students.length === 0 ? (
          <p className="empty">
            No students available.
          </p>
        ) : (
          students.map((student) => (

            <StudentCard
              key={student.id}
              student={student}
              onDelete={deleteStudent}
            />

          ))
        )}

      </div>

    </div>
  );
}

export default App;