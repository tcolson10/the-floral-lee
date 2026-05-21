import { Link } from "react-router-dom";

const imageData = [
	"/images/portfolio/ryan_rex.jpeg",
	"/images/portfolio/ryan_rex.jpeg",
	"/images/portfolio/ryan_rex.jpeg",
];

function Portfolio() {
	return (
		<div className="portfolio-page-container">
			<div className="portfolio-header reveal">
				<span className="section-eyebrow">Our Work</span>
				<h2 className="section-heading">
					A glimpse of <em>our craft</em>
				</h2>
				<p>From intimate ceremonies to grand celebrations</p>
			</div>
			<div className="masonry-grid">
				{imageData.map((src, i) => (
					<div className="masonry-item" key={i}>
						<img src={src} alt="" loading="lazy" />
					</div>
				))}
			</div>
			<Link to="/full-portfolio" className="portfolio-button">
				View Full Portfolio
			</Link>
		</div>
	);
}

export default Portfolio;
