import React from "react";

const TestReport = () => {
    return (
        <div className="container" style={{
            margin: "0rem 2.5rem",
        }}>
            <div className="header" style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.5rem 0",
                alignItems: "center"
            }}>
                <div className="back" style={{
                    fontSize: "1.5rem",
                    cursor: "pointer"
                }}>← back</div>
                <div className="mid">
                    <div className="report-name" style={{fontSize: "2rem"}}>Test Name</div><hr />
                </div>
                <div className="download" style={{
                    padding: "1rem 2.5rem",
                    background: "#6a87b0",
                    width: "fit-content",
                    borderRadius: "3px",
                    color: "#FFFFFF",
                    boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                    cursor: "pointer"
                    // borderStyle: "none"
                }}>DOWNLOAD</div>
            </div>
            <div className="main" style={{
                margin: "0.2rem 2.5rem 0 2.5rem",
                height: "89vh",
                borderRadius: "2px",
                boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
            }}></div>
        </div>
    );
}

export default TestReport