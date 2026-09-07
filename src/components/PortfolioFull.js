import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "./Lightbox";

const imageData = [
	{ src: "/images/portfolio/IMG_4113.JPG", w: 1113, h: 1600 },
	{ src: "/images/portfolio/IMG_5558.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6516.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6518.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6524.JPG", w: 1600, h: 1065 },
	{ src: "/images/portfolio/IMG_6527.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6538.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6542.jpg", w: 1600, h: 1067 },
	{ src: "/images/portfolio/IMG_6544.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6548.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6612.JPG", w: 1064, h: 1600 },
	{ src: "/images/portfolio/IMG_8411.JPG", w: 1066, h: 1600 },
	{ src: "/images/portfolio/IMG_8636.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_8666.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_8771.JPG", w: 1066, h: 1600 },
	{ src: "/images/portfolio/IMG_9534.JPG", w: 1200, h: 1600 },
	{ src: "/images/portfolio/IMG_9721.JPG", w: 1065, h: 1600 },
	{ src: "/images/portfolio/IMG_0099.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_0149.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_0150.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_0286.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/EverAfter1841.jpg", w: 1600, h: 1067 },
	{ src: "/images/portfolio/EverAfter2391.jpg", w: 1067, h: 1600 },
];

const EAGER_COUNT = 9;

function PortfolioFull() {
	const [lightboxIndex, setLightboxIndex] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="portfolio-page-container full-page">
			<div className="page-nav">
				<Link to="/portfolio" className="back-link" style={{ color: "var(--sage)" }}>
					← Back to Home
				</Link>
			</div>
			<div className="portfolio-header reveal">
				<h1 className="section-heading">
					The Full <em>Collection</em>
				</h1>
				<p>Every arrangement, every moment, every bloom</p>
			</div>
			<div className="masonry-grid">
				{imageData.map(({ src, w, h }, index) => (
					<button
						type="button"
						className="masonry-item"
						key={index}
						onClick={() => setLightboxIndex(index)}
						aria-label="View full image"
					>
						<img
							src={src}
							alt=""
							width={w}
							height={h}
							loading={index < EAGER_COUNT ? "eager" : "lazy"}
							fetchpriority={index < EAGER_COUNT ? "high" : "auto"}
							decoding="async"
							onLoad={(e) => e.target.classList.add("loaded")}
						/>
					</button>
				))}
			</div>
			{lightboxIndex !== null && (
				<Lightbox
					images={imageData}
					startIndex={lightboxIndex}
					onClose={() => setLightboxIndex(null)}
				/>
			)}
		</div>
	);
}

export default PortfolioFull;
