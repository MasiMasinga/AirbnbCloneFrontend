// Lucide Icons
import {
    LayoutDashboard,
    Home,
    ClipboardList,
    Wallet,
} from "lucide-react";

// Astryx
import { SideNavSection } from "@astryxdesign/core";

// Components
import NavLinkItem from "../components/NavLinkItem";

const HostDrawerLinkList = () => {
    return (
        <SideNavSection title="Hosting">
            <NavLinkItem
                to="/host"
                label="Today"
                icon={LayoutDashboard}
                exact
            />
            <NavLinkItem to="/host/listings" label="Listings" icon={Home} />
            <NavLinkItem
                to="/host/reservations"
                label="Reservations"
                icon={ClipboardList}
            />
            <NavLinkItem to="/host/payouts" label="Payouts" icon={Wallet} />
        </SideNavSection>
    );
};

export default HostDrawerLinkList;
