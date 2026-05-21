import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const LandingPage = () => {
	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (!el) return;
		const h = document.querySelector("header")?.offsetHeight ?? 60;
		window.scrollTo({
			top: el.getBoundingClientRect().top + window.pageYOffset - h,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{/* Hero */}
			<div className="hero" id="home">
				<video
					className="hero-bg"
					src="/images/portfolio/video.mov"
					autoPlay
					muted
					loop
					playsInline
				/>
				<div className="hero-overlay" />
				<div className="hero-content">
					<span className="hero-eyebrow hero-fade-in" style={{ animationDelay: "200ms" }}>Wedding Floral Design</span>
					<h1 className="hero-headline">
						<em>
							{"The Floral Lee".split("").map((char, i) => (
								<span key={i} className="hero-letter" style={{ animationDelay: `${400 + i * 80}ms` }}>
									{char === " " ? " " : char}
								</span>
							))}
						</em>
					</h1>
					<p className="hero-tagline hero-fade-in" style={{ animationDelay: "1800ms" }}>Where every bloom tells your story</p>
					<div className="hero-actions hero-fade-in" style={{ animationDelay: "2000ms" }}>
						<button
							className="hero-btn-primary"
							onClick={() => scrollTo("portfolio")}
						>
							View Our Work
						</button>
						<button
							className="hero-btn-outline"
							onClick={() => scrollTo("contact")}
						>
							Get In Touch
						</button>
					</div>
				</div>
			</div>

			{/* Stats Bar */}
			<div className="stats-bar">
				<div className="stat-item">
					<span className="stat-number">Austin</span>
					<span className="stat-label">Texas Florist</span>
				</div>
				<div className="stat-item">
					<span className="stat-number">100+</span>
					<span className="stat-label">Events Designed</span>
				</div>
				<div className="stat-item">
					<span className="stat-number">&#8734;</span>
					<span className="stat-label">Love for Flowers</span>
				</div>
			</div>

			{/* Portfolio */}
			<div id="portfolio">
				<Portfolio />
			</div>

			{/* Meet Your Florist Preview */}
			<div className="about-section reveal" id="meet">
				<div className="about-collage">
					<img src="/images/portfolio/SL208448.jpg" alt="" loading="lazy" />
					<img src="/images/portfolio/SL208530.jpg" alt="" loading="lazy" />
					<img src="/images/portfolio/SL208618.jpg" alt="" loading="lazy" />
					<img src="/images/portfolio/SL208247.jpg" alt="" loading="lazy" />
				</div>
				<div className="about-text">
					<span className="section-eyebrow">Meet Your Florist</span>
					<h2 className="section-heading">
						The person behind <em>every bloom</em>
					</h2>
					<p>
						Hi, I'm Shanna! I'm the hands and heart behind The Floral Lee, and I've been obsessed with flowers for as long as I can remember.
					</p>
					<p>
						Based in Austin, Texas, I create custom floral designs for weddings and events that feel personal, intentional, and completely you.
					</p>
					<Link to="/meet-your-florist" className="about-cta">
						Read More
					</Link>
				</div>
			</div>

			{/* Testimonials */}
			<div id="testimonials">
				<Testimonials />
			</div>

			{/* Contact */}
			<div id="contact">
				<Contact />
			</div>
		</div>
	);
};

export default LandingPage;
