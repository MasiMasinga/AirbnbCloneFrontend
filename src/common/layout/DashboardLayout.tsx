// React Router Dom
import { Outlet, useLocation } from "react-router";

// Astryx
import { AppShell, SideNav, TopNav, TopNavHeading } from "@astryxdesign/core";

// Components
import GuestDrawerLinkList from "./containers/GuestDrawerLinkList";
import HostDrawerLinkList from "./containers/HostDrawerLinkList";

const DashboardLayout = () => {
    const { pathname } = useLocation();
    const isHostMode = pathname.startsWith("/host");

    return (
        <AppShell
            height="fill"
            contentPadding={4}
            topNav={
                <TopNav
                    heading={<TopNavHeading heading="AirbnbClone" headingHref="/" />}
                />
            }
            sideNav={
                <SideNav>
                    {isHostMode ? <HostDrawerLinkList /> : <GuestDrawerLinkList />}
                </SideNav>
            }
        >
            <Outlet />
        </AppShell>
    );
};

export default DashboardLayout;