import React from "react";
import Carousel from 'better-react-carousel';
import { useOutletContext } from "react-router-dom";

export default function Gallery({aboutImages}) {
    const data = useOutletContext();
    const imageData = data.aboutPageCollection.items[0].aboutGalleryCollection.items;

    return (
        // documentation: https://reactjsexample.com/react-responsive-carousel-component-with-grid-layout-to-easily-create-a-carousel-like-photo-gallery/
        <div width="40%">
            <Carousel cols={2} rows={1} gap={10} loop>
                {imageData ? (
                    imageData.map(image => (
                        <Carousel.Item key={image.title}>
                            <img width="100%" height="auto" src={image.url} alt={image.description} />
                        </Carousel.Item>
                    ))
                ) : ""}
            </Carousel>
        </div>
    )
}