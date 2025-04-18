import React from "react";

const AdsRight = () => {
    return (
        <>
            <div className="container-ad" style={{ 
                width: "100%",
                height: "100vh", 
                // marginTop: "1rem",
                // padding: "0.5rem 0",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                alignItems: "center",
                gap: "1.5rem"
                }}>
                <div className="brand-logo" style={{
                    height: "10%",
                    width: "90%",
                    backgroundColor: "#6a87b0",
                    borderRadius: "8px",
                    marginTop: "1rem"
                }}></div>
                <div className="ad-sec-one" style={{
                    height: "25%",
                    width: "90%",
                    backgroundColor: "#6a87b0",
                    borderRadius: "8px"
                }}></div>
                <div className="ad-sec-two" style={{
                    height: "55%",
                    width: "90%",
                    backgroundColor: "#6a87b0",
                    borderRadius: "8px"
                }}></div>
            
            </div>
        </>
    );
}

export default AdsRight