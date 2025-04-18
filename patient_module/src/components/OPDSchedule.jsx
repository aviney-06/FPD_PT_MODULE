import React, { useState } from "react";

const DoctorSchedule = () => {
  const [department, setDepartment] = useState("");
  const [day, setDay] = useState("");

  const departments = ["Medicine", "Surgery", "Pediatrics", "Orthopedics"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const scheduleData = [
    {
      id: 1,
      doctor: "Dr. N.K. Dubey",
      specialty: "General Physician",
      room: "100A",
      time: "10:00am-03:00pm",
    },
    {
        id: 1,
        doctor: "Dr. N.K. Dubey",
        specialty: "General Physician",
        room: "100A",
        time: "10:00am-03:00pm",
      },
      {
          id: 1,
          doctor: "Dr. N.K. Dubey",
          specialty: "General Physician",
          room: "100A",
          time: "10:00am-03:00pm",
        },
        {
            id: 1,
            doctor: "Dr. N.K. Dubey",
            specialty: "General Physician",
            room: "100A",
            time: "10:00am-03:00pm",
          },
          {
              id: 1,
              doctor: "Dr. N.K. Dubey",
              specialty: "General Physician",
              room: "100A",
              time: "10:00am-03:00pm",
            },
            {
                id: 1,
                doctor: "Dr. N.K. Dubey",
                specialty: "General Physician",
                room: "100A",
                time: "10:00am-03:00pm",
              },
              {
                  id: 1,
                  doctor: "Dr. N.K. Dubey",
                  specialty: "General Physician",
                  room: "100A",
                  time: "10:00am-03:00pm",
                },
                {
                    id: 1,
                    doctor: "Dr. N.K. Dubey",
                    specialty: "General Physician",
                    room: "100A",
                    time: "10:00am-03:00pm",
                  },
                  {
                      id: 1,
                      doctor: "Dr. N.K. Dubey",
                      specialty: "General Physician",
                      room: "100A",
                      time: "10:00am-03:00pm",
                    }
  ];

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Medicine ▼</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Wednesday ▼</option>
          {days.map((d, index) => (
            <option key={index} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="underline" style={{borderBottom: "2px solid #b0b9cc"}}></div>

      {department && day && (
        <div className="schedule">
          {scheduleData.map((entry) => (
            <div key={entry.id} className="schedule-item">
              <span>{entry.id}. </span>
              <span>{entry.doctor} </span>
              <span>{entry.specialty} </span>
              <span>{entry.room} </span>
              <span>{entry.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorSchedule;