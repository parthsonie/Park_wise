import parkingSlots from "../../Data/Parking_slots.json"
import "./Parking_details_pg.css"
import Side_bar from "../../Components/Side_bar"


function Parking_details_pg() {
    return (
        <div className="Main_pg">
            <Side_bar/>
            <div className="Page_content">
                <div className="upper_nav">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <form className="navbar-form navbar-left" action="/action_page.php">
                                <button type="submit" className="btn btn-default"><i className="fa-solid fa-arrow-left"></i></button>
                                <h5>Parking Details</h5>
                            </form>
                            <div className="profile_access">
                                <img src="" alt="" />
                                <h5></h5>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="Parking_lot_details">
                    <img src="/parking-lot.jpg" alt="Parking Lot" />

                    <h3 className="name">City Mall Parking</h3>

                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        {" "} 0.8 km • 5 mins
                    </p>

                    <span className="ratings">
                        ⭐ 4.5 (120 reviews)
                    </span>
                </div>
                <div className="Slot_and_pricings">
                    <div className="Slot_access">
                        <h5>Available Slots</h5>
                        <div>
                            <span>
                                <div></div>
                                <p>Available</p>
                            </span>
                            <span>
                                <div></div>
                                <p>Reserved</p>
                            </span>
                            <span>
                                <div></div>
                                <p>Booked</p>
                            </span>
                        </div>
                        <div className="slot">
                            {parkingSlots.map((Slots)=>(
                                <div className={Slots.status} key={Slots.id}>
                                    <button key={Slots.id} disabled={Slots.status != "Available"}>{Slots.slotNumber}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="Price_card">
                        <h5>Parking Charges</h5>
                        <div className="charges">
                            <h5>1 Hour</h5>
                            <h5>50$</h5>
                        </div>
                        <div className="charges">
                            <h5>2 Hour</h5>
                            <h5>80$</h5>
                        </div>
                        <div className="charges">
                            <h5>1 Day</h5>
                            <h5>100$</h5>
                        </div>
                        <div className="Vechile_type">
                            <button className="Vechile">
                                <i className="fa-solid fa-car"></i>
                                <h6>Car</h6>
                            </button>
                            <button className="Vechile">
                                <i className="fa-solid fa-motorcycle"></i>
                                <h6>Bike</h6>
                            </button>
                        </div>
                    </div>
                    <div className="btn">
                        <button>Book Slot</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parking_details_pg