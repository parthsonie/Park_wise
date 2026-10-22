import "@coreui/coreui/dist/css/coreui.min.css";
import "./Dashboard.css"
import Dashboard_side_bar from "../../Components/Dashboard_side_bar";

function Dashboard() {
    return (
        <div className="Main_pg">
            <Dashboard_side_bar/>
            <div className="Search_pg">
                <div className="upper_nav">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="profile_access">
                                <img src="" alt="" />
                                <h5></h5>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="dashboard_content">
                    <h3>Dashboard</h3>
                    <div className="Card_container">
                        <div className="card">
                            <h5>Total Slots</h5>
                            <h6>value</h6>
                        </div>
                        <div className="card">
                            <h5>Available</h5>
                            <h6>value</h6>
                        </div>
                        <div className="card">
                            <h5>Booked</h5>
                            <h6>value</h6>
                        </div>
                    </div>
                    <div className="recent_bookings">
                        <h3>Recent bookings</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard