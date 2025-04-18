import React, { useState } from "react";
import "../../../public/css/InnerSP.css";

const SidePanelInner = () => {
    const [activeMenu, setActiveMenu] = useState("Appointment");
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(true);

    const menuItems = [
        "OPD Schedule/Timing",
        "Prescriptions",
        "Medical Reports",
        "Medical History",
        "Patient Profile",
    ];

    const handleMenuClick = (menu) => {
        if (menu === "Appointment") {
            setActiveMenu("Appointment"); // Ensures background moves to "Appointment"
            setIsAppointmentOpen((prev) => !prev);
        } else {
            setActiveMenu(menu);
            setIsAppointmentOpen(false);
        }
    };

    return (
        <div className="side-panel-container"
        >
            {/* Logo Section */}
            <div className="logo" style={{ display: "flex", justifyContent: "center"}}>
                <img src="/ma_logo.png" alt="MEDAPPS" style={{ width: "80%" }} />
            </div>

            {/* Menu Options */}
            <div className="menu-options"> 
                {/* Appointment Menu */}
                <div
                    className={`menu-options-styling ${activeMenu === "Appointment" ? "active" : ""}`}
                    onClick={() => handleMenuClick("Appointment")}
                >
                    Appointment
                </div>

                {/* Appointment Submenu (Collapsible) */}
                {isAppointmentOpen && (
                    <div className="submenu">
                        <div className="submenu-item" style={{borderBottom: "1px solid white"}}>Online/Virtual</div>
                        <div className="submenu-item">Hospital Visit</div>
                    </div>
                )}

                {/* Other Menu Items */}
                {menuItems.map((item) => (
                    <div
                        key={item}
                        className={`menu-options-styling ${activeMenu === item ? "active" : ""}`}
                        onClick={() => handleMenuClick(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Sign Out Button */}
            <div className="login-button">
                <button>
                    SIGN OUT
                </button>
            </div>

            {/* Footer */}
            <div className="footer">
                © 2025 FinProd
            </div>
        </div>
    );
};

export default SidePanelInner;
