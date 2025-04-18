import React from "react";

const SidePanelOuter = () => {
    return (
        <>
        <div className="side-panel-container">
            <div className="logo" style={{display: "flex", justifyContent: "center"}}><img src="/ma_logo.png" alt="MEDAPPS"/></div>
            <div className="menu-options">
                <div className="sb-options">
                    <select className="appointment menu-options-styling" name="apt" id="apt">
                        <option value="">Select Apt. Type</option>
                        <option value="online">Online/Virtual</option>
                        <option value="offline">Hospital Visit</option>
                    </select>
                    <button className="schedule-button menu-options-styling">OPD Schedule/Timing</button>
                    <button className="health-record menu-options-styling">Health Record</button>
                    <div className="calender menu-options-styling"> Calender</div>
                </div>
                <div className="login-button">
                    <button>LOGIN</button>
                </div>
            </div>
            <footer className="footer">© 2025 FinProd</footer>
        </div>
        </>
    );
}

export default SidePanelOuter;