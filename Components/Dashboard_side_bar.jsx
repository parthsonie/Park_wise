import Logo from "../Images/ParkWise_logo_without_sub_headings.png"
import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem
} from '@coreui/react'
import "./Dashboard_side_bar.css"

function Dashboard_side_bar() {
    return (
        <div className="Side_nav_bar">
            <CSidebar className="border-end h-100">
                <CSidebarHeader className="position-relative">
                    <CSidebarBrand>
                        <img src={Logo} alt="ParkWise Logo" />
                    </CSidebarBrand>
                </CSidebarHeader>

                <CSidebarNav variant="tree">
                    <CNavItem href="#">
                        <i className="fa-solid fa-tachograph-digital"></i>
                        <h5>DashBoard</h5>
                    </CNavItem>
                    <CNavItem href="#" disabled>
                        <i className="fa-solid fa-square-parking"></i>
                        <h5>My Lots</h5>
                    </CNavItem>
                    <CNavItem href="#" disabled>
                        <i className="fa-regular fa-calendar-check"></i>
                        <h5>Bookings</h5>
                    </CNavItem>
                    <CNavItem href="#">
                        <i className="fa-solid fa-money-bill-wave"></i>
                        <h5>Earning</h5>
                    </CNavItem>
                    <CNavItem href="#" disabled>
                        <i className="fa-regular fa-user"></i>
                        <h5>Profile</h5>
                    </CNavItem>
                    <CNavItem href="#" disabled>
                        <i className="fa-solid fa-gear"></i>
                        <h5>Settings</h5>
                    </CNavItem>
                </CSidebarNav>
            </CSidebar>
        </div>
    )
}

export default Dashboard_side_bar