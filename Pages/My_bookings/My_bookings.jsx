import "./My_bookings.css"
import Side_bar from "../../Components/Side_bar"
import Bookings from "../../Data/Bookings.json"

function My_bookings() {
    return (
        <div className="Main_pg">
            <Side_bar />
            <div className="Main_pg_content">
                <h3>My Bookings</h3>
                <div className="upcoming_bookings">
                    {Bookings.map((val)=>(
                        <div className="entry_cards">
                            <div className="info">
                                <div className="lot_img">
                                    <img src="" alt="" />
                                </div>
                                <div className="lot_text">
                                    <h4>{val.parkingName}</h4>
                                    <h6>Slot : {val.slotNumber}</h6>
                                    <h6>{val.bookingDate}, {val.startTime} - {val.endTime}</h6>
                                </div>
                            </div>
                            <div className="price_and_status">
                                <h5>${val.amount}</h5>
                                <div className="price_label">
                                    <h5>{val.paymentStatus}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="past_bookings">

                </div>
            </div>
        </div>
    )
}

export default My_bookings