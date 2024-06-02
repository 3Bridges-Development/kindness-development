import React from "react";
import Carousel from 'better-react-carousel';

export default function Gallery({aboutImages}) {
    return (
        // documentation: https://reactjsexample.com/react-responsive-carousel-component-with-grid-layout-to-easily-create-a-carousel-like-photo-gallery/
        <div width="40%">
            <Carousel cols={2} rows={1} gap={10} loop>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=1" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=2" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=3" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                {/* anything you want to show in the grid */}
            </Carousel.Item>
            {/* ... */}
            </Carousel>
                {/* {aboutImages.data.aboutGalleryImagesCollection.items.length !== 0  ? (
                    <section className="flex flex-wrap justify-center w-4/5 pb-16 pt-8">
                        <Carousel cols={3} rows={1} gap={20} loop>
                            {aboutImages.data.aboutGalleryImagesCollection.items.length !== 0 ? aboutImages.data.aboutGalleryImagesCollection.items[0].galleryImagesCollection.items.map((image) => (
                                <Carousel.Item className="flex" style={{alignItems: "middle"}}>
                                    <img width={image.width} height={image.height} src={image.url} alt={image.title} />
                                </Carousel.Item>
                            )) : null}
                        </Carousel>
                    </section>

                ) : null} */}
        </div>
    )
}