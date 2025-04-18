// import SidePanelInner from "./sidePanel/InnerSP";

// const MedicalReports = () => {

//     const aptDetails = [
//         {
//             "doc_name" : "Dr.N.K. Dubey",
//             "apt_date" : "21/08/2024",
//             "apt_day" : "Monday"
//         },
//         {
//             "doc_name" : "Dr.N.K. Dubey",
//             "apt_date" : "21/08/2024",
//             "apt_day" : "Monday"
//         },
//         {
//             "doc_name" : "Dr.N.K. Dubey",
//             "apt_date" : "21/08/2024",
//             "apt_day" : "Monday"
//         }
//         ,
//         {
//             "doc_name" : "Dr.N.K. Dubey",
//             "apt_date" : "21/08/2024",
//             "apt_day" : "Monday"
//         },
//         {
//             "doc_name" : "Dr.N.K. Dubey",
//             "apt_date" : "21/08/2024",
//             "apt_day" : "Monday"
//         },
//         {
//             "doc_name" : "Dr.N.K. Dubey",
//             "apt_date" : "21/08/2024",
//             "apt_day" : "Monday"
//         },
//         {
//             "doc_name" : "Dr.N.K. Dubey",
//             "apt_date" : "21/08/2024",
//             "apt_day" : "Monday"
//         },
//         {
//             "doc_name" : "Dr.N.K. Dubey",
//             "apt_date" : "21/08/2024",
//             "apt_day" : "Monday"
//         }
//     ];

//     return (
//         <>
//             <div className="container" style={{
//                 display: "flex",
//                 width: "100%"
//             }}>
//                 <div className="side-panel" style={{width: "20%"}}>
//                     <SidePanelInner />
//                 </div>
//                 <div className="main-page" style={{
//                     width: "80%",
//                     height: "100%",
//                     margin: "0.5rem 2.5rem 0.2rem 2.5rem"
//                 }}>
//                     <div className="heading-div" style={{
//                         fontSize: "2.3rem",
//                         display: "flex",
//                         justifyContent: "center",
//                         marginBottom: "0.3rem",
//                         color: "#555C66"
//                     }}>
//                         Medical Reports
//                     </div>
//                     <div className="filter-div" style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         margin: "0 2.5rem 0.7rem 2.5rem"
//                     }}>
//                         <select name="filter" id="filter" style={{
//                             padding: "1rem 2.5rem",
//                             background: "#6a87b0",
//                             width: "fit-content",
//                             borderRadius: "3px",
//                             color: "#FFFFFF",
//                             fontSize: "1rem",
//                             // letterSpacing: "1px",
//                             boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
//                             borderStyle: "none"
//                         }}
//                         >
//                             <option value="" disabled>Report Type ▼</option>
//                             <option value="">Radiology</option>
//                             <option value="">Pathology</option>
//                         </select>


//                         <select name="filter" id="filter" style={{
//                             padding: "1rem 2.5rem",
//                             background: "#6a87b0",
//                             width: "fit-content",
//                             borderRadius: "3px",
//                             color: "#FFFFFF",
//                             fontSize: "1rem",
//                             // letterSpacing: "1px",
//                             boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
//                             borderStyle: "none"
//                         }}
//                         >
//                             <option value="" disabled>Select Month ▼</option>
//                             <option value="">Current</option>
//                             <option value="">2-3</option>
//                             <option value="">4-6</option>
//                             <option value="">7-12</option>
//                         </select>
//                         {/* <div className="filter" style={{
//                             padding: "0.7rem 3rem",
//                             background: "#6a87b0",
//                             width: "fit-content",
//                             borderRadius: "3px",
//                             color: "#FFFFFF",
//                             fontSize: "1.4rem",
//                             letterSpacing: "1px",
//                             boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
//                             // marginBottom: "1rem"
//                         }}>
//                             Filter ▼
//                         </div> */}
//                     </div>
//                     <div className="history-list" style={{
//                         height: "65vh",
//                         margin: "0 2.5rem 1rem 2.5rem",
//                         boxShadow: "0px 3px 5px rgba(136, 136, 136, 0.5)",
//                         background: "#FFFFFF",
//                         padding: "0.7rem 2rem",
//                         overflow: "scroll"
//                     }}>
//                         {aptDetails.map((item) => (
//                             <div key={item} style={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 color: "black",
//                                 padding: "1.2rem 2rem",
//                                 marginBottom: "1.1rem",
//                                 background: "rgba(136, 157, 187, 50%)",
//                                 fontSize: "1.2rem",
//                                 borderRadius: "5px"
//                             }}>
//                                 <span>{item.doc_name}</span>
//                                 <span>{item.apt_date}</span>
//                                 <span>{item.apt_day}</span>
//                                 <div className="btn-more-info">View Details</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="bottom-ads" style={{
//                         width: "100%",
//                         minHeight: "20%",
//                         backgroundColor: "#6a87b0",
//                         // border: "2px solid blue",
//                         padding: "8vh 0",
//                         borderRadius: "25px"
//                     }}>
//                         {/* line 2 */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default MedicalReports


import React from "react";

const MedicalReports = () => {
    const aptDetails = Array(15).fill({
        doc_name: "Dr.N.K. Dubey",
        apt_date: "21/08/2024",
        apt_day: "Monday"
    });

    return (
        <div className="dashboard-container" style={{
            // display: "flex",
            // width: "100vw",
            // height: "100vh",
            padding: "0.2rem 2.5rem 0 2.5rem",
        }}>
            {/* Side Panel */}
            {/* <div className="side-panel" style={{
                width: "20%",
                background: "#F4F6F9",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                overflow: "hidden"
            }}>
                <SidePanelInner />
            </div> */}

            {/* Main Content */}
            <div className="main-content" style={{
                width: "100%",
                // marginLeft: "20%",
                // padding: "0.2rem 2.5rem",
                overflowX: "hidden"
            }}>
                <div className="heading-div" style={{
                    fontSize: "2.3rem",
                    textAlign: "center",
                    // marginBottom: "0.7rem",
                    color: "#555C66"
                }}>
                    Medical Reports
                </div>

                {/* Filter Section */}
                <div className="filter-div" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem"
                }}>
                    <select name="report-type" style={{
                        padding: "0.8rem 2rem",
                        background: "#6a87b0",
                        borderRadius: "5px",
                        color: "#FFFFFF",
                        fontSize: "1rem",
                        border: "none",
                        cursor: "pointer"
                    }}>
                        <option value="" disabled>Report Type ▼</option>
                        <option value="radiology">Radiology</option>
                        <option value="pathology">Pathology</option>
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
                        <option value="" disabled>Select Month ▼</option>
                        <option value="current">Current</option>
                        <option value="2-3">2-3</option>
                        <option value="4-6">4-6</option>
                        <option value="7-12">7-12</option>
                    </select>
                </div>

                {/* Appointment List */}
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

export default MedicalReports;
