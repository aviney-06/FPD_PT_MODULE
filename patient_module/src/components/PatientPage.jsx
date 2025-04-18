import SidePanelInner from "./sidePanel/InnerSP";
import PatientProfile from "./PatientProfile";
import Prescription from "./Precriptions";
import TestReport from "./TestReport";
import MedicalReports from "./MedicalReports";
import MedicalHistory from "./MedicalHistory";
import InnerAptOff from './InnerAptOff'
import DoctorCard from "./DoctorCard";
import InnerAptHistoryOff from "./InnerAptHistoryOff";
import DoctorScheduleOPD from "./DoctorSchedule";


const PatientPage = () => {
    return (
        <>
            <div className="container" style={{
                display: "flex",
                width: "100%"
            }}>
                <div className="side-panel" style={{width: "20%"}}>
                    <SidePanelInner />
                </div>
                {/* <div className="main-page" style={{width: "80%"}}>
                    <InnerAptOff />
                </div> */}
                {/* <div className="main-page" style={{width: "80%"}}>
                    <DoctorCard />
                </div> */}
                {/* <div className="main-page" style={{width: "80%"}}>
                    <DoctorScheduleOPD />
                </div> */}
                {/* <div className="main-page" style={{width: "80%"}}>
                    <Prescription />
                </div> */}
                {/* <div className="main-page" style={{width: "80%"}}>
                    <TestReport />
                </div> */}
                {/* <div className="main-page" style={{width: "80%"}}>
                    <MedicalReports />
                </div> */}
                {/* <div className="main-page" style={{width: "80%"}}>
                    <MedicalHistory />
                </div> */}
                <div className="main-page" style={{width: "80%"}}>
                    <PatientProfile />
                </div>
            </div>
        </>
    );
}

export default PatientPage