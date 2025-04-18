import React, {useState} from "react";

const AppointmentHistory = () => {

    const [topHeader, setTopHeader] = useState("new");

    const aptDetails = Array(15).fill({
        doc_name: "Dr.N.K. Dubey",
        apt_date: "21/08/2024",
        apt_day: "Monday",
    });

    return (
        <div className="container" style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <div style={{
                width: "100%",
                marginBottom: "1.5rem",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <button
                    onClick={() => setTopHeader("new")}
                    style={{ width: "50%", fontSize: "1.2rem", padding: "0.5rem 1rem", background: topHeader === "new" ? "#2b3d51" : "transparent", cursor: topHeader === "new" ? "" : "pointer", color: topHeader === "new" ? "white" : "#28323F"}}
                >New Appointment</button>

                <button
                    onClick={() => setTopHeader("history")}
                    style={{ width: "50%", fontSize: "1.2rem", padding: "0.5rem 1rem", background: topHeader === "history" ? "#2b3d51" : "transparent", cursor: topHeader === "history" ? "" : "pointer", color: topHeader === "history" ? "white" : "#28323F"}}
                >History</button>
            </div>

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
        </div>
    );
};

export default AppointmentHistory;
