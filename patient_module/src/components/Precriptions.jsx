import React from "react";

const Prescription = () => {
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
                    <div className="date" style={{fontSize: "2rem"}}>23/08/2024</div><hr />
                </div>
                <div className="download" style={{
                    padding: "1rem 2.5rem",
                    background: "#6a87b0",
                    width: "fit-content",
                    borderRadius: "3px",
                    color: "#FFFFFF",
                    boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                    cursor: "pointer"
                }}>DOWNLOAD</div>
            </div>
            <div className="rx" style={{marginLeft: "2.5rem", fontSize: "1.5rem", marginBottom: "0.5rem", color: "#5E7DA7"}}>Rx</div>
            <div className="main" style={{
                margin: "0 2.5rem",
                height: "52vh",
                boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
                borderRadius: "2px"
            }}></div>
            <div className="bottom" style={{margin: "1rem 2.5rem 0 2.5rem", display: "flex", justifyContent: "space-between"}}>
                <div className="left-box" style={{width: "47%", height: "30vh", background: "rgba(136, 157, 187, 50%)", borderRadius: "2px"}}>
                    <div className="bottom-title-left" style={{
                        margin: "0.2rem 0", fontSize: "1.5rem", fontWeight: "bold", display: "flex", justifyContent: "center", color: "#555C66"
                    }}>Diet Plan</div>
                    <div className="bottom-body"></div>
                </div>
                <div className="right-box"style={{width: "47%", height: "30vh", background: "rgba(136, 157, 187, 50%)", borderRadius: "2px"}}>
                    <div className="bottom-title-right" style={{
                        margin: "0.2rem 0", fontSize: "1.5rem", fontWeight: "bold", display: "flex", justifyContent: "center", color: "#555C66"
                    }}>Investigation</div>
                    <div className="bottom-body"></div>
                </div>
            </div>
        </div>
    );
}

export default Prescription