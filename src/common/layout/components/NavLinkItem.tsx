// React Router
import { useLocation } from "react-router";

// Astryx
import { SideNavItem, type SideNavItemProps } from "@astryxdesign/core";

type NavLinkItemProps = {
    to: string;
    label: string;
    icon: SideNavItemProps["icon"];
    endContent?: SideNavItemProps["endContent"];
    exact?: boolean;
};

const NavLinkItem = ({
    to,
    label,
    icon,
    endContent,
    exact = false,
}: NavLinkItemProps) => {
    const { pathname } = useLocation();
    const isSelected = exact ? pathname === to : pathname.startsWith(to);

    return (
        <SideNavItem
            label={label}
            icon={icon}
            href={to}
            isSelected={isSelected}
            endContent={endContent}
        />
    );
};

export default NavLinkItem;
