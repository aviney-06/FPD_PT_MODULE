import React from "react";

const PatientProfile = () => {
    return (
        <div className="container" style={{
            margin: "0rem 2.5rem",
        }}>
            <div className="header" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 0 1.5rem 0"
            }}>
                <div className="back" style={{
                    fontSize: "1.5rem",
                    cursor: "pointer"
                }}>← back</div>
                <div className="mid">
                    <div className="title" style={{fontSize: "2rem"}}>Patient Profile</div><hr />
                </div>
                <div className="edit" style={{
                    padding: "1rem 2.5rem",
                    background: "#6a87b0",
                    width: "fit-content",
                    borderRadius: "3px",
                    color: "#FFFFFF",
                    boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                    cursor: "pointer"
                }}>EDIT</div>
            </div>

            <div className="main-container" style={{display: "flex", justifyContent: "space-between"}}>
                <div className="main-details" style={{
                    width: "80%",
                    height: "35vh",
                    boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                    borderRadius: "2px"
                }}>
                    <div className="main-details-title" style={{
                        padding: "0.7rem 1rem", fontSize: "1.3rem", color: "#555C66"
                    }}>Personal Details:</div>
                    <div className="main-details-body"></div>
                </div>
                <div className="main-photo" style={{
                    width: "18%",
                    height: "35vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <div className="photo" style={{
                        width: "100%",
                        height: "25vh",
                        background: "rgba(136, 157, 187, 50%)",
                        boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                        borderRadius: "2px"
                    }}></div>
                    <div className="photo-change" style={{
                        width: "100%",
                        height: "8vh",
                        background: "rgba(136, 157, 187, 50%)",
                        boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                        borderRadius: "2px"
                    }}></div>
                </div>
            </div>

            <div className="top-box" style={{ marginTop: "1.5rem", height: "28vh", background: "rgba(136, 157, 187, 50%)", borderRadius: "2px"}}>
                <div className="bottom-title-left" style={{
                    padding: "0.7rem 1rem", fontSize: "1.3rem", color: "#555C66"
                }}>Health Records:</div>
                <div className="bottom-body"></div>
            </div>
            <div className="bottom-box"style={{ marginTop: "1.3rem", height: "18vh", background: "rgba(136, 157, 187, 50%)", borderRadius: "2px"}}>
                <div className="bottom-title-right" style={{
                    padding: "0.7rem 1rem", fontSize: "1.3rem", color: "#555C66"
                }}>Other Records:</div>
                <div className="bottom-body"></div>
            </div>
        </div>
    );
}

export default PatientProfile