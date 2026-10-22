import Side_bar from "../../Components/Side_bar"
import "./Home_search_pg.css"
import Lots from "../../Data/Parking_lot.json"


function Home_search_pg() {
    return (
        <div className="Main_pg">
            <Side_bar/>
            <div className="Search_pg">
                <div className="upper_nav">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <form className="navbar-form navbar-left" action="/action_page.php">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <i className="fa-regular fa-bell"></i>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            <div className="profile_access">
                                <img src="" alt="" />
                                <h5></h5>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="Search">
                    <div className="search_Bar">
                        <h2>Find Parkings Near You</h2>
                    <h4>Search , Compare and book the best parking slots</h4>
                    <input type="text" onChange={(e)=> e.target.value}/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="get_location">
                        <button><i class="fa-solid fa-location-crosshairs"></i> Use My Location</button>
                    </div>
                </div>
                <div className="Search_results">
                    {Lots.map((val)=>(
                        <div>
                            <img src="" alt="" />
                            <h4>{val.name}</h4>
                            <p>
                                <span>{val.distance}</span>
                                <span>{val.estimatedTime}</span>
                            </p>
                            <h6>{val.rating} ({val.reviews})</h6>
                            <h4>${val.pricePerHour}/hr</h4>
                            <div className="available_slots">
                                <h4>Available Slots: {val.availableSlots}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home_search_pg