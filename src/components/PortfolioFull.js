import { useEffect } from "react";
import { Link } from "react-router-dom";

const imageData = [
	"/images/portfolio/ryan_rex.jpeg",
	"/images/portfolio/31DF05DE-173F-4413-BE67-981734AD240A.png",
	"/images/portfolio/A026D1B3-872D-48AC-819A-9B2375B3BA87.jpeg",
	"/images/portfolio/BEB46068-AAFF-4F9B-A081-0511D326EC0C.jpeg",
	"/images/portfolio/ryan_rex.jpeg",
	"/images/portfolio/31DF05DE-173F-4413-BE67-981734AD240A.png",
	"/images/portfolio/A026D1B3-872D-48AC-819A-9B2375B3BA87.jpeg",
	"/images/portfolio/BEB46068-AAFF-4F9B-A081-0511D326EC0C.jpeg",
	"/images/portfolio/ryan_rex.jpeg",
	"/images/portfolio/31DF05DE-173F-4413-BE67-981734AD240A.png",
	"/images/portfolio/A026D1B3-872D-48AC-819A-9B2375B3BA87.jpeg",
	"/images/portfolio/BEB46068-AAFF-4F9B-A081-0511D326EC0C.jpeg",
];

function PortfolioFull() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="portfolio-page-container full-page">
			<div className="page-nav">
				<Link to="/" className="back-link" style={{ color: "var(--sage)" }}>
					← Back to Home
				</Link>
			</div>
			<div className="portfolio-header reveal">
				<span className="section-eyebrow">Our Work</span>
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
