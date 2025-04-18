import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    gender: "",
    age: "",
    contact: "",
    address: "",
    pinCode: "",
    department: "",
    doctor: "",
    date: "",
    captcha: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState("");
  const [isDepartmentsLoaded, setIsDepartmentsLoaded] = useState(false); // Track if departments are loaded

  // Fetch departments when the dropdown is focused or clicked
  const handleDepartmentFocus = async () => {
    if (isDepartmentsLoaded) return; // Prevent unnecessary re-fetch
    try {
      const response = await axios.get("/api/department");
      setDepartments(response.data);
      setIsDepartmentsLoaded(true); // Set as loaded to avoid multiple API calls
    } catch (error) {
      console.error("Error fetching departments:", error);
      setError("Failed to load departments.");
    }
  };

  // Fetch doctors based on the selected department
  const fetchDoctors = async (department) => {
    try {
      const response = await axios.get(`/api/doctors?department=${department}`);
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setDoctors([]);
      setError("Failed to load doctors for the selected department.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Fetch doctors when department changes
    if (name === "department") {
      setDoctors([]); // Reset doctors when department changes
      if (value) fetchDoctors(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/appointments", formData);
      console.log("Appointment created successfully:", response.data);
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Please fill the details below to book a new appointment.</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-row">
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: "25%" }}
          >
            <option value="">Mr./Ms./Mrs.</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
          <input
            type="text"
            name="fullName"
            placeholder="Patient Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={{ width: "75%" }}
          />
        </div>

        <div className="form-row">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{ width: "33.33%" }}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            name="age"
            placeholder="Age (in years)"
            value={formData.age}
            onChange={handleChange}
            style={{ width: "33.33%" }}
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact No."
            value={formData.contact}
            onChange={handleChange}
            style={{ width: "33.33%" }}
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: "75%" }}
          />
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
            style={{ width: "25%" }}
          />
        </div>

        <div className="form-row">
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            onFocus={handleDepartmentFocus} // Trigger department fetch on focus
            style={{ width: "33.33%" }}
          >
            <option value="">Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            style={{ width: "33.33%" }}
            disabled={!formData.department}
          >
            <option value="">Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{ width: "33.33%" }}
          />
        </div>

        <div className="form-row captcha">
          <img
            src="/vite.svg"
            alt="Captcha Image"
            className="captcha-image"
            style={{ width: "33.33%" }}
          />
          <input
            type="text"
            name="captcha"
            placeholder="Enter Captcha Here..."
            value={formData.captcha}
            onChange={handleChange}
            style={{ width: "33.33%" }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
