import React, { useState } from "react";
import axios from "axios";
import "../../public/css/LandingPage.css";

const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const LandingPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [enteredCaptcha, setEnteredCaptcha] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^[1-9][0-9]{0,9}$/.test(value) || value === "") {
      setPhoneNumber(value);
    }
  };

  const handleOTPChange = (event) => {
    const value = event.target.value;
    if (/^[0-9]{0,6}$/.test(value) || value === "") {
      setOtp(value);
    }
  };

  async function verifyCaptcha() {
    if (!/^[1-9][0-9]{9}$/.test(phoneNumber)) {
      alert("Incorrect mobile number entered.");
      return;
    }

    if (enteredCaptcha !== captcha) {
      alert("Incorrect captcha. Please try again.");
      setEnteredCaptcha("");
      // setCaptcha(generateCaptcha());
      return;
    }
    alert("Captcha validated successfully. Generating OTP...");
    try {
      const response = await axios.post("http://localhost:5234/generate-otp", {
      PhoneNumber: phoneNumber,
    }, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
      console.log(response.statusText);
      alert(`${response.statusText}`);
    } catch (error) {
      console.error("Error details:", error);
      alert("Failed to generate OTP");
    }
    // setShowCaptchaPopup(false);
    setShowOtpField(true);
  }

  return (
    <div className="lp-container">
      <header className="lp-header">
        <div className="lp-logo"><img src="/ma_logo.png" alt="MEDAPPS" width="100%" /></div>
        <div className="lp-logo"><img src="/ma_logo.png" alt="MEDAPPS" width="100%" /></div>
      </header>

      <div className="lp-mid-container" style={{
        display: "flex",
        justifyContent: "space-between",
        height: "22vh",
        marginBottom: "2rem"
      }}>
        <div className="lp-text-box" style={{
          width: "60%",
          height: "100%"
        }}>
          <h1>Welcome To MEDAPPS!</h1>
          <h2>Complete MEDICAL Solution For Everyone.</h2>
        </div>
        <div className="lp-login-container">
          <div className="lp-login-items">
            {!showOtpField ? (
              <>
                <div className="lp-top" style={{fontSize: "1.2rem", fontWeight: "600", color: "navy"}}>SIGN IN</div>
                <div className="lp-phone-div" style={{display: "flex", alignItems: "center"}}>
                  <span style={{ marginRight: "0.5rem" }}>Phone:</span>
                  <input
                    className="lp-login-input"
                    type="text"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone / Mobile"
                    maxLength={10}
                    required
                    style={{ paddingLeft: "0.2rem", letterSpacing: "7px", maxWidth: "75%", fontSize: "1.1rem" }}
                  />
                </div>
                <div className="lp-captcha-div" style={{display: "flex", alignItems: "center"}}>
                  <div style={{width: "50%", overflow: "scroll", textAlign: "left"}}>Captcha: <span style={{color: "#183873", paddingLeft: "0.1rem", letterSpacing: "2px"}}><strong>{captcha}</strong></span></div>
                  <button type="button" style={{width: "fit-content", margin: "0 auto"}} onClick={() => setCaptcha(generateCaptcha(), setEnteredCaptcha(""))}>
                    🔁
                  </button>
                  <input
                    className="lp-login-input"
                    type="text"
                    value={enteredCaptcha}
                    onChange={(e) => setEnteredCaptcha(e.target.value)}
                    placeholder="Captcha.."
                    maxLength={6}
                    style={{ width: "32%", paddingLeft: "0.2rem", letterSpacing: "5px" }}
                  />
                </div>
                <button className="lp-login-button" onClick={verifyCaptcha}>Send OTP</button>
              </>
            ) : (
              <>
              <div className="lp-top" style={{fontSize: "1.1rem", fontWeight: "bold", color: "navy"}}>SIGN IN</div>
                <div className="lp-phone-div" style={{display: "flex", alignItems: "center"}}>
                  <span style={{ marginRight: "1rem" }}>Phone:</span>
                  <span style={{
                    // marginLeft: "0.5rem",
                    borderRadius: "2px",
                    letterSpacing: "10px",
                    fontSize: "1.1rem",
                    color: "#333",
                    background: "lightgrey",
                    padding: "0.4rem 1rem"
                  }}>{phoneNumber}</span>
                </div>
                <div className="lp-bottom-row" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <div className="lp-captcha" style={{ display: "inherit", width: "35%"}}>
                    <span style={{marginRight: "1rem"}}>Captcha: </span>
                    <span>✅</span>
                  </div>
                  <div className="lp-otp" style={{display: "inherit", width: "55%", alignItems: "center"}}>
                    <span style={{marginRight: "0.5rem"}}>OTP:</span>
                    <input
                      className="lp-login-input"
                      type="text"
                      value={otp}
                      onChange={handleOTPChange}
                      placeholder="------"
                      maxLength={6}
                      required
                      style={{ width: "70%", paddingLeft: "0.3rem", letterSpacing: "5px", fontWeight: "bold", color: "#183873" }}
                    />
                  </div>
                </div>
                <button className="lp-login-button">SIGN IN</button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="lp-main-content">
        <div className="lp-image-container">
          <img src="/3336.jpg" alt="Hospital" className="lp-hospital-image" />
          <div className="lp-cards">
            <div className="lp-card">MEDICAL</div>
            <div className="lp-card">AYURVEDA</div>
            <div className="lp-card">HOMEOPATHY</div>
          </div>
        </div>
      </div>
      <footer className="lp-footer">© 2025 FinProd</footer>
    </div>
  );
};

export default LandingPage;
