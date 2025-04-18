import { useEffect, useState } from 'react';
import axios from 'axios';

import "../../public/css/AptFormInner.css";

const AppointmentFormInner = () => {

  const [topHeader, setTopHeader] = useState("new");

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

  const aptDetails = Array(15).fill({
    doc_name: "Dr.N.K. Dubey",
    apt_date: "21/08/2024",
    apt_day: "Monday",
  });

  const [flag, setFlag] = useState("true");
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState("");
  const [isDepartmentsLoaded, setIsDepartmentsLoaded] = useState(false);

  const handleDepartmentFocus = async () => {
    if (isDepartmentsLoaded) return;
    try {
      const response = await axios.get("/api/department");
      setDepartments(response.data);
      setIsDepartmentsLoaded(true);
    } catch (error) {
      console.error("Error fetching departments:", error);
      setError("Failed to load departments.");
    }
  };

  const flagForm = () => {
      setFlag("true");
  }

  const flagHistory = () => {
    setFlag("false");
  }

  useEffect(()=> {
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
    fetchDoctors(departments);
  },[departments]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Fetch doctors when department changes
    if (name === "department") {
      setDoctors([]); // Reset doctors when department changes
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
    <div className="container">
      <div style={{
                width: "100%",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <button
                    onClick={() => {setTopHeader("new"); flagForm();}}
                    style={{ width: "50%", fontSize: "1.2rem", padding: "0.5rem 1rem", background: topHeader === "new" ? "#2b3d51" : "transparent", cursor: topHeader === "new" ? "" : "pointer", color: topHeader === "new" ? "white" : "#28323F"}}
                >New Appointment</button>

                <button
                    onClick={() => {setTopHeader("history"); flagHistory();}}
                    style={{ width: "50%", fontSize: "1.2rem", padding: "0.5rem 1rem", background: topHeader === "history" ? "#2b3d51" : "transparent", cursor: topHeader === "history" ? "" : "pointer", color: topHeader === "history" ? "white" : "#28323F"}}
                >History</button>
            </div>
      {
        flag == "true" ?
        <div className="form-container">
      <div className="heading">Please fill the details below to book a new appointment.</div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-row">
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: "25%" }}
          >
            <option value="" disabled>Mr./Ms./Mrs.</option>
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
        <button type="submit">Submit</button>
      </form>
    </div>
    :
    <div className="main-page" style={{ width: "100%", height: "100%" }}>
                <div className="filter-div" style={{ display: "flex", justifyContent: "end", margin: "0 1.5rem 1rem 1.5rem" }}>
                    <select name="filter" id="filter" style={{
                        padding: "1rem 2.5rem",
                        background: "#6a87b0",
                        borderRadius: "3px",
                        color: "#FFFFFF",
                        fontSize: "1rem",
                        boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                        border: "none"
                    }}>
                        <option value="" disabled>Select Month ▼</option>
                        <option value="">Current</option>
                        <option value="">2-3</option>
                        <option value="">4-6</option>
                        <option value="">7-12</option>
                    </select>
                </div>

                <div className="history-list" style={{
                    height: "63vh",
                    margin: "0 1.5rem 1rem 1.5rem",
                    boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                    padding: "0.7rem 2rem",
                    overflowY: "auto"
                }}>
                    {aptDetails.length ? (
                        aptDetails.map((item, index) => (
                            <div key={index} className="menu-options-styling" style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "black",
                                padding: "1.2rem 2rem",
                                marginBottom: "1rem",
                                background: "rgba(136, 157, 187, 50%)",
                                borderRadius: "5px"
                            }}>
                                <span>{item.doc_name}</span>
                                <span>{item.apt_date}</span>
                                <span>{item.apt_day}</span>
                                <div className="btn-more-info">View Details</div>
                            </div>
                        ))
                    ) : (
                        <div className="no-data-found" style={{
                            padding: "1.2rem 2rem",
                            background: "rgba(136, 157, 187, 50%)",
                            borderRadius: "5px",
                            fontSize: "1rem",
                            fontWeight: "600",
                            textAlign: "center",
                        }}>NO DATA FOUND!!!</div>
                    )}
                </div>
            </div>
      }
    <div className="bottom-ads" style={{
      minHeight: "15vh",
      backgroundColor: "#6a87b0",
      margin: "1rem 1.5rem 0 1.5rem",
      borderRadius: "10px",
      boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
    }}></div>
    </div>
  );
};

export default AppointmentFormInner;