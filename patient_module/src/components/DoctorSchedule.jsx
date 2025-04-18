import React from "react";

const DoctorScheduleOPD = () => {
    const aptDetails = Array(15).fill({
        doc_name: "Dr. N.K. Dubey",
        apt_date: "21/08/2024",
        apt_day: "Monday"
    });

    return (
        <div className="dashboard-container" style={{
            padding: "0.2rem 2.5rem 0 2.5rem",
        }}>
            <div className="main-content" style={{
                width: "100%",
                overflowX: "hidden"
            }}>
                <div className="heading-div" style={{
                    fontSize: "2.3rem",
                    textAlign: "center",
                    color: "#555C66",
                    marginBottom: "0.5rem"
                }}>
                    OPD Schedule
                </div>

                <div className="filter-div" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem"
                }}>
                    <select name="department-type" style={{
                        padding: "0.8rem 2rem",
                        background: "#6a87b0",
                        borderRadius: "5px",
                        color: "#FFFFFF",
                        fontSize: "1rem",
                        border: "none",
                        cursor: "pointer"
                    }}>
                        <option value="" disabled>Department ▼</option>
                        <option value="radiology">Medicine</option>
                        <option value="pathology">Emergency</option>
                        <option value="pathology">Pediatrics</option>
                    </select>

                    <select name="month" style={{
                        padding: "0.8rem 2rem",
                        background: "#6a87b0",
                        borderRadius: "5px",
                        color: "#FFFFFF",
                        fontSize: "1rem",
                        border: "none",
                        cursor: "pointer"
                    }}>
                        <option value="" disabled>Select Day ▼</option>
                        <option value="">Monday</option>
                        <option value="">Tuesday</option>
                        <option value="">Wednesday</option>
                        <option value="">Thurday</option>
                        <option value="">Friday</option>
                        <option value="">Saturday</option>
                        <option value="">Sunday</option>
                    </select>
                </div>

                {/* Appointment List */}
                <div className="history-list" style={{
                    height: "64vh",
                    boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                    background: "#FFFFFF",
                    padding: "1rem",
                    overflowY: "auto",
                    borderRadius: "5px"
                }}>
                    {aptDetails.map((item, index) => (
                        <div key={index} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "black",
                            padding: "1rem 2rem",
                            marginBottom: "0.8rem",
                            background: "rgba(136, 157, 187, 50%)",
                            fontSize: "1.2rem",
                            borderRadius: "5px"
                        }}>
                            <span>{item.doc_name}</span>
                            <span>{item.apt_date}</span>
                            <span>{item.apt_day}</span>
                            <span>{item.doc_name}</span>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="bottom-ads" style={{
                    width: "100%",
                    minHeight: "15vh",
                    backgroundColor: "#6a87b0",
                    marginTop: "1rem",
                    borderRadius: "10px",
                    boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                }}>
                </div>
            </div>
        </div>
    );
};

export default DoctorScheduleOPD;
