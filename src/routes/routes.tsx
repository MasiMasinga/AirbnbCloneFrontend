// React Router
import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/sign-up";
import Guest from "../pages/guest";
import GuestAccount from "../pages/guest/account";
import Search from "../pages/guest/search";
import Wishlists from "../pages/guest/wishlists";
import Trips from "../pages/guest/trips";
import Host from "../pages/host";
import Listings from "../pages/host/listings";
import HostAccount from "../pages/host/account";
import Bookings from "../pages/host/reservations";
import Landing from "../pages/landing";
import Reservations from "../pages/host/reservations";
import Payouts from "../pages/host/payouts";

// Components
import DashboardLayout from "../common/layout/DashboardLayout";
import PageNotFound from "../common/components/PageNotFound";

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<PageNotFound />} />
                <Route element={<DashboardLayout />}>
                    <Route path="/guest" element={<Guest />} />
                    <Route path="/guest/search" element={<Search />} />
                    <Route path="/guest/account" element={<GuestAccount />} />
                    <Route path="/guest/wishlists" element={<Wishlists />} />
                    <Route path="/guest/trips" element={<Trips />} />

                    <Route path="/host" element={<Host />} />
                    <Route path="/host/listings" element={<Listings />} />
                    <Route path="/host/bookings" element={<Bookings />} />
                    <Route path="/host/account" element={<HostAccount />} />
                    <Route path="/host/payouts" element={<Payouts />} />
                    <Route
                        path="/host/reservations"
                        element={<Reservations />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default PageRoutes;
