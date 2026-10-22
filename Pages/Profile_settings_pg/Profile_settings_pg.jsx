import Logo from "../../Images/ParkWise_Blue_Pin_Logo.png";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
    CNavItem,
} from "@coreui/react";
import "./Profile_settings_pg.css"
import Side_bar from "../../Components/Side_bar";

function Profile_settings_pg() {
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
                            </form>
                            <div className="profile_access">
                                <img src="" alt="" />
                                <h5></h5>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="Profile_pg">
                    <h2>Profile/Settings</h2>
                    <p>Manage your account informations, preferences and settings</p>
                    <div className="inner_container">
                        <div className="inner_side_bar">
                            <CSidebar className="border-end h-100">
                                <CSidebarNav variant="tree">
                                    <CNavItem href="#">
                                        <i className="fa-regular fa-user"></i>
                                        <h5>Profile</h5>
                                        <i className="fa-solid fa-angle-right"></i>
                                    </CNavItem>
                                    <CNavItem href="#" disabled>
                                        <i className="fa-regular fa-calendar-days"></i>
                                        <h5>My Bookings</h5>
                                        <i className="fa-solid fa-angle-right"></i>
                                    </CNavItem>
                                    <CNavItem href="#" disabled>
                                        <i className="fa-regular fa-credit-card"></i>
                                        <h5>Payment Methods</h5>
                                        <i className="fa-solid fa-angle-right"></i>
                                    </CNavItem>
                                    <CNavItem href="#" disabled>
                                        <i className="fa-regular fa-bell"></i>
                                        <h5>Notifications</h5>
                                        <i className="fa-solid fa-angle-right"></i>
                                    </CNavItem>
                                    <CNavItem href="#" disabled>
                                        <i className="fa-regular fa-circle-question"></i>
                                        <h5>Help & Support</h5>
                                        <i className="fa-solid fa-angle-right"></i>
                                    </CNavItem>
                                    <CNavItem href="#" disabled>
                                        <i className="fa-solid fa-gear"></i>
                                        <h5>Settings</h5>
                                        <i className="fa-solid fa-angle-right"></i>
                                    </CNavItem>
                                    <CNavItem href="#" disabled>
                                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                        <h5>Logout</h5>
                                    </CNavItem>
                                </CSidebarNav>
                            </CSidebar>
                        </div>
                        <div className="section_content">
                            X
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile_settings_pg