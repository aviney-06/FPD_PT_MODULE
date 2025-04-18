import React from "react";

const MedicalHistory = () => {

    const aptDetails = Array(15).fill({
        doc_name: "Dr.N.K. Dubey",
        apt_date: "21/08/2024",
        apt_day: "Monday"
    });

    return (
        <>
            <div className="container" style={{
                padding: "0.2rem 2.5rem 0 2.5rem",
            }}>
                <div className="main-page" style={{
                    width: "100%",
                    overflowX: "hidden"
                }}>
                    <div className="heading-div" style={{
                        fontSize: "2.3rem",
                        textAlign: "center",
                        color: "#555C66"
                    }}>
                        Medical History
                    </div>
                    <div className="filter-div" style={{
                        display: "flex",
                        justifyContent: "end",
                        marginBottom: "1rem"
                    }}>
                        <select name="filter" id="filter" style={{
                            padding: "0.8rem 2rem",
                            background: "#6a87b0",
                            borderRadius: "5px",
                            color: "#FFFFFF",
                            fontSize: "1rem",
                            border: "none",
                            cursor: "pointer"
                        }}
                        >
                            <option value="" disabled>Select Month ▼</option>
                            <option value="">Current</option>
                            <option value="">2-3</option>
                            <option value="">4-6</option>
                            <option value="">7-12</option>
                        </select>
                    </div>
                    <div className="history-list" style={{
                    height: "65vh",
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
                            padding: "0.7rem 1rem",
                            marginBottom: "0.8rem",
                            background: "rgba(136, 157, 187, 50%)",
                            fontSize: "1.2rem",
                            borderRadius: "5px"
                        }}>
                            <span>{item.doc_name}</span>
                            <span>{item.apt_date}</span>
                            <span>{item.apt_day}</span>
                            <button className="btn-more-info" style={{
                                background: "#6a87b0",
                                color: "#FFFFFF",
                                padding: "0.7rem 1rem",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer"
                            }}>
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
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
        </>
    );
}

export default MedicalHistory