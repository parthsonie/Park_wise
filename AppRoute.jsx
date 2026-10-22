
import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

// Import your pages
import Home_search_pg from "./Pages/Home_search_pg/Home_search_pg.jsx";
import Parking_details_pg from "./Pages/Parking_details_section/Parking_details_pg.jsx"
import Bookings_pg from "./Pages/Bookings_section/Bookings_pg.jsx"
import Profile_settings_pg from "./Pages/Profile_settings_pg/Profile_settings_pg.jsx";
import Dashboard from "./Pages/Lot_owner_dasboard/Dashboard.jsx";
import My_bookings from "./Pages/My_bookings/My_bookings.jsx";

function AppRoute() {
    return (
        <Router>
            <Routes>

                {/* Default Page */}
                <Route
                    path="/"
                    element={<Navigate to="/home" replace />}
                />

                {/* User Pages */}
                <Route
                    path="/home"
                    element={<Home_search_pg />}
                />

                <Route
                    path="/parking-details"
                    element={<Parking_details_pg />}
                />

                <Route
                    path="/bookings"
                    element={<Bookings_pg />}
                />

                <Route
                    path="/mybookings"
                    element={<My_bookings />}
                />

                <Route
                    path="/profile"
                    element={<Profile_settings_pg />}
                />

                {/* Parking Owner Dashboard */}
                <Route
                    path="/owner/dashboard"
                    element={<Dashboard />}
                />

                {/* Invalid URL */}
                <Route
                    path="*"
                    element={<h2>404 - Page Not Found</h2>}
                />

            </Routes>
        </Router>
    );
}

export default AppRoute;
