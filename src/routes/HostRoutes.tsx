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
        path: "/host",
        element: <AsyncHostOverview />
    },
    {
        path: "/host/listings",
        element: <AsyncHostListings />
    },
    {
        path: "/host/bookings",
        element: <AsyncHostBookings />  
    },
    {
        path: "/host/account",
        element: <AsyncHostAccount />
    },
    {
        path: "/host/payouts",
        element: <AsyncHostPayouts />
    },
    {
        path: "/host/reservations",
        element: <AsyncHostReservations />
    }
];

export default AdminRoutes;