import AppointmentForm from "./AptFormInner";
import AdsRight from "./AdsRight";

const InnerAptOff = () => {
    return (
        <>
            <div className="container" style={{
                display: "flex",
                width: "100%"
            }}>
                <div className="main-page" style={{width: "80%"}}>
                    <AppointmentForm />
                </div>
                <div className="right-ads" style={{width: "20%", backgroundColor: "#E8EAE5"}}>
                    <AdsRight />
                </div>
            </div>
        </>
    );
}

export default InnerAptOff