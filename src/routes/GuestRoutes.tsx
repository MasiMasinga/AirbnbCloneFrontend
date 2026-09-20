import { lazy } from "react";

// Guest Routes
const AsyncGuest = lazy(() => import("../pages/guest"));
const AsyncGuestSearch = lazy(() => import("../pages/guest/search"));
const AsyncGuestAccount = lazy(() => import("../pages/guest/account"));
const AsyncGuestWishlists = lazy(() => import("../pages/guest/wishlists"));
const AsyncGuestTrips = lazy(() => import("../pages/guest/trips"));

const GuestRoutes = [
    {
        path: "guest",
        element: <AsyncGuest />
    },
    {
        path: "search",
        element: <AsyncGuestSearch />
    },
    {
        path: "account",
        element: <AsyncGuestAccount />
    },
    {
        path: "wishlists",
        element: <AsyncGuestWishlists />
    },
    {
        path: "trips",
        element: <AsyncGuestTrips />
    }
]

export default GuestRoutes;