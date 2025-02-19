"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
	{ imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
	{ imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
	{ imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
	{ imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
	{ imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];

const HeroCarousel = () => {
	return (
		<div>
			<Carousel
				autoPlay
				infiniteLoop
				interval={2000}
				showThumbs={false}
				showArrows={false}
				showStatus={false}
			>
				{heroImages.map((image) => (
					<Image
						key={image.alt}
						src={image.imgUrl}
						alt={image.alt}
						width={480}
						height={480}
						className="object-contain"
					/>
				))}
			</Carousel>
		</div>
	);
};

export default HeroCarousel;
