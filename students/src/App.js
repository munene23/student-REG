import { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

export default function StudentRegistration() {
  const [student, setStudent] = useState({ name: "", email: "", age: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/api/students", student);
      setMessage("Student registered successfully!");
      setIsError(false);
      setStudent({ name: "", email: "", age: "" });
    } catch (error) {
      setMessage("Error registering student");
      setIsError(true);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={student.age} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        {message && <p className={`message ${isError ? "error-message" : "success-message"}`}>{message}</p>}
      </div>
    </div>
  );
}
