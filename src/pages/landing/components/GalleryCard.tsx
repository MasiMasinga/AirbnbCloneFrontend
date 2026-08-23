import type { CSSProperties } from "react";

// Astryx
import { AspectRatio } from "@astryxdesign/core/AspectRatio";

interface GalleryImage {
    src: string;
    title: string;
}

const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
};

const clipStyle: CSSProperties = {
    borderRadius: "var(--radius-element)",
};

function GalleryCard({
    image,
    ratio,
    className,
}: {
    image: GalleryImage;
    ratio: number;
    className?: string;
}) {
    return (
        <AspectRatio ratio={ratio} className={className} style={clipStyle}>
            <img src={image.src} alt={image.title} style={imgStyle} />
        </AspectRatio>
    );
}

export default GalleryCard;