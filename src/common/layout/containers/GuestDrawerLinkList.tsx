// Lucide Icons
import {
    Home,
    Search,
    Heart,
    Briefcase,
    User,
} from "lucide-react";

// Astryx
import { SideNavSection } from "@astryxdesign/core";

// Components
import NavLinkItem from "../components/NavLinkItem";

const GuestDrawerLinkList = () => {
    return (
        <SideNavSection title="Explore">
            <NavLinkItem to="/guest" label="Home" icon={Home} exact />
            <NavLinkItem to="/guest/search" label="Search stays" icon={Search} />
            <NavLinkItem to="/guest/wishlists" label="Wishlists" icon={Heart} />
            <NavLinkItem to="/guest/trips" label="Trips" icon={Briefcase} />
            <NavLinkItem to="/guest/account" label="Account" icon={User} />
        </SideNavSection>
    );
};

export default GuestDrawerLinkList;
