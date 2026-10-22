import Logo from "../Images/ParkWise_logo_without_sub_headings.png"
import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem
} from '@coreui/react'
import "./Side_bar.css"

function Side_bar() {
    return (
        <div className="Side_nav_bar">
            <CSidebar className="border-end h-100">
                <CSidebarHeader className="position-relative">
                    <CSidebarBrand>
                        <img src={Logo} alt="" />
                    </CSidebarBrand>
                </CSidebarHeader>
                <CSidebarNav variant="tree">
                    <CNavItem href="#">
                        <i className="fa-regular fa-house"></i>
                        <h5>Home</h5>
                    </CNavItem>
                    <CNavItem disabled href="#">
                        <i className="fa-regular fa-calendar-days"></i>
                        <h5>Bookings</h5>
                    </CNavItem>
                    <CNavItem disabled href="#">
                        <i className="fa-regular fa-user"></i>
                        <h5>User</h5>
                    </CNavItem>
                </CSidebarNav>
            </CSidebar>
        </div>
    )
}

export default Side_bar