import { useEffect } from "react";
import { Link } from "react-router-dom";

const imageData = [
	"/images/portfolio/IMG_4113.JPG",
	"/images/portfolio/IMG_5558.JPG",
	"/images/portfolio/IMG_6516.JPG",
	"/images/portfolio/IMG_6518.JPG",
	"/images/portfolio/IMG_6524.JPG",
	"/images/portfolio/IMG_6527.JPG",
	"/images/portfolio/IMG_6538.JPG",
	"/images/portfolio/IMG_6542.JPG",
	"/images/portfolio/IMG_6544.JPG",
	"/images/portfolio/IMG_6548.JPG",
	"/images/portfolio/IMG_6612.JPG",
	"/images/portfolio/IMG_8411.JPG",
	"/images/portfolio/IMG_8636.JPG",
	"/images/portfolio/IMG_8666.JPG",
	"/images/portfolio/IMG_8771.JPG",
	"/images/portfolio/IMG_9534.JPG",
	"/images/portfolio/IMG_9721.JPG",
	"/images/portfolio/IMG_0099.JPG",
	"/images/portfolio/IMG_0149.JPG",
	"/images/portfolio/IMG_0150.JPG",
	"/images/portfolio/IMG_0286.JPG",
	"/images/portfolio/EverAfter(3.24.24)-1841_Original 2.jpg",
	"/images/portfolio/EverAfter(3.24.24)-2391_Original.jpg",
];

function PortfolioFull() {
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
				{imageData.map((src, index) => (
					<div className="masonry-item" key={index}>
						<img src={src} alt="" loading="lazy" />
					</div>
				))}
			</div>
		</div>
	);
}

export default PortfolioFull;
