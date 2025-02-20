import { useState } from "react";
import axios from "axios";

export default function StudentRegistration() {
  const [student, setStudent] = useState({ name: "", email: "", age: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/students", student);
      setMessage("Student registered successfully!");
      setStudent({ name: "", email: "", age: "" });
    } catch (error) {
      setMessage("Error registering student");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-2"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
} 
write a css for this to put in app.css