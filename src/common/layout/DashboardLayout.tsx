// React Router Dom
import { Outlet } from "react-router";

// Components

const DashboardLayout = () => {
    return (
        <div>
            <div>Main App Bar</div>

            <div>Dashboard Side Bar</div>

            <div
                style={{
                    flexGrow: 1,
                    paddingTop: 6,
                    width: "100%",
                    minHeight: "100vh",
                    position: "relative",
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
