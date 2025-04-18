import SidePanelInner from "./sidePanel/InnerSP";
import DoctorCard from "./DoctorCard";
import AppointmentHistory from "./AppointmentHistory";

const DoctorsPageOnline = () => {
    return (
        <>
            <div className="container" style={{
                display: "flex",
                width: "100%"
            }}>
                <div className="side-panel" style={{width: "20%"}}>
                    <SidePanelInner />
                </div>
                <div className="main-page" style={{width: "80%"}}>
                    <DoctorCard />
                </div>

                {/* <div className="main-page" style={{width: "80%"}}>
                    <AppointmentHistory />
                </div> */}
            </div>
        </>
    );
}

export default DoctorsPageOnline