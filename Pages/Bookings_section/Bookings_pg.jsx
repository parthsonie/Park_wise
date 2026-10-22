import "@coreui/coreui/dist/css/coreui.min.css";
import "./Bookings_pg.css";
import Side_bar from "../../Components/Side_bar.jsx";

function Bookings_pg() {
    return (
        <div className="Main_pg">
            <Side_bar />
            <div className="Main_pg_content">
                <div className="upper_nav">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <form className="navbar-form navbar-left" action="/action_page.php">
                                <button className="btn btn-default"><i className="fa-solid fa-arrow-left"></i></button>
                                <h5>Parking Details</h5>
                            </form>
                            <div className="profile_access">
                                <img src="" alt="" />
                                <h5></h5>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="Parking_lot_detials">
                    <div>
                        <img src="" alt="x" />
                    </div>
                    <div>
                        <h5>Name</h5>
                        <h6>distance and time</h6>
                        <h6>ratings and other</h6>
                    </div>
                </div>
                <div className="Final_payment_card">
                    <div className="duration_container">
                        <div className="Charges_card">
                            <h6>1 Hour</h6>
                            <h5>40$</h5>
                        </div>
                        <div className="Charges_card">
                            <h6>2 Hour</h6>
                            <h5>70$</h5>
                        </div>
                        <div className="Charges_card">
                            <h6>1 Day</h6>
                            <h5>100$</h5>
                        </div>
                    </div>
                    <div className="total_amount">
                        <span>
                            <h5>Total Amount</h5>
                            <h6>60$</h6>
                        </span>
                    </div>
                    <div className="Payment_mode">
                        <div>
                            <input type="radio" name="Payment_mode" value="UPI" />
                            <label>UPI</label>
                            <input type="radio" name="Payment_mode" value="Credit_card" />
                            <label>Credit Card</label>
                            <input type="radio" name="Payment_mode" value="Cash" />
                            <label>Cash</label>
                        </div>
                        <button>Proceed to Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bookings_pg;
