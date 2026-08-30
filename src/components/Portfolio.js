import { Link } from "react-router-dom";

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
];

function Portfolio() {
	return (
		<div className="portfolio-page-container">
			<div className="portfolio-header reveal">
				<span className="section-eyebrow">Our Artistry</span>
				<h2 className="section-heading">
					Moments we have <em>created</em>
				</h2>
				<p>From intimate ceremonies to grand celebrations</p>
			</div>
			<div className="masonry-grid">
				{imageData.map(({ src, w, h }, i) => (
					<div className="masonry-item" key={i}>
						<img
							src={src}
							alt=""
							width={w}
							height={h}
							loading="lazy"
							decoding="async"
							onLoad={(e) => e.target.classList.add("loaded")}
						/>
					</div>
				))}
			</div>
			<Link to="/full-portfolio" className="portfolio-button">
				View Full Gallery
			</Link>
		</div>
	);
}

export default Portfolio;
