// React Router
import { Outlet, useLocation } from "react-router";

// Astryx
import {
    AppShell,
    SideNav,
    TopNav,
    TopNavHeading,
    TopNavMenu,
} from "@astryxdesign/core";

// Lucide Icons
import { UserCircleIcon, LogOut } from "lucide-react";

// Components
import GuestDrawerLinkList from "./containers/GuestDrawerLinkList";
import HostDrawerLinkList from "./containers/HostDrawerLinkList";

// Images
import AirbnbLogo from "../../assets/logo_airbnb.webp";

const DashboardLayout = () => {
    const { pathname } = useLocation();
    const isHostMode = pathname.startsWith("/host");

    return (
        <AppShell
            height="fill"
            contentPadding={4}
            topNav={
                <TopNav
                    heading={
                        <TopNavHeading
                            headingHref="/"
                            logo={
                                <img
                                    src={AirbnbLogo}
                                    alt="Airbnb Logo"
                                    style={{ height: "25px" }}
                                />
                            }
                        />
                    }
                    endContent={
                        <TopNavMenu
                            label="Profile"
                            items={[
                                {
                                    title: "Account",
                                    icon: <UserCircleIcon />,
                                    href: isHostMode
                                        ? "/host/account"
                                        : "/guest/account",
                                },
                                {
                                    title: "Logout",
                                    icon: <LogOut />,
                                    href: "/login",
                                },
                            ]}
                        />
                    }
                />
            }
            sideNav={
                <SideNav>
                    {isHostMode ? (
                        <HostDrawerLinkList />
                    ) : (
                        <GuestDrawerLinkList />
                    )}
                </SideNav>
            }
        >
            <Outlet />
        </AppShell>
    );
};

export default DashboardLayout;
