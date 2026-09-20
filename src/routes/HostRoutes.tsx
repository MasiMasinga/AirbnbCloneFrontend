import { lazy } from "react";

// Admin Routes
const AsyncHostOverview = lazy(() => import("../pages/host"));
const AsyncHostListings = lazy(() => import("../pages/host/listings"));
const AsyncHostBookings = lazy(() => import("../pages/host/reservations"));
const AsyncHostAccount = lazy(() => import("../pages/host/account"));
const AsyncHostPayouts = lazy(() => import("../pages/host/payouts"));
const AsyncHostReservations = lazy(() => import("../pages/host/reservations"));

const AdminRoutes = [
    {
        path: "host",
        element: <AsyncHostOverview />
    },
    {
        path: "listings",
        element: <AsyncHostListings />
    },
    {
        path: "bookings",
        element: <AsyncHostBookings />  
    },
    {
        path: "account",
        element: <AsyncHostAccount />
    },
    {
        path: "payouts",
        element: <AsyncHostPayouts />
    },
    {
        path: "reservations",
        element: <AsyncHostReservations />
    }
];

export default AdminRoutes;