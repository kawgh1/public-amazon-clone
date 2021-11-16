import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            {/* floating div for gradient fade of the carousel */}
            <div className="absolute w-full h-5 sm:h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img
                        loading="lazy"
                        src="https://links.papareact.com/gi1"
                        alt="Graham Norton Book Club"
                    />
                </div>

                <div>
                    <img
                        loading="lazy"
                        src="https://links.papareact.com/6ff"
                        alt="Prime Video"
                    />
                </div>

                <div>
                    <img
                        loading="lazy"
                        src="https://links.papareact.com/7ma"
                        alt="Amazon Music"
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
