// Asrtyx
import { VStack } from "@astryxdesign/core/Layout";
import { Grid } from "@astryxdesign/core/Grid";
import { Center } from "@astryxdesign/core/Center";
import { Card } from "@astryxdesign/core/Card";

// React Router
import { useLocation } from "react-router";

// Utils
import { COLUMN_MIN_WIDTH } from "../../../common/utils/constants";

// Image
import MosqueImage from "../../../assets/mosque.jpg";
import BrazilianBeachImage from "../../../assets/pexels-alicedecasttro-10849497.jpg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    return (
        <Center axis="both" height="100vh" padding={6}>
            <VStack gap={4} width="100%">
                <div
                    style={{
                        width: "100%",
                        maxWidth: 1000,
                        marginInline: "auto",
                    }}
                >
                    <Card padding={0} width="100%">
                        <Grid
                            columns={{
                                minWidth: COLUMN_MIN_WIDTH,
                                repeat: "fit",
                            }}
                            gap={8}
                            align="stretch"
                            className="login-split-grid"
                        >
                            {children}
                            <div className="login-split-image">
                                <Card
                                    variant="transparent"
                                    padding={0}
                                    width="100%"
                                    height="100%"
                                >
                                    <img
                                        className="login-split-image"
                                        src={
                                            location.pathname === "/login"
                                                ? BrazilianBeachImage
                                                : MosqueImage
                                        }
                                        alt={
                                            location.pathname === "/login"
                                                ? "Brazilian Beach"
                                                : "Mosque"
                                        }
                                    />
                                </Card>
                            </div>
                        </Grid>
                    </Card>
                </div>
            </VStack>
        </Center>
    );
};

export default AuthLayout;
