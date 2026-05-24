import { Link } from "react-router-dom";

const imageData = [
	"/images/portfolio/IMG_4113.JPG",
	"/images/portfolio/IMG_5558.JPG",
	"/images/portfolio/IMG_6516.JPG",
	"/images/portfolio/IMG_6518.JPG",
	"/images/portfolio/IMG_6524.JPG",
	"/images/portfolio/IMG_6527.JPG",
	"/images/portfolio/IMG_6538.jpg",
	"/images/portfolio/IMG_6542.jpg",
	"/images/portfolio/IMG_6544.JPG",
	"/images/portfolio/IMG_6548.JPG",
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
				{imageData.map((src, i) => (
					<div className="masonry-item" key={i}>
						<img src={src} alt="" loading="lazy" onLoad={(e) => e.target.classList.add("loaded")} />
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
