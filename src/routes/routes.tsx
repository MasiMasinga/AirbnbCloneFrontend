import { Suspense } from "react";

// React Router
import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/sign-up";
import Landing from "../pages/landing";

// Routes
import HostRoutes from "./HostRoutes";
import GuestRoutes from "./GuestRoutes";

// Context
import { useAuth } from "../common/contexts/AuthContext";

// Components
import DashboardLayout from "../common/layout/DashboardLayout";
import PageNotFound from "../common/router/PageNotFound";
import RequireAuth from "../common/router/RequireAuth";

const generateRouteComponents = (routes: any[]) => (
    <>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={
                    <Suspense
                        fallback={
                            <div>
                                <p>Loading...</p>
                            </div>
                        }
                    >
                        <RequireAuth>{route.element}</RequireAuth>
                    </Suspense>
                }
            />
        ))}
    </>
);

const PageRoutes = () => {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route element={<DashboardLayout />}>
                    {user?.userRole === "host" &&
                        generateRouteComponents(HostRoutes)}
                    {user?.userRole === "guest" &&
                        generateRouteComponents(GuestRoutes)}
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PageRoutes;
