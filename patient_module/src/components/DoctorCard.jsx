import React, {useState} from "react";

const DoctorCard = () => {

    const [topHeader, setTopHeader] = useState("new");
    const [flag, setFlag] = useState("true");
  
    const doctors = [
        { name: "Dr. N.K. Dubey", degree: "Ayurveda, General Physician", fee: "₹299/-", img: "#C6CED9" },
        { name: "Dr. A.S. Verma", degree: "Homeopathy, Specialist", fee: "₹199/-", img: "#D1E3F1" },
        { name: "Dr. R.K. Sharma", degree: "Dentist", fee: "₹499/-", img: "#B0C8D3" },
        { name: "Dr. L.P. Roy", degree: "Orthopedics, Specialist", fee: "₹699/-", img: "#9FA8B1" },
        { name: "Dr. S. Gupta", degree: "General Surgeon", fee: "₹349/-", img: "#F2C6B9" },
        { name: "Dr. N.K. Dubey", degree: "Ayurveda, General Physician", fee: "₹299/-", img: "#C6CED9" },
        { name: "Dr. A.S. Verma", degree: "Homeopathy, Specialist", fee: "₹199/-", img: "#D1E3F1" },
        { name: "Dr. R.K. Sharma", degree: "Dentist", fee: "₹499/-", img: "#B0C8D3" },
        { name: "Dr. L.P. Roy", degree: "Orthopedics, Specialist", fee: "₹699/-", img: "#9FA8B1" },
        { name: "Dr. S. Gupta", degree: "General Surgeon", fee: "₹349/-", img: "#F2C6B9" },
        { name: "Dr. N.K. Dubey", degree: "Ayurveda, General Physician", fee: "₹299/-", img: "#C6CED9" },
        { name: "Dr. A.S. Verma", degree: "Homeopathy, Specialist", fee: "₹199/-", img: "#D1E3F1" },
        { name: "Dr. R.K. Sharma", degree: "Dentist", fee: "₹499/-", img: "#B0C8D3" },
        { name: "Dr. L.P. Roy", degree: "Orthopedics, Specialist", fee: "₹699/-", img: "#9FA8B1" },
        { name: "Dr. S. Gupta", degree: "General Surgeon", fee: "₹349/-", img: "#F2C6B9" },
    ];

    const aptDetails = Array(15).fill({
        doc_name: "Dr.N.K. Dubey",
        apt_date: "21/08/2024",
        apt_day: "Monday",
    });

    const flagForm = () => {
        setFlag("true");
    }
  
    const flagHistory = () => {
      setFlag("false");
    }

    return (
        <div className="container" style={{
            display: "flex",
            flexDirection: "column"
        }}>
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
            { (flag == 'true') ?
                <div className="mid-container" style={{display: "flex", width: "100%"}}>
                <div className="doctor-container-outer" style={{paddingTop: "1rem", width: "80%", margin: "0 1rem 0 2rem", height: "90vh", overflow: "scroll", boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)"}}>
                {doctors.map((doctor, index) => (
                <div className="doc-card-container" key={index} style={{ display: "flex", marginBottom: "2rem", height: "fit-content" }}>
                <div className="doc-card-details" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%", margin: "0 1rem", overflow: "scroll" }}>
                  <div className="doc-image" style={{ height: "9.9rem", minWidth: "9.5rem", background: doctor.img, boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)", borderRadius: "2px" }}></div>
                  <div className="doc-details" style={{ padding: "0.2rem 5rem 0 0", borderRight: "2px solid #555C66", marginRight: "1.5rem", width: "17rem" }}>
                    <div className="name" style={{ fontSize: "1.6rem", marginBottom: "0.2rem", color: "#28323F" }}>
                      {doctor.name}
                    </div>
                    <div className="degree" style={{ fontSize: "1.3rem", marginBottom: "0.8rem", color: "#555C66" }}>
                      {doctor.degree}
                    </div>
                    <div className="fee" style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#555C66" }}>
                      Consultation Fee - {doctor.fee}
                    </div>
                    <div className="btn-consult" style={{ background: "rgba(29, 91, 172, 90%)", padding: "0.7rem", borderRadius: "5px", fontSize: "1.2rem", color: "white", textAlign: "center", width: "100%" }}>
                        Book Consultation
                    </div>
                  </div>
                </div>
                <div className="doc-card-buttons" style={{ margin: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "30%" }}>
                  <div className="btn-top" style={{ padding: "1rem", background: "rgba(29, 91, 172, 25%)", color: "#1D5BAC", fontSize: "1rem", fontWeight: "600", borderRadius: "5px", textAlign: "center", boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)", cursor: "pointer" }}>
                    Check Availability
                  </div>
                  <div className="btn-bottom" style={{ padding: "1rem", background: "rgba(29, 91, 172, 25%)", color: "#1D5BAC", fontSize: "1rem", fontWeight: "600", borderRadius: "5px", textAlign: "center", boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)", cursor: "pointer" }}>
                    View Timing
                  </div>
                </div>
              </div>
            ))}
                </div>
                <div className="filter-box" style={{
                    width: "20%",
                    height: "88vh",
                    background: "#E9E9E9",
                    boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                    padding: "0.7rem",
                    margin: "0 0.5rem"
                }}>
                    <div className="title" style={{
                        fontSize: "2.2rem",
                        fontWeight: "600",
                        textAlign: "center",
                        color: "#1D5BAC",
                        paddingBottom: "1rem",
                        borderBottom: "0.1rem solid #1D5BAC",
                        marginBottom: "1rem"
                    }}>Filter Results</div>

                    <div className="doctor-filter" style={{
                        padding: "0.1rem 2rem 1rem 2rem",
                        borderBottom: "0.1rem solid #1D5BAC",
                        fontSize: "1.3rem",
                        color: "#555C66",
                        marginBottom: "0.5rem",
                        cursor: "pointer"
                    }}>Doctor</div>

                    <div className="doctor-filter" style={{
                        padding: "0.5rem 2rem 1rem 2rem",
                        borderBottom: "0.1rem solid #1D5BAC",
                        fontSize: "1.3rem",
                        color: "#555C66",
                        marginBottom: "0.5rem",
                        cursor: "pointer"
                    }}>Speciality</div>

                    <div className="doctor-filter" style={{
                        padding: "0.5rem 2rem 1rem 2rem",
                        borderBottom: "0.1rem solid #1D5BAC",
                        fontSize: "1.3rem",
                        color: "#555C66",
                        marginBottom: "0.5rem",
                        cursor: "pointer"
                    }}>Symptom</div>

                    <div className="doctor-filter" style={{
                        padding: "0.5rem 2rem 1rem 2rem",
                        borderBottom: "0.1rem solid #1D5BAC",
                        fontSize: "1.3rem",
                        color: "#555C66",
                        marginBottom: "1rem",
                        cursor: "pointer"
                    }}>Location</div>

                    <div className="ad-below" style={{
                        padding: "0.7rem 2rem 1.5rem 2rem",
                        background: "rgba(29, 91, 172, 90%)",
                        height: "39%",
                        maxHeight: "42%",
                        borderRadius: "5px",
                    }}></div>
                </div>
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
            <div className="bottom-ads" style={{
                minHeight: "15vh",
                backgroundColor: "#6a87b0",
                margin: "1rem 1.5rem 0 1.5rem",
                borderRadius: "10px",
                boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
            }}>
            </div>
        </div>
            }
        </div>
    );
}

export default DoctorCard;
