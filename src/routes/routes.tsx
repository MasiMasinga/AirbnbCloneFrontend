// React Router
import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/sign-up";
import Guest from "../pages/guest";
import Listings from "../pages/guest/listings";
import Review from "../pages/guest/review";
import Support from "../pages/guest/support";
import GuestProfile from "../pages/guest/profile";
import OwnerProfile from "../pages/owner/profile";
import Bookings from "../pages/owner/bookings";

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/guest" element={<Guest />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/review" element={<Review />} />
                <Route path="/support" element={<Support />} />
                <Route path="/booking" element={<Bookings />} />
                <Route path="/guest/profile" element={<GuestProfile />} />
                <Route path="/owner/profile" element={<OwnerProfile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PageRoutes;
