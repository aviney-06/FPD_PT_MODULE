import AppointmentHistory from "./AppointmentHistory";
import AdsRight from "./AdsRight";

const InnerAptHistoryOff = () => {
    return (
        <>
            <div className="container" style={{
                display: "flex",
                width: "100%"
            }}>
                <div className="main-page" style={{width: "80%"}}>
                    <AppointmentHistory />
                </div>
                <div className="right-ads" style={{width: "20%", backgroundColor: "#E8EAE5"}}>
                    <AdsRight />
                </div>
            </div>
        </>
    );
}

export default InnerAptHistoryOff