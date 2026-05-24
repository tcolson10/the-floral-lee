import { useEffect } from "react";
import { Link } from "react-router-dom";

function MeetYourFlorist() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="portfolio-page-container full-page">
			<div className="page-nav">
				<Link to="/meet" className="back-link" style={{ color: "var(--sage)" }}>
					← Back to Home
				</Link>
			</div>
			<div className="about-section" style={{ paddingTop: "2rem" }}>
				<div className="about-image">
					<img
						src="/images/portfolio/SL208247 (4) (1).jpg"
						alt="Shanna, The Floral Lee"
						loading="lazy"
					/>
				</div>
				<div className="about-text">
					<span className="section-eyebrow">Meet Your Florist</span>
					<h1 className="section-heading">
						Hi, I'm <em>Shanna</em>
					</h1>
					<p>
						Hi, I'm Shanna! My goal is to create floral designs that feel beautiful, captivating, and deeply personal to you. I want to hear all about your story — your life together, your love, and every detail you've been dreaming up for your wedding day. Every couple is uniquely different, and I believe your flowers should reflect that in a way that feels intentional and unforgettable.
					</p>
					<p>
						From the overall atmosphere to the smallest meaningful touches, I love designing florals that not only elevate your celebration, but also tell your story. My hope is that when you look back on your wedding day, your flowers feel like an extension of you — romantic, thoughtful, and full of feeling. I'm so honored to be a small part of such a meaningful season in your life, and I can't wait to create something truly beautiful together.
					</p>
					<Link to="/contact" className="about-cta">
						Get In Touch
					</Link>
				</div>
			</div>
		</div>
	);
}

export default MeetYourFlorist;
