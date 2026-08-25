// Astryx
import { HStack } from "@astryxdesign/core/Stack";
import { Button } from "@astryxdesign/core/Button";

// Image
import AirbnbLogo from "../../../assets/logo_airbnb.webp";

const Navbar = () => {
    return (
        <HStack hAlign="between" padding={4} paddingInline={4}>
            <img
                src={AirbnbLogo}
                alt="Airbnb Logo"
                style={{ height: "20px" }}
            />
            <Button
                label="Get Started"
                variant="destructive"
                onClick={() => {
                    window.location.href = "/sign-up";
                }}
            />
        </HStack>
    );
};

export default Navbar;
