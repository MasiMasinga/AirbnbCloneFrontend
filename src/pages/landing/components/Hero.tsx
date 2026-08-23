import type { CSSProperties } from "react";

// Astryx
import { VStack, Layout, LayoutContent } from "@astryxdesign/core/Layout";
import { Text, Heading } from "@astryxdesign/core/Text";

// Components
import GalleryCard from "./GalleryCard";

// Images
import DenisMustafeav from "../../../assets/pexels-denis-mustafaev.jpg";
import EfremEfre from "../../../assets/pexels-efrem-efre.jpg";
import JonathanBorba from "../../../assets/pexels-jonathanborba.jpg";
import JoshSorenson from "../../../assets/pexels-joshsorenson.jpg";
import Tatianaa from "../../../assets/pexels-tatianaa.jpg";

const containerStyle: CSSProperties = {
    containerType: "inline-size",
    containerName: "gallery",
};

interface GalleryImage {
    src: string;
    title: string;
}

const IMAGES: GalleryImage[] = [
    {
        src: DenisMustafeav,
        title: "Going places",
    },
    {
        src: EfremEfre,
        title: "Making memories",
    },
    {
        src: JonathanBorba,
        title: "Being free",
    },
    {
        src: JoshSorenson,
        title: "Getting it done",
    },
    {
        src: Tatianaa,
        title: "Finding calm",
    },
];

function Hero() {
    return (
        <Layout
            height="fill"
            contentWidth={1400}
            content={
                <LayoutContent padding={6}>
                    <VStack gap={6} style={containerStyle}>
                        <VStack gap={2} hAlign="center">
                            <Heading level={1} justify="center">
                                Discover the world&apos;s most beautiful places
                            </Heading>
                            <Text type="body" justify="center">
                                Explore the world with us and find your next
                                adventure. From breathtaking landscapes to
                                vibrant cities, we&apos;ve got you covered.
                            </Text>
                        </VStack>
                        <div className="mixed-gallery-grid">
                            <GalleryCard
                                image={IMAGES[0]}
                                ratio={3 / 1}
                                className="mixed-gallery-hero"
                            />
                            <GalleryCard image={IMAGES[2]} ratio={3 / 2} />
                            <GalleryCard image={IMAGES[3]} ratio={3 / 2} />
                            <GalleryCard image={IMAGES[4]} ratio={3 / 2} />
                            <GalleryCard image={IMAGES[1]} ratio={3 / 2} />
                        </div>
                    </VStack>
                </LayoutContent>
            }
        />
    );
}

export default Hero;
