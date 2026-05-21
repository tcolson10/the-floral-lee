import { Link } from "react-router-dom";

const imageData = [
	"/images/portfolio/ryan_rex.jpeg",
	"/images/portfolio/31DF05DE-173F-4413-BE67-981734AD240A.png",
	"/images/portfolio/3F4E8BE1-F38F-4F1F-B2AD-BD030137E049.jpeg",
	"/images/portfolio/51D44019-5C5A-4F22-A6E9-9F7A816E702A.jpeg",
	"/images/portfolio/A026D1B3-872D-48AC-819A-9B2375B3BA87.jpeg",
	"/images/portfolio/A9BD9E8C-FD73-4C65-B1C2-1B26D15FA66B.jpeg",
	"/images/portfolio/ADB872D6-2BBA-4350-9520-93278E61B3CC.jpeg",
	"/images/portfolio/BEB46068-AAFF-4F9B-A081-0511D326EC0C.jpeg",
	"/images/portfolio/063A60BA-EB42-42FA-9B7E-AFA069E5A5FB%20(1).jpeg",
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
