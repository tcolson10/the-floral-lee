import { useEffect } from "react";
import { Link } from "react-router-dom";

function MeetYourFlorist() {
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
			<div className="about-section" style={{ paddingTop: "2rem" }}>
				<div className="about-image">
					<img
						src="/images/portfolio/60C0321F-D969-465E-B8C1-3DC0FB7C835B.png"
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
						Flowers have been my thing for as long as I can remember — the way a single arrangement can completely change the feeling of a room, the way a bouquet can make a bride stop and cry, the way the right bloom in the right place just makes everything feel like it was meant to be. That's what I get to do every single day, and I genuinely cannot believe it's my job.
					</p>
					<p>
						I started The Floral Lee because I wanted to create something personal. Not a big production, not a conveyor belt of identical centerpieces — real, custom, intentional floral design for people who care about the details. Every couple I work with gets my full attention, from the first conversation all the way to the morning of the event.
					</p>
					<p>
						Based in Austin, Texas, I work with weddings, bridal showers, baby showers, corporate events, and really anything where flowers can make the moment feel more like <em>you</em>. I love a good mood board, a scattered Pinterest folder, and the challenge of taking someone's scattered vision and making it into something even better than they imagined.
					</p>
					<p>
						If you're here, I'd love to work with you. Reach out and let's talk flowers.
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
