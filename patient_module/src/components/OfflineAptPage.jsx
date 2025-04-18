import SidePanelOuter from "./sidePanel/OuterSP";
import AppointmentForm from "./AptFormOuter";
import NavBar from "./NavBar";

const OfflineAptPage = () => {
    return (
        <>
            <div className="container" style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                margin: "1.2rem 1.2rem 0 1.2rem",
                height: "97vh",
                // boxSizing: "border-box"
                }}>
                <div className="sp-left" style={{
                    width: "20%"
                }}>
                    <SidePanelOuter />
                </div>
                <div className="mid-container" style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "fit-content"
                }}>
                    <div className="nav-container" style={{width: "100%"}}>
                        <NavBar />
                    </div>
                    <div className="apt-form">
                        <AppointmentForm />
                    </div>
                </div>
                <div className="adv-right" style={{
                    width: "20%",
                    height: "100%",
                    // backgroundColor: "#333",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1%"
                }}>
                    <div className="brand-logo" style={{
                        height: "9%",
                        width: "90%",
                        backgroundColor: "#E8EAE5",
                        borderRadius: "8px"
                    }}></div>
                    <div className="ad-sec-one" style={{
                        height: "25%",
                        width: "90%",
                        backgroundColor: "#E8EAE5",
                        borderRadius: "8px"
                    }}></div>
                    <div className="ad-sec-two" style={{
                        height: "55%",
                        width: "90%",
                        backgroundColor: "#E8EAE5",
                        borderRadius: "8px"
                    }}></div>
                </div>
            </div>
        </>
    );
}

export default OfflineAptPage